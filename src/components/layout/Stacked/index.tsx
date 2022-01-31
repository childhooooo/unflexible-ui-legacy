import React from 'react';
import styled from 'styled-components';
import Wrap from '../Wrap';
import { screen } from 'lib/config';

const defaultPaddings: { [key: string]: string } = {
  wide: '180px',
  normal: '12rpx',
  narrow: '60px',
  thin: '30px',
};

const defaultPaddingRates: { [key: string]: number } = {
  xl: 1,
  l: 1,
  m: 0.5,
  s: 0.5,
  xs: 0.5,
};

const defaultGaps: { [key: string]: string } = {
  wide: '3rem',
  normal: '1.5rem',
  narrow: '1rem',
  thin: '.5rem',
};

const defaultGapRates: { [key: string]: number } = {
  xl: 1,
  l: 1,
  m: 0.5,
  s: 0.5,
  xs: 0.25,
};

export interface Props {
  paddingSize?: string;
  paddingPos?: string;
  color?: string;
  height?: string;
  gradient?: string;
  zIndex?: number;
  imageSrc?: any;
  imageSrcSet?: string;
  imageSize?: string;
  imagePos?: string;
  wrap?: boolean;
  children?: React.ReactNode;
}

const Stacked = ({
  paddingSize,
  paddingPos,
  color,
  height,
  gradient,
  zIndex,
  imageSrc,
  imageSrcSet,
  imageSize,
  imagePos,
  wrap,
  children,
}: Props) => {
  return (
    <Component
      paddingPos={paddingPos || 'both'}
      paddingSize={paddingSize || 'normal'}
      color={color || 'transparent'}
      gradient={gradient}
      zIndex={zIndex || 1}
      height={height || 'auto'}
    >
      {imageSrc && (
        <Background
          src={imageSrc}
          srcSet={imageSrcSet || undefined}
          alt="背景"
          imageSize={imageSize || 'cover'}
          imagePos={imagePos || '50% 50%'}
        />
      )}
      {wrap ? <Wrap>{children}</Wrap> : <NoWrap>{children}</NoWrap>}
    </Component>
  );
};

interface ComponentProps {
  paddingSize: string;
  paddingPos: string;
  color: string;
  height: string;
  gradient?: string;
  zIndex: number;
}

const Component = styled.div<ComponentProps>`
  position: relative;
  z-index: ${(props) => props.zIndex};

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height};

  padding: ${(props) =>
      `calc(var(--stacked-padding-${props.paddingSize}, ${
        defaultPaddings[props.paddingSize]
      }) * var(--stacked-rate-xl, ${defaultPaddingRates.xl}))`}
    0;
  ${(props) => {
    switch (props.paddingPos) {
      case 'top':
        return 'padding-bottom: 0 !important;';
      case 'bottom':
        return 'padding-top: 0 !important;';
      case 'none':
        return 'padding: 0 !important;';
      default:
        return '';
    }
  }}

  background-color: ${(props) => props.color};
  ${(props) => (props.gradient ? `background: linear-gradient(${props.gradient});` : '')}

  > * {
    display: block;
    z-index: 2;
  }

  @media only screen and (max-width: ${screen.l}px) {
    padding: ${(props) =>
        `calc(var(--stacked-padding-${props.paddingSize}, ${
          defaultPaddings[props.paddingSize]
        }) * var(--stacked-padding-rate-l, ${defaultPaddingRates.l}))`}
      0;
  }

  @media only screen and (max-width: ${screen.m}px) {
    padding: ${(props) =>
        `calc(var(--stacked-padding-${props.paddingSize}, ${
          defaultPaddings[props.paddingSize]
        }) * var(--stacked-padding-rate-m, ${defaultPaddingRates.m}))`}
      0;
  }

  @media only screen and (max-width: ${screen.s}px) {
    padding: ${(props) =>
        `calc(var(--stacked-padding-${props.paddingSize}, ${
          defaultPaddings[props.paddingSize]
        }) * var(--stacked-padding-rate-s, ${defaultPaddingRates.s}))`}
      0;
  }

  @media only screen and (max-width: ${screen.xs}px) {
    padding: ${(props) =>
        `calc(var(--stacked-padding-${props.paddingSize}, ${
          defaultPaddings[props.paddingSize]
        }) * var(--stacked-padding-rate-xs, ${defaultPaddingRates.xs}))`}
      0;
  }
`;

interface BackgroundProps {
  imageSize: string;
  imagePos: string;
}

const NoWrap = styled.div`
  width: 100%;
`;

const Background = styled.img<BackgroundProps>`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: ${(props) => props.imageSize};
  object-position: ${(props) => props.imagePos};
`;

export default Stacked;
