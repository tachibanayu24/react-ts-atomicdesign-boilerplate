import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Typography, Spacer } from "@rtab/components/atoms";

export const Header = () => {
  return (
    <AppBar>
      <Toolbar variant="dense">
        <Typography>
          <Typography variant="subtitle1" component="span">
            TRIVIA QUIZ
          </Typography>
          <Spacer variant="vertical" size={24} />
          <Typography variant="caption" component="span">
            React TypeScript AtomicDesign Boilerplate
          </Typography>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
