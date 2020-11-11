import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, GlobalStyle } from "@rtab/components/utils";
import { Button, Spacer } from "@rtab/components/atoms";

const Index = () => (
  <>
    <GlobalStyle />
    <ThemeProvider>
      <h1>Hello!</h1>
      <Spacer variant="horizontal" size={16} />
      <Button variant="contained">hi there</Button>
    </ThemeProvider>
  </>
);

ReactDOM.render(<Index />, document.getElementById("index"));
