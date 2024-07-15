import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Text from './Text';

test('renders Text component', () => {
    render(<Text content="This is a text content" />);
    expect(screen.getByText('This is a text content')).toBeVisible();
});

test('changes color when disabled', () => {
    render(<Text content="This is a text content" disabled />);
    expect(screen.getByText('This is a text content')).toHaveStyle('color: grey');
});
