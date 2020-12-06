import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from "lodash";
import {
  Typography,
  Button,
  Loading,
  Icon,
  Spacer,
  Tooltip,
} from "@rtab/components/atoms";
import { ChoiceAnswerButton, DifficultyChip } from "@rtab/components/molecules";
import { get, buildReplyToAnswer } from "@rtab/utils";

interface QuizType {
  type: "multiple" | "boolean";
  difficulty: "easy" | "medium" | "hard";
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export const Home = () => {
  const [quiz, setQuiz] = useState<QuizType>({});
  const [loadingQuiz, setLoadingQuiz] = useState<boolean>(false);
  const [isFetchedQuiz, setIsFetchedQuiz] = useState<boolean>(false);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    isAnswered && setResult(buildReplyToAnswer(isCorrect));
  }, [isAnswered, isCorrect]);

  const resetState = () => {
    setQuiz(null);
    setIsFetchedQuiz(false);
    setIsAnswered(false);
    setIsCorrect(false);
    setResult(null);
  };

  const fetchQuiz = (categoryNumber: number | null) => {
    setLoadingQuiz(true);
    resetState();

    get("/", { amount: 1, category: categoryNumber })
      .then((res: { data: { results: React.SetStateAction<QuizType>[] } }) => {
        setQuiz(res.data.results[0]);
      })
      .catch((error: Error) => console.error(error))
      .finally(() => {
        setIsFetchedQuiz(true);
        setLoadingQuiz(false);
      });
  };

  const submitAnswer = (correctAnswer: string, choosenAnswer: string) => {
    setIsAnswered(true);
    setIsCorrect(correctAnswer === choosenAnswer);
  };

  return (
    <>
      <Typography variant="h4" align="center" color="primary" bold>
        TRIVIA QUIZ
      </Typography>

      <Typography variant="body1" align="center">
        Which category of quiz do you want to challenge?
      </Typography>

      <Spacer variant="vertical" size={56} />

      <StyledFlexWrapper>
        <StyledTypography variant="body1" bold gutterBottom>
          {isAnswered ? `👇 Try again 👇` : `👇 Click 👇`}
        </StyledTypography>
      </StyledFlexWrapper>

      <StyledFlexWrapper>
        <Tooltip title="ALL">
          <Button variant="contained" onClick={() => fetchQuiz(null)}>
            <Icon icon="all" size="md" color="grey" />
          </Button>
        </Tooltip>
        <Spacer variant="vertical" size={16} />
        <Tooltip title="JAPANESE ANIME">
          <Button variant="contained" onClick={() => fetchQuiz(31)}>
            <Icon icon="anime" size="md" color="grey" />
          </Button>
        </Tooltip>
        <Spacer variant="vertical" size={16} />
        <Tooltip title="ANIMAL">
          <Button variant="contained" onClick={() => fetchQuiz(27)}>
            <Icon icon="animal" size="md" color="grey" />
          </Button>
        </Tooltip>
        <Spacer variant="vertical" size={16} />
        <Tooltip title="SCIENCE">
          <Button variant="contained" onClick={() => fetchQuiz(17)}>
            <Icon icon="science" size="md" color="grey" />
          </Button>
        </Tooltip>
        <Spacer variant="vertical" size={16} />
        <Tooltip title="MUSIC">
          <Button variant="contained" onClick={() => fetchQuiz(12)}>
            <Icon icon="music" size="md" color="grey" />
          </Button>
        </Tooltip>
      </StyledFlexWrapper>

      <Spacer variant="horizontal" size={80} />

      {loadingQuiz && (
        <StyledFlexWrapper>
          <Loading size="lg" color="grey" />
        </StyledFlexWrapper>
      )}

      {!loadingQuiz && isFetchedQuiz && (
        <>
          <StyledFlexWrapper alignItems="baseline">
            <Typography variant="h5" align="center" color="secondary" bold>
              Q.
            </Typography>
            <Spacer variant="vertical" size={8} />

            <Typography variant="body2" align="center" bold>
              {!_.isEmpty(quiz) &&
                quiz.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}
            </Typography>
          </StyledFlexWrapper>

          <Spacer variant="horizontal" size={16} />

          <StyledFlexWrapper>
            <DifficultyChip difficulty={quiz.difficulty} />
          </StyledFlexWrapper>

          <Spacer variant="horizontal" size={24} />

          <StyledFlexWrapper>
            {quiz &&
              quiz.type === "multiple" &&
              _.shuffle([quiz.correct_answer, ...quiz.incorrect_answers]).map(
                (answer, index) => (
                  <StyledButtonWrapper key={`StyledButtonWrapper__${index}`}>
                    <ChoiceAnswerButton
                      answer={answer}
                      disabled={isAnswered}
                      onClick={() => submitAnswer(quiz.correct_answer, answer)}
                    />
                  </StyledButtonWrapper>
                )
              )}
            {quiz && quiz.type === "boolean" && (
              <>
                <StyledButtonWrapper>
                  <ChoiceAnswerButton
                    answer="no"
                    disabled={isAnswered}
                    onClick={() => submitAnswer(quiz.correct_answer, "False")}
                  />
                </StyledButtonWrapper>
                <StyledButtonWrapper>
                  <ChoiceAnswerButton
                    answer="yes"
                    disabled={isAnswered}
                    onClick={() => submitAnswer(quiz.correct_answer, "True")}
                  />
                </StyledButtonWrapper>
              </>
            )}
          </StyledFlexWrapper>

          <Spacer variant="horizontal" size={40} />

          <Typography
            variant="h4"
            color={isCorrect ? "secondary" : "error"}
            align="center"
            bold
          >
            {result}
          </Typography>

          <Spacer variant="horizontal" size={32} />

          {isAnswered && !isCorrect && (
            <Typography variant="body2" align="center">
              The correct answer is ...{quiz.correct_answer}!
            </Typography>
          )}
        </>
      )}
    </>
  );
};

const StyledTypography = styled(Typography)`
  animation: fluffy 2s ease infinite;

  @keyframes fluffy {
    0% {
      transform: translateY(0);
    }
    5% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-8px);
    }
    25% {
      transform: translateY(0);
    }
    30% {
      transform: translateY(-8px);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const StyledFlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  ${(props: { alignItems?: string }) =>
    props.alignItems && `align-items: ${props.alignItems};`}
`;

const StyledButtonWrapper = styled.div`
  padding: 0 8px;
`;
