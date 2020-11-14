import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { withKnobs, select } from "@storybook/addon-knobs";
import { Typography } from "./Typography";

export default {
  title: "Atoms/Typography",
  decorators: [withKnobs],
};

export const _Default: Story<ComponentProps<typeof Typography>> = () => {
  const color = select(
    "Color",
    {
      TextPrimary: "textPrimary",
      TextSecondary: "textSecondary",
      Primary: "primary",
      Secondary: "secondary",
      Error: "error",
      Inherit: "inherit",
    },
    "textPrimary"
  );

  return (
    <div>
      <Typography variant="h3" color={color} gutterBottom>
        h3. Heading
      </Typography>
      <Typography variant="h4" color={color} gutterBottom>
        h4. Heading
      </Typography>
      <Typography variant="h5" color={color} gutterBottom>
        h5. Heading
      </Typography>
      <Typography variant="h6" color={color} gutterBottom>
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" color={color} gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" color={color} gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1" color={color} gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" color={color} gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography component="div" variant="button" color={color} gutterBottom>
        BUTTON TEXT
      </Typography>
      <Typography component="div" variant="caption" color={color} gutterBottom>
        caption text
      </Typography>
    </div>
  );
};
