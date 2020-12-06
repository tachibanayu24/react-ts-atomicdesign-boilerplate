import React from "react";
import styled from "styled-components";
import { Typography as MuiTypography } from "@material-ui/core";

type CustomProps = {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "button"
    | "caption";
  bold?: boolean;
};

type Props = Omit<React.ComponentProps<typeof MuiTypography>, "variant"> &
  CustomProps;

export const Typography = (props: Props) => <StyledTypography {...props} />;

const StyledTypography = styled(MuiTypography)`
  &.MuiTypography-root {
    ${(props: Props) => props.bold && `font-weight: bold;`}
  }
`;
