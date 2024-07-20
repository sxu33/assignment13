import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Dropdown, { DropdownProps } from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as Meta<typeof Dropdown>;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  primary: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  primary: true,
  disabled: true,
};
