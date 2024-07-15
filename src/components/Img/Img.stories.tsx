import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Img, { ImgProps } from './Img';

export default {
    title: 'Components/Img',
    component: Img,
    argTypes: {
        src: { control: 'text' },
        alt: { control: 'text' },
        disabled: { control: 'boolean' },
    },
} as Meta;

const Template: StoryFn<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
    src: 'https://via.placeholder.com/150',
    alt: 'Placeholder Image',
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    src: 'https://via.placeholder.com/150',
    alt: 'Placeholder Image',
    disabled: true,
};
