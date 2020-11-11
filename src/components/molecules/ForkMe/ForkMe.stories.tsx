import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";
import { ForkMe } from "./ForkMe";

export default {
  title: "Molecules/ForkMe",
  decorators: [withKnobs],
};

export const _Default: Story<ComponentProps<typeof ForkMe>> = () => {
  return <ForkMe />;
};
