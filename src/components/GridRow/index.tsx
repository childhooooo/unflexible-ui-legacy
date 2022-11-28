import React from 'react';
import styled from 'styled-components';
import { screen } from 'lib/config';
import { Config } from 'components/UnflexibleProvider';

export interface GridRowConfigProps {
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

export interface GridRowProps {
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
  grid?: string[];
  gridXL?: string[];
  gridL?: string[];
  gridM?: string[];
  gridS?: string[];
  gridXS?: string[];
  children?: React.ReactNode;
}

export const GridRow = ({
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
}: GridRowProps) => {
  const context = React.useContext(Config);

  let config: GridRowConfigProps = defaultConfig;
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
  gridXL: string[] | null;
  gridL: string[] | null;
  gridM: string[] | null;
  gridS: string[] | null;
  gridXS: string[] | null;
  config: GridRowConfigProps;
}

const Component = styled.div<ComponentProps>`
  display: -ms-grid;
  display: grid;
  -webkit-box-align: ${(props) => props.align};
  -ms-flex-align: ${(props) => props.align};
  align-items: ${(props) => props.align};
  -webkit-box-pack: ${(props) => props.justify};
  -ms-flex-pack: ${(props) => props.justify};
  justify-content: ${(props) => props.justify};
  row-gap: ${(props) => `calc(${props.config.gap[props.rowGap]} * ${props.config.gapRate.xl})`};
  -webkit-column-gap: ${(props) =>
    `calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.xl})`};
  -moz-column-gap: ${(props) =>
    `calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.xl})`};
  column-gap: ${(props) =>
    `calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.xl})`};

  ${props => props.gridXL && `
    -ms-grid-rows: auto;
    -ms-grid-columns: auto / ${props.gridXL.join(` calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.xl}) `)};
    grid-template: auto / ${props.gridXL.join(' ')};
  `}

  @media only screen and (max-width: ${screen.l}px) {
    row-gap: ${(props) => `calc(${props.config.gap[props.rowGap]} * ${props.config.gapRate.l})`};
    -webkit-column-gap: ${(props) =>
      `calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.l})`};
    -moz-column-gap: ${(props) =>
      `calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.l})`};
    column-gap: ${(props) =>
      `calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.l})`};

    ${props => props.gridL && `
      -ms-grid-rows: auto;
      -ms-grid-columns: auto / ${props.gridL.join(` calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.l}) `)};
      grid-template: auto / ${props.gridL.join(' ')};
    `}
  }

  @media only screen and (max-width: ${screen.m}px) {
    row-gap: ${(props) => `calc(${props.config.gap[props.rowGap]} * ${props.config.gapRate.m})`};
    -webkit-column-gap: ${(props) =>
      `calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.m})`};
    -moz-column-gap: ${(props) =>
      `calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.m})`};
    column-gap: ${(props) =>
      `calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.m})`};

    ${props => props.gridM && `
      -ms-grid-rows: auto;
      -ms-grid-columns: auto / ${props.gridM.join(` calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.m}) `)};
      grid-template: auto / ${props.gridM.join(' ')};
    `}
  }

  @media only screen and (max-width: ${screen.s}px) {
    row-gap: ${(props) => `calc(${props.config.gap[props.rowGap]} * ${props.config.gapRate.s})`};
    -webkit-column-gap: ${(props) =>
      `calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.s})`};
    -moz-column-gap: ${(props) =>
      `calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.s})`};
    column-gap: ${(props) =>
      `calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.s})`};

    ${props => props.gridS && `
      -ms-grid-rows: auto;
      -ms-grid-columns: auto / ${props.gridS.join(` calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.s}) `)};
      grid-template: auto / ${props.gridS.join(' ')};
    `}
  }

  @media only screen and (max-width: ${screen.xs}px) {
    row-gap: ${(props) => `calc(${props.config.gap[props.rowGap]} * ${props.config.gapRate.xs})`};
    -webkit-column-gap: ${(props) =>
      `calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.xs})`};
    -moz-column-gap: ${(props) =>
      `calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.xs})`};
    column-gap: ${(props) =>
      `calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.xs})`};

    ${props => props.gridXS && `
      -ms-grid-rows: auto;
      -ms-grid-columns: auto / ${props.gridXS.join(` calc(${props.config.gap[props.columnGap]} * ${props.config.gapRate.xs}) `)};
      grid-template: auto / ${props.gridXS.join(' ')};
    `}
  }
`;
