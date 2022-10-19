import React from 'react';
import styled from 'styled-components';
import { screen } from 'lib/config';
import { Config } from 'components/UnflexibleProvider';

export interface ColumnsConfigProps {
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

const defaultConfig = {
  gap: {
    wide: '3rem',
    normal: '1.5rem',
    narrow: '1rem',
    thin: '.5rem',
    gapless: '0rem',
  },
  gapRate: {
    xl: 1,
    l: 1,
    m: 1,
    s: 1,
    xs: 1,
  },
};

export interface ColumnsProps {
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

export const Columns = ({
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
}: ColumnsProps) => {
  const context = React.useContext(Config);

  let config: ColumnsConfigProps = defaultConfig;
  if (context.columns) {
    config = {
      ...config,
      ...context.columns,
    };
  }

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
      config={config}
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
  config: ColumnsConfigProps;
}

const Component = styled.div<ComponentProps>`
  display: flex;
  flex-wrap: ${(props) => props.wrapXL};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  gap: ${(props) => `calc(${props.config.gap[props.gap]} * ${props.config.gapRate.xl})`};

  ${(props) =>
    props.repeat &&
    `
    > * {
      width: calc((100% - ${props.repeat - 1} * ${props.config.gap[props.gap]} * ${
      props.config.gapRate.xl
    }) / ${props.repeat});
    }
  `}

  ${(props) =>
    props.repeatXL &&
    `
    > * {
      width: calc((100% - ${props.repeatXL - 1} * ${props.config.gap[props.gap]} * ${
      props.config.gapRate.xl
    }) / ${props.repeatXL});
    }
  `}

  @media only screen and (max-width: ${screen.l}px) {
    flex-wrap: ${(props) => props.wrapL};
    gap: ${(props) => `calc(${props.config.gap[props.gap]} * ${props.config.gapRate.l})`};

    ${(props) =>
      props.repeatL &&
      `
      > * {
        width: calc((100% - ${props.repeatL - 1} * ${props.config.gap[props.gap]} * ${
        props.config.gapRate.l
      }) / ${props.repeatL});
      }
    `}
  }

  @media only screen and (max-width: ${screen.m}px) {
    flex-wrap: ${(props) => props.wrapM};
    gap: ${(props) => `calc(${props.config.gap[props.gap]} * ${props.config.gapRate.m})`};

    ${(props) =>
      props.repeatM &&
      `
      > * {
        width: calc((100% - ${props.repeatM - 1} * ${props.config.gap[props.gap]} * ${
        props.config.gapRate.m
      }) / ${props.repeatM});
      }
    `}
  }

  @media only screen and (max-width: ${screen.s}px) {
    flex-wrap: ${(props) => props.wrapS};
    gap: ${(props) => `calc(${props.config.gap[props.gap]} * ${props.config.gapRate.s})`};

    ${(props) =>
      props.repeatS &&
      `
      > * {
        width: calc((100% - ${props.repeatS - 1} * ${props.config.gap[props.gap]} * ${
        props.config.gapRate.s
      }) / ${props.repeatS});
      }
    `}
  }

  @media only screen and (max-width: ${screen.xs}px) {
    flex-wrap: ${(props) => props.wrapXS};
    gap: ${(props) => `calc(${props.config.gap[props.gap]} * ${props.config.gapRate.xs})`};

    ${(props) =>
      props.repeatXS &&
      `
      > * {
        width: calc((100% - ${props.repeatXS - 1} * ${props.config.gap[props.gap]} * ${
        props.config.gapRate.xs
      }) / ${props.repeatXS});
      }
    `}
  }
`;
