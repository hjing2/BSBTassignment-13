import React from 'react';
import styled from 'styled-components';

export interface RadioButtonProps {
    label: string;
    name: string;
    value: string;
    disabled?: boolean;
}

const StyledRadioButton = styled.input<RadioButtonProps>`
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

const RadioButton: React.FC<RadioButtonProps> = ({ label, name, value, disabled = false }) => (
    <label>
        <StyledRadioButton
            label={label}
            type="radio"
            name={name}
            value={value}
            disabled={disabled}
        />
        {label}
    </label>
);

export default RadioButton;
