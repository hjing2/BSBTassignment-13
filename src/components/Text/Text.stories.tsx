import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Text, { TextProps } from './Text';

export default {
    title: 'Components/Text',
    component: Text,
    argTypes: {
        content: { control: 'text' },
        disabled: { control: 'boolean' },
    },
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
    content: 'This is a text content',
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    content: 'This is a text content',
    disabled: true,
};
