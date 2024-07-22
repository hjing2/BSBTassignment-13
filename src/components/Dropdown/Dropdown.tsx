import React from 'react';
import styled from 'styled-components';

export interface DropdownProps {
  options: string[];
  disabled?: boolean;
}

const StyledSelect = styled.select<{ disabled: boolean }>`
  background-color: ${({ disabled }) => (disabled ? 'grey' : 'white')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const Dropdown: React.FC<DropdownProps> = ({ options, disabled = false }) => (
  <StyledSelect disabled={disabled}>
    {options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </StyledSelect>
);

export default Dropdown;
