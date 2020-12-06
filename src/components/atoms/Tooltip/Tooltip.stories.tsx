import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";
import { Tooltip, Button } from "@rtab/components/atoms";

export default {
  title: "Atoms/Tooltip",
  decorators: [withKnobs],
};

export const _Default: Story<ComponentProps<typeof Tooltip>> = () => {
  return (
    <Tooltip title="This is Tooltip">
      <Button>Hover!</Button>
    </Tooltip>
  );
};
