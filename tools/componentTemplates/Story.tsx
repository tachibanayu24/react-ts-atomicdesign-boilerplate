import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Component } from ".";

export default {
  title: "Sample/Component",
  decorators: [withKnobs],
};

export const _Default: Story<ComponentProps<typeof Component>> = () => {
  const label = text("label", "This is Component");

  return <Component onClick={action("clicled")}>{label}</Component>;
};
