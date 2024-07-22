import React from 'react';
import styled from 'styled-components';

export interface HeroImageProps {
  src: string;
  alt: string;
  disabled?: boolean;
}

const StyledImage = styled.img<{ disabled: boolean }>`
  width: 100%;
  height: 300px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  disabled = false,
}) => <StyledImage src={src} alt={alt} disabled={disabled} />;

export default HeroImage;
