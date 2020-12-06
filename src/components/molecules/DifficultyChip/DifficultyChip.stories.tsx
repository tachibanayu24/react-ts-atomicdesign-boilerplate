import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { Spacer } from "@rtab/components/atoms";
import { DifficultyChip } from ".";

export default {
  title: "Molecules/DifficultyChip",
};

export const _Default: Story<ComponentProps<typeof DifficultyChip>> = () => {
  return (
    <>
      <DifficultyChip difficulty="easy" />
      <Spacer variant="horizontal" size={24} />
      <DifficultyChip difficulty="medium" />
      <Spacer variant="horizontal" size={24} />
      <DifficultyChip difficulty="hard" />
    </>
  );
};
