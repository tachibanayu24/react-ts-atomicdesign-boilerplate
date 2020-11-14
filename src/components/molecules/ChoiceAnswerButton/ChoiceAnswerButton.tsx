import React from "react";
import { Button, Icon, Typography } from "@rtab/components/atoms";

type Props = {
  answer: "yes" | "no" | string;
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
};

export const ChoiceAnswerButton = (props: Props) => {
  if (props.answer === "yes") {
    return (
      <Button variant="contained" onClick={props.onClick}>
        <Icon icon="circle" size="md" color="green" />
      </Button>
    );
  } else if (props.answer === "no") {
    return (
      <Button variant="contained" onClick={props.onClick}>
        <Icon icon="cross" size="md" color="secondary" />
      </Button>
    );
  } else {
    return (
      <Button variant="contained" onClick={props.onClick}>
        <Typography variant="button">{props.answer}</Typography>
      </Button>
    );
  }
};
