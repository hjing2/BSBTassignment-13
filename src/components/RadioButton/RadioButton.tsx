import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledLabel = styled.label`
  display: block;
`;

const StyledInput = styled.input<{ disabled: boolean }>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  disabled = false,
}) => (
  <StyledLabel>
    <StyledInput type="radio" name={name} value={value} disabled={disabled} />
    {label}
  </StyledLabel>
);

export default RadioButton;
