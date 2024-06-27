import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Text, { TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    primary: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  content: 'Text',
  primary: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  content: 'Text',
  primary: true,
  disabled: true,
};
