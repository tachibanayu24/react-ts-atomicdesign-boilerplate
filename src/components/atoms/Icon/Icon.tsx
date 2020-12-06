import React from "react";
import styled from "styled-components";

import User from "@rtab/images/icons/user.svg";
import Circle from "@rtab/images/icons/circle.svg";
import Cross from "@rtab/images/icons/cross.svg";
import All from "@rtab/images/icons/all.svg";
import Science from "@rtab/images/icons/science.svg";
import Music from "@rtab/images/icons/music.svg";
import Fire from "@rtab/images/icons/fire.svg";

const SIZE = {
  lg: 32,
  md: 24,
  sm: 16,
};

type Props = {
  size: "sm" | "md" | "lg";
  icon: "user" | "circle" | "cross" | "all" | "science" | "music" | "fire";
  color: "primary" | "secondary" | "gray" | "white" | "red";
};

export const Icon = (props: Props) => {
  const icons = {
    user: <User width={SIZE[props.size]} height={SIZE[props.size]} />,
    circle: <Circle width={SIZE[props.size]} height={SIZE[props.size]} />,
    cross: <Cross width={SIZE[props.size]} height={SIZE[props.size]} />,
    all: <All width={SIZE[props.size]} height={SIZE[props.size]} />,
    science: <Science width={SIZE[props.size]} height={SIZE[props.size]} />,
    music: <Music width={SIZE[props.size]} height={SIZE[props.size]} />,
    fire: <Fire width={SIZE[props.size]} height={SIZE[props.size]} />,
  };

  return (
    <StyledWrapper color={props.color} size={props.size}>
      {icons[props.icon]}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.svg`
  height: ${(props: Props) => SIZE[props.size]}px;
  width: ${(props: Props) => SIZE[props.size]}px;
  fill: ${(props) => props.theme.palette[props.color].main};
  stroke: ${(props) => props.theme.palette[props.color].main};
`;
