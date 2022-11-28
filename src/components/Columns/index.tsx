import React from 'react';
import { styled } from '@linaria/react';
import { Config } from 'components/UnflexibleProvider';
import { UnflexibleProviderConfig } from 'config';

export type ColumnsProps = {
  align?: string;
  justify?: string;
  gap?: string;
  repeat?: number;
  repeatXL?: number;
  repeatL?: number;
  repeatM?: number;
  repeatS?: number;
  repeatXS?: number;
  wrap?: string;
  children?: React.ReactNode;
};

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
  wrap,
  children,
}: ColumnsProps) => {
  const config = React.useContext(Config);

  return (
    <Component
      align={align || 'stretch'}
      justify={justify || 'normal'}
      gap={gap || 'gapless'}
      repeatXL={repeatXL || repeat}
      repeatL={repeatL || repeatXL || repeat}
      repeatM={repeatM || repeatL || repeatXL || repeat}
      repeatS={repeatS || repeatM || repeatL || repeatXL || repeat}
      repeatXS={repeatXS || repeatS || repeatM || repeatL || repeatXS}
      wrap={wrap || 'wrap'}
      config={config}
    >
      {children}
    </Component>
  );
};

export type ComponentProps = {
  align: string;
  justify: string;
  gap: string;
  repeatXL?: number;
  repeatL?: number;
  repeatM?: number;
  repeatS?: number;
  repeatXS?: number;
  wrap: string;
  config: UnflexibleProviderConfig;
};

const Component = styled.div<ComponentProps>`
  :global() {
    :root {
      --unflexible-ui-core-columns-base-gap: 16px;
    }
  }

  display: flex;
  flex-wrap: ${(p) => p.wrap};
  align-items: ${(p) => p.align};
  justify-content: ${(p) => p.justify};
  gap: var(--unflexible-ui-core-columns-base-gap) * ${(p) => p.gap};

  > * {
    width: ${(p) =>
      p.repeatXL
        ? `calc(
      (100% - ${p.repeatXL - 1} * var(--unflexible-ui-core-columns-base-gap) * ${p.gap}) /
        ${p.repeatXL}
    )`
        : 'auto'};
  }

  @media only screen and (max-width: ${(p) => p.config.breakpoints.l}px) {
    > * {
      width: ${(p) =>
        p.repeatL
          ? `calc(
      (100% - ${p.repeatL - 1} * var(--unflexible-ui-core-columns-base-gap) * ${p.gap}) /
        ${p.repeatL}
    )`
          : 'auto'};
    }
  }

  @media only screen and (max-width: ${(p) => p.config.breakpoints.m}px) {
    > * {
      width: ${(p) =>
        p.repeatM
          ? `calc(
      (100% - ${p.repeatM - 1} * var(--unflexible-ui-core-columns-base-gap) * ${p.gap}) /
        ${p.repeatM}
    )`
          : 'auto'};
    }
  }

  @media only screen and (max-width: ${(p) => p.config.breakpoints.s}px) {
    > * {
      width: ${(p) =>
        p.repeatS
          ? `calc(
      (100% - ${p.repeatS - 1} * var(--unflexible-ui-core-columns-base-gap) * ${p.gap}) /
        ${p.repeatS}
    )`
          : 'auto'};
    }
  }

  @media only screen and (max-width: ${(p) => p.config.breakpoints.xs}px) {
    > * {
      width: ${(p) =>
        p.repeatXS
          ? `calc(
      (100% - ${p.repeatXS - 1} * var(--unflexible-ui-core-columns-base-gap) * ${p.gap}) /
        ${p.repeatXS}
    )`
          : 'auto'};
    }
  }
`;
