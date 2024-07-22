import React from 'react';
import styled from 'styled-components';

export interface ImgProps {
  src: string;
  alt: string;
  disabled?: boolean;
}

const StyledImg = styled.img<{ disabled: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const Img: React.FC<ImgProps> = ({ src, alt, disabled = false }) => (
  <StyledImg src={src} alt={alt} disabled={disabled} />
);

export default Img;
