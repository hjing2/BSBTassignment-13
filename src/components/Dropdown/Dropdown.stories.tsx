import React from 'react';
import { Meta, StoryFn } from '@storybook/react'; 
import Dropdown, { DropdownProps } from './Dropdown';

export default {
    title: 'Components/Dropdown',
    component: Dropdown,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;
  
const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  disabled: true,
};