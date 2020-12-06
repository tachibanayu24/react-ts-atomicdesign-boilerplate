import React from "react";
import styled from "styled-components";
import { Tooltip as MuiTooltip } from "@material-ui/core";
import { Typography } from "@rtab/components/atoms";

type Props = React.ComponentProps<typeof MuiTooltip>;

export const Tooltip = (props: Props) => {
  return (
    <StyledTooltip
      {...props}
      arrow
      title={<Typography variant="caption">{props.title}</Typography>}
    >
      {props.children}
    </StyledTooltip>
  );
};

const StyledTooltip = styled(MuiTooltip)`
  &.MuiTooltip-tooltip {
    padding: 8px 16px !important;
  }
`;
