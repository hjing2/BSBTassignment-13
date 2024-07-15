import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Table from './Table';

test('renders Table component', () => {
    render(<Table headers={['Header 1']} rows={[['Cell 1']]} />);
    expect(screen.getByText('Header 1')).toBeVisible();
    expect(screen.getByText('Cell 1')).toBeVisible();
});

test('changes opacity when disabled', () => {
    render(<Table headers={['Header 1']} rows={[['Cell 1']]} disabled />);
    const tableElement = screen.getByRole('table');
    expect(tableElement).toHaveStyle('opacity: 0.5');
});
