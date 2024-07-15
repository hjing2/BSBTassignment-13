import React from 'react';
import styled from 'styled-components';

export interface TextProps {
    content: string;
    disabled?: boolean;
}

const StyledText = styled.p<TextProps>`
    color: ${props => props.disabled ? 'grey' : 'black'};
`;

const Text: React.FC<TextProps> = ({ content, disabled = false }) => (
    <StyledText disabled={disabled} content={content}>{content}</StyledText>
);

export default Text;
