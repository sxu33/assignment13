import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Label, { LabelProps } from "./Label";

export default {
  title: "Components/Label",
  component: Label,
  argTypes: {
    label: { control: "text" },
    primary: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Label",
  primary: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Label",
  primary: true,
  disabled: true,
};
