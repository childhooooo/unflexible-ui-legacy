import React from 'react';
import styled from 'styled-components';
import { screen } from 'lib/config';

const defaultGaps: { [key: string]: string } = {
  wide: '3rem',
  normal: '1.5rem',
  narrow: '1rem',
  thin: '.5rem',
  gapless: '0rem',
};

const defaultGapRates: { [key: string]: number } = {
  xl: 1,
  l: 1,
  m: 1,
  s: 1,
  xs: 1,
};

export interface Props {
  align?: string;
  justify?: string;
  gap?: string;
  repeat?: number;
  repeatXL?: number;
  repeatL?: number;
  repeatM?: number;
  repeatS?: number;
  repeatXS?: number;
  wrapXL?: string;
  wrapL?: string;
  wrapM?: string;
  wrapS?: string;
  wrapXS?: string;
  children?: React.ReactNode;
}

const Columns = ({
  align,
  justify,
  gap,
  repeat,
  repeatXL,
  repeatL,
  repeatM,
  repeatS,
  repeatXS,
  wrapXL,
  wrapL,
  wrapM,
  wrapS,
  wrapXS,
  children,
}: Props) => {
  return (
    <Component
      align={align || 'stretch'}
      justify={justify || 'normal'}
      gap={gap || 'gapless'}
      repeat={repeat}
      repeatXL={repeatXL}
      repeatL={repeatL}
      repeatM={repeatM}
      repeatS={repeatS}
      repeatXS={repeatXS}
      wrapXL={wrapXL || 'wrap'}
      wrapL={wrapL || wrapXL || 'wrap'}
      wrapM={wrapM || wrapL || wrapXL || 'wrap'}
      wrapS={wrapS || wrapM || wrapL || wrapXL || 'wrap'}
      wrapXS={wrapXS || wrapS || wrapM || wrapL || wrapXL || 'wrap'}
    >
      {children}
    </Component>
  );
};

interface ComponentProps {
  align: string;
  justify: string;
  gap: string;
  repeat?: number;
  repeatXL?: number;
  repeatL?: number;
  repeatM?: number;
  repeatS?: number;
  repeatXS?: number;
  wrapXL: string;
  wrapL: string;
  wrapM: string;
  wrapS: string;
  wrapXS: string;
}

const Component = styled.div<ComponentProps>`
  display: flex;
  flex-wrap: ${props => props.wrapXL};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  gap: ${(props) =>
    `calc(var(--columns-gap-${props.gap}, ${defaultGaps[props.gap]}) * var(--columns-gap-rate-xl, ${
      defaultGapRates.xl
    }))`};
  ${(props) =>
    props.repeat &&
    `
    > * {
    width: calc((100% - ${props.repeat - 1} * var(--columns-gap-${props.gap}, ${
      defaultGaps[props.gap]
    }) * var(--columns-gap-rate-xl, ${defaultGapRates.xl})) / ${props.repeat});
    }
  `}
  ${(props) =>
    props.repeatXL &&
    `
    > * {
      width: calc((100% - ${props.repeatXL - 1} * var(--columns-gap-${props.gap}, ${
      defaultGaps[props.gap]
    }) * var(--columns-gap-rate-xl, ${defaultGapRates.xl})) / ${props.repeatXL});
    }
  `}

  @media only screen and (max-width: ${screen.l}px) {
    flex-wrap: ${props => props.wrapL};
    gap: ${(props) =>
      `calc(var(--columns-gap-${props.gap}, ${
        defaultGaps[props.gap]
      }) * var(--columns-gap-rate-l, ${defaultGapRates.l}))`};
    ${(props) =>
      props.repeatL &&
      `
      > * {
        width: calc((100% - ${props.repeatL - 1} * var(--columns-gap-${props.gap}, ${
        defaultGaps[props.gap]
      }) * var(--columns-gap-rate-l, ${defaultGapRates.l})) / ${props.repeatL});
      }
    `}
  }

  @media only screen and (max-width: ${screen.m}px) {
    flex-wrap: ${props => props.wrapM};
    gap: ${(props) =>
      `calc(var(--columns-gap-${props.gap}, ${
        defaultGaps[props.gap]
      }) * var(--columns-gap-rate-m, ${defaultGapRates.m}))`};
    ${(props) =>
      props.repeatM &&
      `
      > * {
        width: calc((100% - ${props.repeatM - 1} * var(--columns-gap-${props.gap}, ${
        defaultGaps[props.gap]
      }) * var(--columns-gap-rate-m, ${defaultGapRates.m})) / ${props.repeatM});
      }
    `}
  }

  @media only screen and (max-width: ${screen.s}px) {
    flex-wrap: ${props => props.wrapS};
    gap: ${(props) =>
      `calc(var(--columns-gap-${props.gap}, ${
        defaultGaps[props.gap]
      }) * var(--columns-gap-rate-s, ${defaultGapRates.s}))`};
    ${(props) =>
      props.repeatS &&
      `
      > * {
        width: calc((100% - ${props.repeatS - 1} * var(--columns-gap-${props.gap}, ${
        defaultGaps[props.gap]
      }) * var(--columns-gap-rate-s, ${defaultGapRates.s})) / ${props.repeatS});
      }
    `}
  }

  @media only screen and (max-width: ${screen.xs}px) {
    flex-wrap: ${props => props.wrapXS};
    gap: ${(props) =>
      `calc(var(--columns-gap-${props.gap}, ${
        defaultGaps[props.gap]
      }) * var(--columns-gap-rate-xs, ${defaultGapRates.xs}))`};
    ${(props) =>
      props.repeatXS &&
      `
      > * {
        width: calc((100% - ${props.repeatXS - 1} * var(--columns-gap-${props.gap}, ${
        defaultGaps[props.gap]
      }) * var(--columns-gap-rate-xs, ${defaultGapRates.xs})) / ${props.repeatXS});
      }
    `}
  }
`;

export default Columns;
