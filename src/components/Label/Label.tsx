import React from 'react';
import styled from 'styled-components';

export interface LabelProps {
  text: string;
  disabled?: boolean;
}

const StyledLabel = styled.label<LabelProps>`
  color: ${props => props.disabled ? 'grey' : 'black'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

const Label: React.FC<LabelProps> = ({ text, disabled = false }) => (
  <StyledLabel disabled={disabled} text={text}> {/* Pass the text prop */}
    {text}  {/* You can remove this line if you don't need to render the text twice */}
  </StyledLabel>
);

export default Label;
