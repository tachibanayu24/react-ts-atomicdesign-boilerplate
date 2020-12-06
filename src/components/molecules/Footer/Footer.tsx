import React from "react";
import styled from "styled-components";
import { Typography } from "@rtab/components/atoms";

export const Footer = () => {
  return (
    <StyledFooter>
      <Typography variant="caption" light>
        This application uses the{" "}
        <a href="https://opentdb.com/api_config.php">Trivia API</a>.
      </Typography>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.palette.grey[50]};
  bottom: 0;
  position: absolute;
  width: 100vw;
  text-align: center;
`;
