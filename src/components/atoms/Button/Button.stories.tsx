import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import { Button } from "./Button";

export default {
  title: "Atoms/Button",
  decorators: [withKnobs],
};

export const _Default: Story<ComponentProps<typeof Button>> = () => {
  const disabled = boolean("Disabled", false);
  const color = select(
    "Color",
    {
      Default: "default",
      Primary: "primary",
      Secondary: "secondary",
      Inherit: "inherit",
    },
    "primary"
  );

  return (
    <>
      <Button
        variant="outlined"
        disabled={disabled}
        color={color}
        onClick={action("clicked")}
      >
        Outlined Button
      </Button>
      <div css="margin: 16px" />
      <Button
        variant="contained"
        disabled={disabled}
        color={color}
        onClick={action("clicked")}
      >
        Cointained Button
      </Button>
      <div css="margin: 16px" />
      <Button
        variant="text"
        disabled={disabled}
        color={color}
        onClick={action("clicked")}
      >
        Text Button
      </Button>
    </>
  );
};
