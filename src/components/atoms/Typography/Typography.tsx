import React from "react";
import styled from "styled-components";
import { Typography as MuiTypography } from "@material-ui/core";

type CustomProps = {
  bold?: boolean;
};

type Props = React.ComponentProps<typeof MuiTypography> & CustomProps;

export const Typography = (props: Props) => <StyledTypography {...props} />;

const StyledTypography = styled(MuiTypography)`
  &.MuiTypography-root {
    ${(props: Props) => props.bold && `font-weight: bold;`}
  }
`;
