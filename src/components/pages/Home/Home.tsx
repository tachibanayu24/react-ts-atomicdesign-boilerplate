import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Typography, Button, Loading } from "@rtab/components/atoms";

// type Props = React.ComponentProps<typeof MuiButton>;

export const Home = () => {
  const [quiz, setQuiz] = useState(null);
  const [loadingQuiz, setLoadingQuiz] = useState(true);

  return (
    <>
      <Typography variant="h4" align="center" color="secondary" bold>
        TRIVIA QUIZ
      </Typography>

      {loadingQuiz ? (
        <StyledFlexWrapper>
          <Loading size="lg" color="gray" />
        </StyledFlexWrapper>
      ) : (
        <Typography variant="body" align="center"></Typography>
      )}
    </>
  );
};

const StyledFlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 80px;
`;
