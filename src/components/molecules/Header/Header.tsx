import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Typography, Spacer } from "@rtab/components/atoms";

export const Header = () => {
  return (
    <AppBar>
      <Toolbar variant="dense">
        <Typography variant="subtitle1">React Quiz</Typography>
        <Spacer variant="vertical" size={24} />

        <Spacer variant="vertical" size={8} />
        <Typography variant="subtitle2">
          Atomic Design System Structure
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
