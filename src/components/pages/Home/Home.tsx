import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Typography,
  Button,
  Loading,
  Icon,
  Spacer,
} from "@rtab/components/atoms";
import { ChoiceAnswerButton } from "@rtab/components/molecules";
import { get } from "@rtab/utils";

// type Props = React.ComponentProps<typeof MuiButton>;

export const Home = () => {
  const [quiz, setQuiz] = useState(null);
  const [correct, setCorrect] = useState(null);
  const [loadingQuiz, setLoadingQuiz] = useState(false);

  console.log(quiz);

  const fetchQuiz = () => {
    setLoadingQuiz(true);

    get("/", { amount: 1, category: null })
      .then((res) => {
        setQuiz(res.data.results[0]);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoadingQuiz(false));
  };

  const submitAnswer = (correctAnswer, choosenAnswer) => {
    console.log(choosenAnswer);
    correctAnswer === choosenAnswer ? setCorrect(true) : setCorrect(false);
  };

  return (
    <>
      <Typography
        variant="h4"
        align="center"
        color="secondary"
        bold
        gutterBottom
      >
        TRIVIA QUIZ
      </Typography>

      <Typography variant="body1" align="center" gutterBottom>
        Which category of quiz do you want to challenge?
      </Typography>

      <Spacer variant="vertical" size={24} />

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

      {loadingQuiz && !quiz ? (
        <StyledFlexWrapper>
          <Loading size="lg" color="gray" />
        </StyledFlexWrapper>
      ) : (
        <>
          <StyledDiv>
            <Typography variant="body1" align="center">
              {quiz &&
                quiz.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}
            </Typography>
          </StyledDiv>
          <StyledDiv>
            <StyledFlexWrapper>
              {quiz &&
                quiz.type === "multiple" &&
                [quiz.correct_answer, ...quiz.incorrect_answers].map(
                  (answer, index) => (
                    <StyledButtonWrapper key={`StyledButtonWrapper__${index}`}>
                      <ChoiceAnswerButton
                        answer={answer}
                        onClick={() =>
                          submitAnswer(quiz.correct_answer, answer)
                        }
                      />
                    </StyledButtonWrapper>
                  )
                )}
            </StyledFlexWrapper>
          </StyledDiv>
          {correct ? "Correct!" : "Umm..."}
        </>
      )}
    </>
  );
};

const StyledFlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledDiv = styled.div`
  margin: 40px;
`;

const StyledButtonWrapper = styled.div`
  padding: 0 8px;
`;
