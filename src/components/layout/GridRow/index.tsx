import React from 'react';
import styled from 'styled-components';
import { screen } from 'lib/config';
import { Config } from 'components/UnflexibleProvider';

interface ConfigProps {
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

export interface Props {
  align?: string;
  justify?: string;
  gap?: string;
  rowGap?: string;
  columnGap?: string;
  grid?: string;
  gridXL?: string;
  gridL?: string;
  gridM?: string;
  gridS?: string;
  gridXS?: string;
  children?: React.ReactNode;
}

const Columns = ({
  align,
  justify,
  gap,
  rowGap,
  columnGap,
  grid,
  gridXL,
  gridL,
  gridM,
  gridS,
  gridXS,
  children,
}: Props) => {
  const context = React.useContext(Config);

  let config: ConfigProps = defaultConfig;
  if (context.gridRow) {
    config = {
      ...config,
      ...context.gridRow,
    };
  }

  return (
    <Component
      align={align || 'stretch'}
      justify={justify || 'normal'}
      rowGap={rowGap || gap || 'gapless'}
      columnGap={columnGap || gap || 'gapless'}
      gridXL={gridXL || grid || '1fr'}
      gridL={gridL || gridXL || grid || '1fr'}
      gridM={gridM || gridL || gridXL || grid || '1fr'}
      gridS={gridS || gridM || gridL || gridXL || grid || '1fr'}
      gridXS={gridXS || gridS || gridM || gridL || gridXL || grid || '1fr'}
      config={config}
    >
      {children}
    </Component>
  );
};

interface ComponentProps {
  align: string;
  justify: string;
  rowGap: string;
  columnGap: string;
  gridXL: string;
  gridL: string;
  gridM: string;
  gridS: string;
  gridXS: string;
  config: ConfigProps;
}

const Component = styled.div<ComponentProps>`
  display: grid;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  row-gap: ${(props) => `calc(${props.config.gap[props.rowGap]} * ${props.config.gapRate.xl})`};
  column-gap: ${(props) =>
    `calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.xl})`};
  grid-template: auto / ${(props) => props.gridXL};

  @media only screen and (max-width: ${screen.l}px) {
    row-gap: ${(props) => `calc(${props.config.gap[props.rowGap]} * ${props.config.gapRate.l})`};
    column-gap: ${(props) =>
      `calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.l})`};
    grid-template: none / ${(props) => props.gridL};
  }

  @media only screen and (max-width: ${screen.m}px) {
    row-gap: ${(props) => `calc(${props.config.gap[props.rowGap]} * ${props.config.gapRate.m})`};
    column-gap: ${(props) =>
      `calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.m})`};
    grid-template: none / ${(props) => props.gridM};
  }

  @media only screen and (max-width: ${screen.s}px) {
    row-gap: ${(props) => `calc(${props.config.gap[props.rowGap]} * ${props.config.gapRate.s})`};
    column-gap: ${(props) =>
      `calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.s})`};
    grid-template: none / ${(props) => props.gridS};
  }

  @media only screen and (max-width: ${screen.xs}px) {
    row-gap: ${(props) => `calc(${props.config.gap[props.rowGap]} * ${props.config.gapRate.xs})`};
    column-gap: ${(props) =>
      `calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.xs})`};
    grid-template: none / ${(props) => props.gridXS};
  }
`;

export default Columns;
