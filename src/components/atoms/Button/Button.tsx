import React from "react";
import styled from "styled-components";
import { Button as MuiButton } from "@material-ui/core";

type Props = React.ComponentProps<typeof MuiButton>;

export const Button = (props: Props) => <StyledMuiButton {...props} />;

const StyledMuiButton = styled(MuiButton)`
  &.MuiButton-root {
    border-radius: 0px;
    padding: 4 16px;
    text-transform: none;
    font-weight: lighter;
  }
`;
