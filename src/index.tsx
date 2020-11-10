import React from "react";
import ReactDOM from "react-dom";
import { Button } from "@rtab/components/atoms";

const Index = () => (
  <>
    <h1>Hello!</h1>
    <Button variant="contained">hi there</Button>
  </>
)

ReactDOM.render(<Index />, document.getElementById("index"));
