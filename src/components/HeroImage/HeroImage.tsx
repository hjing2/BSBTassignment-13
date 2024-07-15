import React from 'react';
import styled from 'styled-components';

export interface HeroImageProps {
    src: string;
    alt: string;
    disabled?: boolean;
}

const StyledImage = styled.img<HeroImageProps>`
    width: 100%;
    height: 300px;
    opacity: ${props => props.disabled ? 0.5 : 1};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, disabled = false }) => (
    <StyledImage src={src} alt={alt} disabled={disabled} />
);

export default HeroImage;
