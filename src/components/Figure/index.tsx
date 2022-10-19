import React from 'react';
import styled from 'styled-components';
import { screen } from 'lib/config';

export interface FigureProps {
  name: string;
  src: any;
  srcSet?: string;
  width?: string;
  widthXL?: string;
  widthL?: string;
  widthM?: string;
  widthS?: string;
  widthXS?: string;
  height?: string;
  heightXL?: string;
  heightL?: string;
  heightM?: string;
  heightS?: string;
  heightXS?: string;
  position?: string;
  lazy?: boolean;
}

export const Figure = ({
  name,
  src,
  srcSet,
  width,
  widthXL,
  widthL,
  widthM,
  widthS,
  widthXS,
  height,
  heightXL,
  heightL,
  heightM,
  heightS,
  heightXS,
  position,
  lazy,
}: FigureProps) => {
  return (
    <Component
      width={width || 'auto'}
      widthXL={widthXL}
      widthL={widthL}
      widthM={widthM}
      widthS={widthS}
      widthXS={widthXS}
      height={height || 'auto'}
      heightXL={heightXL}
      heightL={heightL}
      heightM={heightM}
      heightS={heightS}
      heightXS={heightXS}
      position={position || '50% 50%'}
    >
      <img src={src} srcSet={srcSet || src} alt={name} loading={lazy ? 'lazy' : 'eager'} />
    </Component>
  );
};

interface ComponentProps {
  width: string;
  widthXL?: string;
  widthL?: string;
  widthM?: string;
  widthS?: string;
  widthXS?: string;
  height: string;
  heightXL?: string;
  heightL?: string;
  heightM?: string;
  heightS?: string;
  heightXS?: string;
  position: string;
}

const Component = styled.figure<ComponentProps>`
  position: relative;
  width: ${(props) => props.width};
  ${(props) => props.widthXL && `width: ${props.widthXL};`};
  height: ${(props) => props.height};
  ${(props) => props.heightXL && `height: ${props.heightXL};`};

  img {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: ${props => props.position};
    font-family: ${props => `object-fit: cover; object-position: ${props.position};`};
    vertical-align: middle;
  }

  @media only screen and (max-width: ${screen.l}px) {
    ${(props) => props.widthL && `width: ${props.widthL};`};
    ${(props) => props.heightL && `height: ${props.heightL};`};
  }

  @media only screen and (max-width: ${screen.m}px) {
    ${(props) => props.widthM && `width: ${props.widthM};`};
    ${(props) => props.heightM && `height: ${props.heightM};`};
  }

  @media only screen and (max-width: ${screen.s}px) {
    ${(props) => props.widthS && `width: ${props.widthS};`};
    ${(props) => props.heightS && `height: ${props.heightS};`};
  }

  @media only screen and (max-width: ${screen.xs}px) {
    ${(props) => props.widthXS && `width: ${props.widthXS};`};
    ${(props) => props.heightXS && `height: ${props.heightXS};`};
  }
`;
