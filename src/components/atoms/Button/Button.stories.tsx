import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { Button } from "./Button";

export default {
  title: "Atoms/Button",
  decorators: [withKnobs],
};

export const _Default: Story<ComponentProps<typeof Button>> = () => {
  return (
    <div css="display: flex;">
      {["primary", "secondary", "default"].map((color, i) => (
        <div css="width: 360px;" key={`story--Button__${i}`}>
          <Button variant="outlined" color={color} onClick={action("clicked")}>
            Outlined Button
          </Button>
          <div css="margin: 16px" />
          <Button variant="contained" color={color} onClick={action("clicked")}>
            Cointained Button
          </Button>
          <div css="margin: 16px" />
          <Button variant="text" color={color} onClick={action("clicked")}>
            Text Button
          </Button>
        </div>
      ))}
      <div css="width: 360px;">
        <Button disabled={true}>Outlined Button</Button>
        <div css="margin: 16px" />
        <Button disabled={true}>Cointained Button</Button>
        <div css="margin: 16px" />
        <Button disabled={true}>Text Button</Button>
      </div>
    </div>
  );
};
