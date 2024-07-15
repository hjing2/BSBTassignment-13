import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

test('renders Card component', () => {
    render(<Card title="Card Title" content="This is the card content." />);
    expect(screen.getByText('Card Title')).toBeVisible();
    expect(screen.getByText('This is the card content.')).toBeVisible();
});

test('changes background color when disabled', () => {
    render(<Card title="Card Title" content="This is the card content." disabled />);
    expect(screen.getByText('Card Title').parentElement).toHaveStyle('background-color: grey');
});
