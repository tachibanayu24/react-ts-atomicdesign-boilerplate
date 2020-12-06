import React, { useState, useEffect, createRef } from "react";
import styled from "styled-components";
import {
  Typography,
  Button,
  Loading,
  Icon,
  Spacer,
} from "@rtab/components/atoms";
import { ChoiceAnswerButton } from "@rtab/components/molecules";
import { get, buildReplyToAnswer } from "@rtab/utils";

// type Props = React.ComponentProps<typeof MuiButton>;

export const Home = () => {
  const [quiz, setQuiz] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [result, setResult] = useState(null);
  const [loadingQuiz, setLoadingQuiz] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    setResult(buildReplyToAnswer(isCorrect));
  }, [isCorrect]);

  console.log(quiz);
  console.log(isCorrect);
  console.log(result);

  const resetState = () => {
    setQuiz(null);
    setIsCorrect(null);
    setResult(null);
  };

  const fetchQuiz = () => {
    setLoadingQuiz(true);
    resetState();

    get("/", { amount: 1, category: null })
      .then((res) => {
        setQuiz(res.data.results[0]);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoadingQuiz(false));
  };

  const submitAnswer = (correctAnswer, choosenAnswer) => {
    correctAnswer === choosenAnswer ? setIsCorrect(true) : setIsCorrect(false);
  };

  return (
    <>
      <Typography variant="h4" align="center" color="primary" bold>
        TRIVIA QUIZ
      </Typography>

      <Typography variant="body1" align="center">
        Which category of quiz do you want to challenge?
      </Typography>

      <Spacer variant="vertical" size={48} />

      {isCorrect !== null && (
        <StyledFlexWrapper>
          <Typography variant="body1" bold gutterBottom>
            👇 Try again 👇
          </Typography>
        </StyledFlexWrapper>
      )}
      <StyledFlexWrapper>
        <Button variant="contained" onClick={() => fetchQuiz()}>
          <Icon icon="all" size="md" color="gray" />
        </Button>
        <Spacer variant="vertical" size={16} />
        <Button variant="contained" onClick={console.log}>
          <Icon icon="science" size="md" color="gray" />
        </Button>
        <Spacer variant="vertical" size={16} />
        <Button variant="contained" onClick={console.log}>
          <Icon icon="music" size="md" color="gray" />
        </Button>
      </StyledFlexWrapper>

      <Spacer variant="horizontal" size={40} />

      {loadingQuiz && !quiz ? (
        <StyledFlexWrapper>
          <Loading size="lg" color="gray" />
        </StyledFlexWrapper>
      ) : (
        <StyledContainer>
          <Typography variant="h5" align="center" color="secondary" bold>
            QUESTION
          </Typography>

          <Spacer variant="horizontal" size={64} />

          <Typography variant="subtitle1" align="center" bold>
            {quiz &&
              quiz.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}
          </Typography>

          <Spacer variant="horizontal" size={24} />

          <StyledFlexWrapper>
            {quiz &&
              quiz.type === "multiple" &&
              [quiz.correct_answer, ...quiz.incorrect_answers].map(
                (answer, index) => (
                  <StyledButtonWrapper key={`StyledButtonWrapper__${index}`}>
                    <ChoiceAnswerButton
                      answer={answer}
                      disabled={isCorrect !== null}
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
                    disabled={isCorrect !== null}
                    onClick={() =>
                      submitAnswer(Boolean(quiz.correct_answer), false)
                    }
                  />
                </StyledButtonWrapper>
                <StyledButtonWrapper>
                  <ChoiceAnswerButton
                    answer="yes"
                    disabled={isCorrect !== null}
                    onClick={() =>
                      submitAnswer(Boolean(quiz.correct_answer), true)
                    }
                  />
                </StyledButtonWrapper>
              </>
            )}
          </StyledFlexWrapper>

          <Spacer variant="horizontal" size={40} />

          <StyledFlexWrapper>
            <Typography
              variant="h6"
              color={isCorrect ? "primary" : "error"}
              bold
            >
              {result}
            </Typography>
          </StyledFlexWrapper>
        </StyledContainer>
      )}
    </>
  );
};

const StyledContainer = styled.div`
  padding: 8px 0 24px 0;
  background-color: ${(props) => props.theme.palette.secondary[50]};
  border-radius: 8px;
  min-height: 360px;
`;

const StyledFlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButtonWrapper = styled.div`
  padding: 0 8px;
`;
