import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Label from './Label';

test('renders Label component', () => {
    render(<Label text="Label Text" />);
    expect(screen.getByText('Label Text')).toBeVisible();
});

test('changes color when disabled', () => {
    render(<Label text="Label Text" disabled />);
    expect(screen.getByText('Label Text')).toHaveStyle('color: grey');
});
