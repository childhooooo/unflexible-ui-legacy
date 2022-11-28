import React from 'react';
import { styled } from '@linaria/react';

export interface GridRowProps {
  align?: string;
  justify?: string;
  rowGap?: number;
  columnGap?: number;
  repeat?: number;
  grid?: string;
  children?: React.ReactNode;
}

export const GridRow = ({ align, justify, rowGap, columnGap, grid, children }: GridRowProps) => {
  return (
    <Component
      align={align || 'stretch'}
      justify={justify || 'normal'}
      rowGap={rowGap || 0}
      columnGap={columnGap || 0}
      grid={grid || null}
    >
      {children}
    </Component>
  );
};

interface ComponentProps {
  align: string;
  justify: string;
  rowGap: number;
  columnGap: number;
  grid: string | null;
}

const Component = styled.div<ComponentProps>`
  :global() {
    :root {
      --unflexible-ui-core-grid-base-gap: 16px;
    }
  }

  display: grid;
  align-items: ${(p) => p.align};
  justify-content: ${(p) => p.justify};
  row-gap: var(--unflexible-ui-core-grid-base-gap) * ${(p) => p.rowGap};
  column-gap: var(--unflexible-ui-core-grid-base-gap) * ${(p) => p.columnGap};
  grid-template: ${(p) => (p.grid ? `auto / ${p.grid}` : 'none')};
`;
