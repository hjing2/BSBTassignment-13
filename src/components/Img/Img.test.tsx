import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Img from './Img';

test('renders Img component', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" />);
    expect(screen.getByAltText('Placeholder Image')).toBeVisible();
});

test('changes opacity when disabled', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" disabled />);
    expect(screen.getByAltText('Placeholder Image')).toHaveStyle('opacity: 0.5');
});
