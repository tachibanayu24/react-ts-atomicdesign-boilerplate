import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { withKnobs, radios } from "@storybook/addon-knobs";
import { Icon } from ".";
import { Spacer } from "../Spacer";

export default {
  title: "Atoms/Icon",
  decorators: [withKnobs],
};

export const _Default: Story<ComponentProps<typeof Icon>> = () => {
  const size = radios(
    "size",
    {
      lg: "lg",
      md: "md",
      sm: "sm",
    },
    "md"
  );

  const color = radios(
    "color",
    {
      primary: "primary",
      secondary: "secondary",
      gray: "gray",
      white: "white",
      red: "red",
    },
    "gray"
  );

  return (
    <div
      css={`
        margin: -1rem;
        padding: 1rem;
        width: 100vw;
        height: 100vh;
        ${color === "white" && `background-color: gray;`}
      `}
    >
      <Icon size={size} color={color} icon="user" />
      <Spacer variant="vertical" size={16} />
      <Icon size={size} color={color} icon="circle" />
      <Spacer variant="vertical" size={16} />
      <Icon size={size} color={color} icon="cross" />
      <Spacer variant="vertical" size={16} />
      <Icon size={size} color={color} icon="all" />
      <Spacer variant="vertical" size={16} />
      <Icon size={size} color={color} icon="science" />
      <Spacer variant="vertical" size={16} />
      <Icon size={size} color={color} icon="music" />
      <Spacer variant="vertical" size={16} />
      <Icon size={size} color={color} icon="fire" />
      <Spacer variant="vertical" size={16} />
    </div>
  );
};
