import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import RadioButton, { RadioButtonProps } from './RadioButton';

export default {
    title: 'Components/RadioButton',
    component: RadioButton,
    argTypes: {
        label: { control: 'text' },
        name: { control: 'text' },
        value: { control: 'text' },
        disabled: { control: 'boolean' },
    },
} as Meta;

const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Option 1',
    name: 'radioGroup',
    value: 'option1',
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Option 1',
    name: 'radioGroup',
    value: 'option1',
    disabled: true,
};
