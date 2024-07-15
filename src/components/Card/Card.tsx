import React from 'react';
import styled from 'styled-components';

export interface CardProps {
    title: string;
    content: string;
    disabled?: boolean;
}

const StyledCard = styled.div<CardProps>`
  background-color: ${props => props.disabled ? 'grey' : 'white'};
  border: 1px solid #ddd;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

const Card: React.FC<CardProps> = ({ title, content, disabled = false }) => (
    <StyledCard disabled={disabled} title={title} content={content}> {/* Pass title and content props */}
      <h3>{title}</h3>
      <p>{content}</p>
    </StyledCard>
  );

export default Card;
