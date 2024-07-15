import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dropdown from './Dropdown';

test('renders Dropdown component', () => {
    render(<Dropdown options={['Option 1', 'Option 2']} />);
    expect(screen.getByRole('combobox')).toBeVisible();
});

test('changes background color when disabled', () => {
    render(<Dropdown options={['Option 1', 'Option 2']} disabled />);
    expect(screen.getByRole('combobox')).toHaveStyle('background-color: grey');
});
