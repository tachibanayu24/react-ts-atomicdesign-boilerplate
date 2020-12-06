import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";
import { Loading } from "./Loading";
import { Spacer } from "../Spacer";

export default {
  title: "Atoms/Loading",
  decorators: [withKnobs],
};

export const _Default: Story<ComponentProps<typeof Loading>> = () => {
  return (
    <>
      <div css="padding: 32px 40px; display: flex;">
        <Loading color="primary" size="lg" />
        <Spacer variant="vertical" size={16} />
        <Loading color="primary" size="md" />
        <Spacer variant="vertical" size={16} />
        <Loading color="primary" size="sm" />
      </div>
      <Spacer variant="horizontal" size={32} />
      <div css="padding: 32px 40px; display: flex;">
        <Loading color="secondary" size="lg" />
        <Spacer variant="vertical" size={16} />
        <Loading color="secondary" size="md" />
        <Spacer variant="vertical" size={16} />
        <Loading color="secondary" size="sm" />
      </div>
      <Spacer variant="horizontal" size={32} />
      <div css="padding: 32px 40px; display: flex;">
        <Loading color="grey" size="lg" />
        <Spacer variant="vertical" size={16} />
        <Loading color="grey" size="md" />
        <Spacer variant="vertical" size={16} />
        <Loading color="grey" size="sm" />
      </div>
    </>
  );
};
