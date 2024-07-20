import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    primary: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  primary: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Button",
  primary: true,
  disabled: true,
};
