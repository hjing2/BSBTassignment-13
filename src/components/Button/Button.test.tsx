import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

test('renders Button component', () => {
    render(<Button text="Click Me" />);
    expect(screen.getByText('Click Me')).toBeVisible();
});

test('changes background color when disabled', () => {
    render(<Button text="Click Me" disabled />);
    expect(screen.getByText('Click Me')).toHaveStyle('background-color: grey');
});
