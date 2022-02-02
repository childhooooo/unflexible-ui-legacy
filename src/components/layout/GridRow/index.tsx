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
  repeat?: number;
  repeatXL?: number;
  repeatL?: number;
  repeatM?: number;
  repeatS?: number;
  repeatXS?: number;
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
  repeat,
  repeatXL,
  repeatL,
  repeatM,
  repeatS,
  repeatXS,
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
      repeatXL={repeatXL || repeat || null}
      repeatL={repeatL || repeatXL || repeat || null}
      repeatM={repeatM || repeatL || repeatXL || repeat || null}
      repeatS={repeatS || repeatM || repeatL || repeatXL || repeat || null}
      repeatXS={repeatXS || repeatS || repeatM || repeatL || repeatXL || repeat || null}
      gridXL={gridXL || grid || null}
      gridL={gridL || gridXL || grid || null}
      gridM={gridM || gridL || gridXL || grid || null}
      gridS={gridS || gridM || gridL || gridXL || grid || null}
      gridXS={gridXS || gridS || gridM || gridL || gridXL || grid || null}
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
  repeatXL: number | null;
  repeatL: number | null;
  repeatM: number | null;
  repeatS: number | null;
  repeatXS: number | null;
  gridXL: string | null;
  gridL: string | null;
  gridM: string | null;
  gridS: string | null;
  gridXS: string | null;
  config: ConfigProps;
}

const Component = styled.div<ComponentProps>`
  display: grid;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  row-gap: ${(props) => `calc(${props.config.gap[props.rowGap]} * ${props.config.gapRate.xl})`};
  column-gap: ${(props) =>
    `calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.xl})`};

  ${props => props.repeatXL && `
    grid-template: auto / repeat(auto-fit, calc((100% - ${props.config.gap[props.columnGap]} * ${props.config.gapRate.xl} * ${props.repeatXL - 1}) / ${props.repeatXL}));
  `}

  ${props => props.gridXL && `
    grid-template: auto / ${props.gridXL};
  `}

  @media only screen and (max-width: ${screen.l}px) {
    row-gap: ${(props) => `calc(${props.config.gap[props.rowGap]} * ${props.config.gapRate.l})`};
    column-gap: ${(props) =>
      `calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.l})`};

    ${props => props.repeatL && `
      grid-template: auto / repeat(auto-fit, calc((100% - ${props.config.gap[props.columnGap]} * ${props.config.gapRate.l} * ${props.repeatL - 1}) / ${props.repeatL}));
    `}

    ${props => props.gridL && `
      grid-template: auto / ${props.gridL};
    `}
  }

  @media only screen and (max-width: ${screen.m}px) {
    row-gap: ${(props) => `calc(${props.config.gap[props.rowGap]} * ${props.config.gapRate.m})`};
    column-gap: ${(props) =>
      `calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.m})`};

    ${props => props.repeatM && `
      grid-template: auto / repeat(auto-fit, calc((100% - ${props.config.gap[props.columnGap]} * ${props.config.gapRate.m} * ${props.repeatM - 1}) / ${props.repeatM}));
    `}

    ${props => props.gridM && `
      grid-template: auto / ${props.gridM};
    `}
  }

  @media only screen and (max-width: ${screen.s}px) {
    row-gap: ${(props) => `calc(${props.config.gap[props.rowGap]} * ${props.config.gapRate.s})`};
    column-gap: ${(props) =>
      `calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.s})`};

    ${props => props.repeatS && `
      grid-template: auto / repeat(auto-fit, calc((100% - ${props.config.gap[props.columnGap]} * ${props.config.gapRate.s} * ${props.repeatS - 1}) / ${props.repeatS}));
    `}

    ${props => props.gridS && `
      grid-template: auto / ${props.gridS};
    `}
  }

  @media only screen and (max-width: ${screen.xs}px) {
    row-gap: ${(props) => `calc(${props.config.gap[props.rowGap]} * ${props.config.gapRate.xs})`};
    column-gap: ${(props) =>
      `calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.xs})`};

    ${props => props.repeatXS && `
      grid-template: auto / repeat(auto-fit, calc((100% - ${props.config.gap[props.columnGap]} * ${props.config.gapRate.xs} * ${props.repeatXS - 1}) / ${props.repeatXS}));
    `}

    ${props => props.gridXS && `
      grid-template: auto / ${props.gridXS};
    `}
  }
`;

export default Columns;
