import React from 'react';
import styled from 'styled-components';
import { screen } from 'lib/config';

export interface Props {
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

const Block = ({
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
}: Props) => {
  return (
    <Component
      width={width}
      widthXL={widthXL}
      widthL={widthL}
      widthM={widthM}
      widthS={widthS}
      widthXS={widthXS}
      maxWidth={maxWidth}
      height={height || 'auto'}
      fixRatio={fixRatio || false}
      shrink={shrink || 0}
      grow={grow || 0}
    >
      <div>{children}</div>
    </Component>
  );
};

interface ComponentProps {
  width?: string;
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
}

const Component = styled.div<ComponentProps>`
  position: relative;
  ${(props) => props.width && `width: ${props.width};`};
  ${(props) => props.widthXL && `width: ${props.widthXL};`};
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`};
  flex-shrink: ${props => props.shrink};
  flex-grow: ${props => props.grow};

  > div {
    position: relative;
    height: ${(props) => props.height};
  }

  ${(props) =>
    props.fixRatio &&
    `
  &:before {
    position: relative;
    display: block;
    content: '';
    padding-top: ${props.height};
  }

  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`}

  ${(props) =>
    props.widthL &&
    `
  @media only screen and (max-width: ${screen.l}px) {
    width: ${props.widthL};
  }
`}

${(props) =>
    props.widthM &&
    `
  @media only screen and (max-width: ${screen.m}px) {
    width: ${props.widthM};
  }
`}

${(props) =>
    props.widthS &&
    `
  @media only screen and (max-width: ${screen.s}px) {
    width: ${props.widthS};
  }
`}

${(props) =>
    props.widthXS &&
    `
  @media only screen and (max-width: ${screen.xs}px) {
    width: ${props.widthXS};
  }
`}
`;

export default Block;
