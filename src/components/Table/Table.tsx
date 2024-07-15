import React from 'react';
import styled from 'styled-components';

export interface TableProps {
  headers: string[];
  rows: string[][];
  disabled?: boolean;
}

const StyledTable = styled.table<Pick<TableProps, 'disabled'>>`
  width: 100%;
  border-collapse: collapse;
  opacity: ${props => props.disabled ? 0.5 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

const StyledHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f2f2f2;
`;

const StyledRow = styled.tr``;

const StyledCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Table: React.FC<TableProps> = ({ headers, rows, disabled = false }) => (
  <StyledTable disabled={disabled}>
    <thead>
      <StyledRow>
        {headers.map((header, index) => (
          <StyledHeader key={index}>{header}</StyledHeader>
        ))}
      </StyledRow>
    </thead>
    <tbody>
      {rows.map((row, rowIndex) => (
        <StyledRow key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <StyledCell key={cellIndex}>{cell}</StyledCell>
          ))}
        </StyledRow>
      ))}
    </tbody>
  </StyledTable>
);

export default Table;
