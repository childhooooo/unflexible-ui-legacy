import React from 'react';
import { styled } from '@linaria/react';

export interface FigureProps {
  name: string;
  src: any;
  srcSet?: string;
  width: string;
  height: string;
  position?: string;
  lazy?: boolean;
}

export const Figure = ({ name, src, srcSet, width, height, position, lazy }: FigureProps) => {
  return (
    <Component width={width || 'auto'} height={height || 'auto'} position={position || '50% 50%'}>
      <img src={src} srcSet={srcSet || src} alt={name} loading={lazy ? 'lazy' : 'eager'} />
    </Component>
  );
};

interface ComponentProps {
  width: string;
  height: string;
  position: string;
}

const Component = styled.figure<ComponentProps>`
  position: relative;
  max-width: 100%;
  width: ${(p) => p.width};

  &::before {
    content: '';
    position: relative;
    display: block;
    padding-top: ${(p) => p.height};
  }

  img {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: ${(p) => p.position};
  }
`;
