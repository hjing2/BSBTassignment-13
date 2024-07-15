import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Button from './Button';
import ButtonProps from "./Button"

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        text: { control: 'text' },
        disabled: { control: 'boolean' },
    },
} as Meta;

const Template: StoryFn<typeof ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Click Me',
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    text: 'Click Me',
    disabled: true,
};
