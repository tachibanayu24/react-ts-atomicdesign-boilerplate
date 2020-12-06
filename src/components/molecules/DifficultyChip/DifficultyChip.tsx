import React from "react";
import styled from "styled-components";
import { Icon, Typography, Spacer } from "@rtab/components/atoms";

type Props = {
  difficulty: "easy" | "medium" | "hard";
};

const DIFFICULTY_POINTS = {
  easy: 1,
  medium: 2,
  hard: 3,
};

export const DifficultyChip = (props: Props) => {
  return (
    <StyledOuterDiv>
      <div>
        <Typography variant="caption" bold>
          Difficulty
        </Typography>
      </div>

      <StyledInnerDiv>
        <Typography variant="button">{props.difficulty}</Typography>

        <Spacer variant="vertical" size={16} />

        {[...Array(DIFFICULTY_POINTS[props.difficulty])].map((_, i) => (
          <Icon
            key={`DifficultyChip--${i}`}
            icon="fire"
            size="sm"
            color="red"
          />
        ))}
      </StyledInnerDiv>
    </StyledOuterDiv>
  );
};

const StyledOuterDiv = styled.div`
  width: 200px;
  background-color: ${(props) => props.theme.palette.red[50]};
  border-radius: 8px;
  padding: 8px;
`;

const StyledInnerDiv = styled.div`
  padding: 0 24px;
`;
