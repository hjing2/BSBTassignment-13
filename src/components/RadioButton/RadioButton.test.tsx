import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RadioButton from './RadioButton';

test('renders RadioButton component', () => {
    render(<RadioButton label="Option 1" name="radioGroup" value="option1" />);
    expect(screen.getByLabelText('Option 1')).toBeVisible();
});

test('changes cursor when disabled', () => {
    render(<RadioButton label="Option 1" name="radioGroup" value="option1" disabled />);
    expect(screen.getByLabelText('Option 1')).toHaveStyle('cursor: not-allowed');
});
