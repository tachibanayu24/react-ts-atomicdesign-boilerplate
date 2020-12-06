import React from "react";
import { Button, Icon, Typography } from "@rtab/components/atoms";

type Props = {
  answer: "yes" | "no" | string;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
};

export const ChoiceAnswerButton = (props: Props) => {
  if (props.answer === "yes") {
    return (
      <Button
        variant="contained"
        onClick={props.onClick}
        disabled={props.disabled}
      >
        <Icon icon="circle" size="md" color={props.disabled ? "grey" : "red"} />
      </Button>
    );
  } else if (props.answer === "no") {
    return (
      <Button
        variant="contained"
        onClick={props.onClick}
        disabled={props.disabled}
      >
        <Icon
          icon="cross"
          size="md"
          color={props.disabled ? "grey" : "secondary"}
        />
      </Button>
    );
  } else {
    return (
      <Button
        variant="contained"
        onClick={props.onClick}
        disabled={props.disabled}
      >
        <Typography variant="button">{props.answer}</Typography>
      </Button>
    );
  }
};
