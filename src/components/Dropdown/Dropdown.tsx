import React from 'react';
import styled from 'styled-components';

export interface DropdownProps {
  options: string[]; // Array of string options for the dropdown
  disabled?: boolean; // Optional boolean for disabled state
}

const StyledSelect = styled.select<DropdownProps>`
  background-color: ${props => props.disabled ? 'grey' : 'white'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

const Dropdown: React.FC<DropdownProps> = ({ options, disabled = false }) => (
  <StyledSelect disabled={disabled} options={options}> {/* Pass the options prop */}
    {options.map((option, index) => (
      <option key={index} value={option}>{option}</option>
    ))}
  </StyledSelect>
);

export default Dropdown;