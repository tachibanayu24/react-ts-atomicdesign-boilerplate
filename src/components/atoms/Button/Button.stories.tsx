import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { Button } from "./Button";
import { Spacer, Loading, Typography } from "../.";

export default {
  title: "Atoms/Button",
  decorators: [withKnobs],
};

export const _Default: Story<ComponentProps<typeof Button>> = () => {
  return (
    <>
      <div css="display: flex;">
        {["outlined", "contained", "text", "disabled"].map((v, i) => (
          <div css="width: 360px;" key={`story--Button__${i}`}>
            <Typography variant="body1" css="text-transform: uppercase;">
              {v}
            </Typography>
            <Button
              variant={v}
              color="primary"
              onClick={action("clicked")}
              disabled={v === "disabled"}
            >
              Primary Color
            </Button>
            <Spacer variant="horizontal" size={16} />
            <Button
              variant={v}
              color="secondary"
              onClick={action("clicked")}
              disabled={v === "disabled"}
            >
              Secondary Color
            </Button>
            <Spacer variant="horizontal" size={16} />
            <Button
              variant={v}
              color="default"
              onClick={action("clicked")}
              disabled={v === "disabled"}
            >
              Default Color
            </Button>
            <Spacer variant="horizontal" size={16} />
            <Button
              variant={v}
              color="primary"
              onClick={action("clicked")}
              disabled={v === "disabled"}
            >
              <Loading size="sm" color={v === "contained" ? "white" : "gray"} />
            </Button>
            <Spacer variant="horizontal" size={16} />
          </div>
        ))}
      </div>
    </>
  );
};
