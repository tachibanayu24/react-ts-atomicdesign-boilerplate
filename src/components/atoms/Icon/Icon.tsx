import React from "react";
import styled from "styled-components";

import User from "@rtab/images/icons/user.svg";
import Cross from "@rtab/images/icons/cross.svg";

const SIZE = {
  lg: 32,
  md: 24,
  sm: 16,
};

type Props = {
  size: "sm" | "md" | "lg";
  icon: "user" | "cross";
  color: "primary" | "secondary" | "gray" | "white";
};

export const Icon = (props: Props) => {
  const icons = {
    user: <User width={SIZE[props.size]} height={SIZE[props.size]} />,
    cross: <Cross width={SIZE[props.size]} height={SIZE[props.size]} />,
  };

  return (
    <StyledWrapper color={props.color} size={props.size}>
      {icons[props.icon]}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.svg`
  height: ${(props) => SIZE[props.size]}px;
  width: ${(props) => SIZE[props.size]}px;
  fill: ${(props) => props.theme.palette[props.color].main};
  stroke: ${(props) => props.theme.palette[props.color].main};
`;
