import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroImage from './HeroImage';

test('renders HeroImage component', () => {
    render(<HeroImage src="https://via.placeholder.com/800x300" alt="Placeholder Image" />);
    const imageElement = screen.getByAltText('Placeholder Image');
    expect(imageElement).toBeVisible();
});

test('changes opacity when disabled', () => {
    render(<HeroImage src="https://via.placeholder.com/800x300" alt="Placeholder Image" disabled />);
    const imageElement = screen.getByAltText('Placeholder Image');
    expect(imageElement).toHaveStyle('opacity: 0.5');
});
