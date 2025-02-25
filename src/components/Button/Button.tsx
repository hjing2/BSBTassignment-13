import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ disabled: boolean }>`
  background-color: ${({ disabled }) => (disabled ? 'grey' : 'blue')};
  color: white;
  padding: 10px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const Button: React.FC<ButtonProps> = ({ text, disabled = false }) => {
  return <StyledButton disabled={disabled}>{text}</StyledButton>;
};

export default Button;
