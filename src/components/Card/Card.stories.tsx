import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Card, { CardProps } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    primary: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof Card>;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Primary Card",
  content: "This is a primary card.",
  primary: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: "Disabled Card",
  content: "This card is disabled.",
  primary: true,
  disabled: true,
};
