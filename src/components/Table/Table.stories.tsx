import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Table, { TableProps } from './Table';

export default {
    title: 'Components/Table',
    component: Table,
    // subcomponents: { TableHeader, TableRow, TableCell, TableFooter },
    argTypes: {
      backgroundColor: { control: 'color' },
      disabled: { control: 'boolean' },
    },
  } as Meta;

const Template: StoryFn<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
    headers: ['Header 1', 'Header 2', 'Header 3'],
    rows: [
        ['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3'],
        ['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3'],
    ],
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    headers: ['Header 1', 'Header 2', 'Header 3'],
    rows: [
        ['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3'],
        ['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3'],
    ],
    disabled: true,
};
