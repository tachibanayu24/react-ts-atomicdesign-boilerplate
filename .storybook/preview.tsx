import React from "react";
import { configure, addParameters, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@rtab/components/utils";

configure(
  require.context("../src/components", true, /\.stories\.tsx$/),
  module
);

addParameters({});

addDecorator(withKnobs);

addDecorator((story) => (
  <ThemeProvider>
    <Router>{story()}</Router>
  </ThemeProvider>
));
