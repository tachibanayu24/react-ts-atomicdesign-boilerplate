import React from "react";
import { configure, addParameters, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { BrowserRouter as Router } from "react-router-dom";

configure(require.context("../src/components", true, /\.stories\.tsx$/), module);

addParameters({});

addDecorator(withKnobs);

addDecorator((story) => (
    <Router>{story()}</Router>
));
