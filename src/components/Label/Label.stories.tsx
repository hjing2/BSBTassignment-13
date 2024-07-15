import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Label, { LabelProps } from './Label';

export default {
    title: 'Components/Label',
    component: Label,
    argTypes: {
        text: { control: 'text' },
        disabled: { control: 'boolean' },
    },
} as Meta;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Label Text',
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    text: 'Label Text',
    disabled: true,
};
