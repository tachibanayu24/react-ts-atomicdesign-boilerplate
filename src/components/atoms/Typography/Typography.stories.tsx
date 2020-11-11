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
      <Typography variant="h3" color={color}>
        h3. Heading
      </Typography>
      <Typography variant="h4" color={color}>
        h4. Heading
      </Typography>
      <Typography variant="h5" color={color}>
        h5. Heading
      </Typography>
      <Typography variant="h6" color={color}>
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" color={color}>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" color={color}>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1" color={color}>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" color={color}>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography component="div" variant="button" color={color}>
        BUTTON TEXT
      </Typography>
      <Typography component="div" variant="caption" color={color}>
        caption text
      </Typography>
    </div>
  );
};
