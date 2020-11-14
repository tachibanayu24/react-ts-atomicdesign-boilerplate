import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { Spacer } from "@rtab/components/atoms";
import { ChoiceAnswerButton } from "@rtab/components/molecules";

export default {
  title: "Molecules/ChoiceAnswerButton",
  decorators: [withKnobs],
};

export const _Default: Story<ComponentProps<
  typeof ChoiceAnswerButton
>> = () => {
  return (
    <>
      <ChoiceAnswerButton answer="yes" onClick={action("clicked")} />
      <Spacer variant="vertical" size={16} />
      <ChoiceAnswerButton answer="no" onClick={action("clicked")} />
      <Spacer variant="vertical" size={16} />
      <ChoiceAnswerButton answer="This is answer" onClick={action("clicked")} />
    </>
  );
};
