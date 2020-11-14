import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";
import { Header } from ".";
import { Spacer, Typography } from "@rtab/components/atoms";
import { ForkMe } from "@rtab/components/molecules";

export default {
  title: "Molecules/Header",
  decorators: [withKnobs],
};

export const _Default: Story<ComponentProps<typeof Header>> = () => {
  return (
    <>
      <Header />
      <Spacer variant="horizontal" size={48} />
      {[...new Array(12)].map((_, i) => (
        <Typography key={`default__${i}`} variant="body2" gutterBottom>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et.
        </Typography>
      ))}
    </>
  );
};

export const WithForkMe: Story<ComponentProps<typeof Header>> = () => {
  return (
    <>
      <Header />
      <ForkMe />
      <Spacer variant="horizontal" size={48} />
      {[...new Array(12)].map((_, i) => (
        <Typography key={`default__${i}`} variant="body2" gutterBottom>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et.
        </Typography>
      ))}
    </>
  );
};
