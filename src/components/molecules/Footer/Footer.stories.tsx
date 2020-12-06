import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { Footer } from ".";

export default {
  title: "Molecules/Footer",
};

export const _Default: Story<ComponentProps<typeof Footer>> = () => {
  return (
    <div>
      <div css="min-height: 100vh;" />
      <Footer />
    </div>
  );
};
