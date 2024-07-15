import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Card, { CardProps } from './Card';

export default {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        title: { control: 'text' },
        content: { control: 'text' },
        disabled: { control: 'boolean' },
    },
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Card Title',
    content: 'This is the card content.',
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    title: 'Card Title',
    content: 'This is the card content.',
    disabled: true,
};
