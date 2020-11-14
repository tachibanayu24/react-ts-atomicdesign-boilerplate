import React from "react";
import { render } from "@testing-library/react";
import { ChoiceAnswerButton } from ".";

test("should renders itself", () => {
  const rendered = render(
    <ChoiceAnswerButton onClick={console.log}>Component</ChoiceAnswerButton>
  );
  expect(rendered.container).toMatchSnapshot();
});
