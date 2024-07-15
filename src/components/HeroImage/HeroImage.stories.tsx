import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import HeroImage, { HeroImageProps } from './HeroImage';

export default {
    title: 'Components/HeroImage',
    component: HeroImage,
    argTypes: {
        src: { control: 'text' },
        alt: { control: 'text' },
        disabled: { control: 'boolean' },
    },
} as Meta;

const Template: StoryFn<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
    src: 'https://via.placeholder.com/800x300',
    alt: 'Placeholder Image',
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    src: 'https://via.placeholder.com/800x300',
    alt: 'Placeholder Image',
    disabled: true,
};
