import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Typography } from "@rtab/components/atoms";

export const Header = () => {
  return (
    <AppBar>
      <Toolbar variant="dense">
        <Typography variant="body1">React Quiz Sample App</Typography>
      </Toolbar>
    </AppBar>
  );
};
