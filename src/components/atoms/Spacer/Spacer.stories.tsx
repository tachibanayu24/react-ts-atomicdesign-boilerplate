import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { withKnobs, number } from "@storybook/addon-knobs";
import { Spacer } from "./Spacer";

export default {
  title: "Atoms/Spacer",
  decorators: [withKnobs],
};

const Box = () => <div css="background: aquamarine; width: 40px; height: 40px" />

export const _Default: Story<ComponentProps<typeof Spacer>> = () => {
  const size = number("Size", 24);


    return (
      <>
        <h3>Horizontal</h3>
        <Box />
        <Spacer variant="horizontal" size={size} />
        <Box />
        <Spacer variant="horizontal" size={size} />
        <Box />

        <hr />

        <h3>Vertical</h3>
        <div css="display: flex">
          <Box />
          <Spacer variant="vertical" size={size} />
          <Box />
          <Spacer variant="vertical" size={size} />
          <Box />
        </div>
    </>
  );
};
