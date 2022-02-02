import React from 'react';
import styled from 'styled-components';
import Wrap from '../Wrap';
import { screen } from 'lib/config';
import { Config } from 'components/UnflexibleProvider';

interface ConfigProps {
  padding: {
    [key: string]: string;
  };
  paddingRate: {
    xl: number;
    l: number;
    m: number;
    s: number;
    xs: number;
  };
  gap: {
    [key: string]: string;
  };
  gapRate: {
    xl: number;
    l: number;
    m: number;
    s: number;
    xs: number;
  };
}

const defaultConfig: ConfigProps = {
  padding: {
    wide: '180px',
    normal: '120px',
    narrow: '60px',
    thin: '30px',
  },
  paddingRate: {
    xl: 1,
    l: 1,
    m: 0.5,
    s: 0.5,
    xs: 0.5,
  },
  gap: {
    wide: '3rem',
    normal: '1.5rem',
    narrow: '1rem',
    thin: '.5rem',
  },
  gapRate: {
    xl: 1,
    l: 1,
    m: 0.5,
    s: 0.5,
    xs: 0.5,
  },
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
  const context = React.useContext(Config);

  let config: ConfigProps = defaultConfig;
  if (context.stacked) {
    config = {
      ...config,
      ...context.stacked,
    };
  }

  return (
    <Component
      paddingPos={paddingPos || 'both'}
      paddingSize={paddingSize || 'normal'}
      color={color || 'transparent'}
      gradient={gradient}
      zIndex={zIndex || 1}
      height={height || 'auto'}
      imageSize={imageSize || 'cover'}
      imagePos={imagePos || '50% 50%'}
      config={config}
    >
      {imageSrc && (
        <img
          className="stacked--background"
          src={imageSrc}
          srcSet={imageSrcSet || undefined}
          alt="背景"
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
  imageSize: string;
  imagePos: string;
  config: ConfigProps;
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
      `calc(${props.config.padding[props.paddingSize] || 0} * ${props.config.paddingRate.xl})`}
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

  > .stacked--background {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: ${(props) => props.imageSize};
    object-position: ${(props) => props.imagePos};
  }

  @media only screen and (max-width: ${screen.l}px) {
    padding: ${(props) =>
        `calc(${props.config.padding[props.paddingSize] || 0} * ${props.config.paddingRate.l})`}
      0;
  }

  @media only screen and (max-width: ${screen.m}px) {
    padding: ${(props) =>
        `calc(${props.config.padding[props.paddingSize] || 0} * ${props.config.paddingRate.m})`}
      0;
  }

  @media only screen and (max-width: ${screen.s}px) {
    padding: ${(props) =>
        `calc(${props.config.padding[props.paddingSize] || 0} * ${props.config.paddingRate.s})`}
      0;
  }

  @media only screen and (max-width: ${screen.xs}px) {
    padding: ${(props) =>
        `calc(${props.config.padding[props.paddingSize] || 0} * ${props.config.paddingRate.xs})`}
      0;
  }
`;

const NoWrap = styled.div`
  width: 100%;
`;

export default Stacked;
