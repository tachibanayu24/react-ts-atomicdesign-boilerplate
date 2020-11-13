import React from "react";
import { render } from "@testing-library/react";
import { Component } from ".";

test("should renders itself", () => {
  const rendered = render(
    <Component onClick={console.log}>Component</Component>
  );
  expect(rendered.container).toMatchSnapshot();
});
