import React from 'react';
import { styled } from '@linaria/react';
import { Wrap } from '../Wrap';

export interface StackedProps {
  padding?: [number, number];
  color?: string;
  height?: string;
  gradient?: string;
  zIndex?: number;
  image: StackedBackgroundImage;
  wrap?: boolean;
  style?: any;
  children?: React.ReactNode;
}

export type StackedBackgroundImage = {
  src: string;
  srcSet?: string;
  size?: string;
  position?: string;
};

export const Stacked = ({
  padding,
  color,
  height,
  gradient,
  zIndex,
  image,
  wrap,
  style,
  children,
}: StackedProps) => {
  return (
    <Component
      padding={padding || [0, 0]}
      color={color || 'transparent'}
      gradient={gradient}
      zIndex={zIndex || 1}
      height={height || 'auto'}
      image={image}
      style={style}
    >
      {image && (
        <img
          className="stacked--background"
          src={image.src}
          srcSet={image.srcSet || undefined}
          alt="背景"
        />
      )}
      {wrap ? <Wrap>{children}</Wrap> : <NoWrap>{children}</NoWrap>}
    </Component>
  );
};

interface ComponentProps {
  padding: [number, number];
  color: string;
  height: string;
  gradient?: string;
  zIndex: number;
  image?: StackedBackgroundImage;
}

const Component = styled.div<ComponentProps>`
  :global() {
    :root {
      --unflexible-ui-core-stacked-base-padding: 32px;
    }
  }

  position: relative;
  z-index: ${(p) => p.zIndex};

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  height: ${(p) => p.height};

  padding: 0 calc(var(--unflexible-ui-core-stacked-base-padding-xl) * ${(p) => p.padding[0]}) 0
    calc(var(--unflexible-ui-core-stacked-base-padding-xl) * ${(p) => p.padding[1]});

  background: ${(p) => (p.gradient ? `linear-gradient(${p.gradient})` : p.color)};

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
    object-fit: ${(p: any) => p.image?.size};
    object-position: ${(p: any) => p.image?.position};
  }
`;

const NoWrap = styled.div`
  width: 100%;
`;
