import React from "react";
import styled from "styled-components";

type Props = {
  size: number;
  variant: "horizontal" | "vertical";
};

export const Spacer = (props: Props) => <StyledDiv {...props} />;

const StyledDiv = styled.div`
  display: inline-block;
  ${(props: Props) =>
    props.variant === "horizontal" &&
    `
    height: ${props.size}px;
    width: 100%;
  `}

  ${(props) =>
    props.variant === "vertical" &&
    `
    width: ${props.size}px;
    height: 100&;
  `}
`;
