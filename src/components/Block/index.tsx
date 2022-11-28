import React from 'react';
import { styled } from '@linaria/react';
import { Config } from 'components/UnflexibleProvider';
import { UnflexibleProviderConfig } from 'config';

export interface BlockProps {
  width?: string;
  widthXL?: string;
  widthL?: string;
  widthM?: string;
  widthS?: string;
  widthXS?: string;
  maxWidth?: string;
  height?: string;
  fixRatio?: boolean;
  shrink?: number;
  grow?: number;
  children?: React.ReactNode;
}

export const Block = ({
  width,
  widthXL,
  widthL,
  widthM,
  widthS,
  widthXS,
  maxWidth,
  height,
  fixRatio,
  shrink,
  grow,
  children,
}: BlockProps) => {
  const config = React.useContext(Config);

  return (
    <Component
      widthXL={widthXL || width}
      widthL={widthL || widthXL || width}
      widthM={widthM || widthL || widthXL || width}
      widthS={widthS || widthM || widthL || widthXL || width}
      widthXS={widthXS || widthS || widthM || widthL || widthXL || width}
      maxWidth={maxWidth}
      height={height || 'auto'}
      fixRatio={fixRatio || false}
      shrink={shrink || 0}
      grow={grow || 0}
      config={config}
    >
      <div>{children}</div>
    </Component>
  );
};

interface ComponentProps {
  widthXL?: string;
  widthL?: string;
  widthM?: string;
  widthS?: string;
  widthXS?: string;
  maxWidth?: string;
  height: string;
  fixRatio: boolean;
  shrink: number;
  grow: number;
  config: UnflexibleProviderConfig;
}

const Component = styled.div<ComponentProps>`
  position: relative;
  width: ${(p) => p.widthXL || 'auto'};
  max-width: ${(p) => p.maxWidth || 'auto'};
  flex-shrink: ${(p) => p.shrink};
  flex-grow: ${(p) => p.grow};

  > div {
    position: ${(p) => (p.fixRatio ? 'absolute' : 'relative')};
    height: ${(p) => p.height};
    top: ${(p) => (p.fixRatio ? 0 : 'auto')};
    left: ${(p) => (p.fixRatio ? 0 : 'auto')};
    height: ${(p) => (p.fixRatio ? '100%' : p.height)};
    width: 100%;
  }

  &:before {
    position: relative;
    display: ${(p) => (p.fixRatio ? 'block' : 'none')};
    content: '';
    padding-top: ${(p) => p.height};
  }

  @media only screen and (max-width: ${(p) => p.config.breakpoints.l}px) {
    width: ${(p) => p.widthL || 'auto'};
  }

  @media only screen and (max-width: ${(p) => p.config.breakpoints.m}px) {
    width: ${(p) => p.widthM || 'auto'};
  }

  @media only screen and (max-width: ${(p) => p.config.breakpoints.s}px) {
    width: ${(p) => p.widthS || 'auto'};
  }

  @media only screen and (max-width: ${(p) => p.config.breakpoints.xs}px) {
    width: ${(p) => p.widthXS || 'auto'};
  }
`;
