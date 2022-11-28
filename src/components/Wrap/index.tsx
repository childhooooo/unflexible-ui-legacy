import React from 'react';
import { styled } from '@linaria/react';
import { Config } from 'components/UnflexibleProvider';
import { UnflexibleProviderConfig } from 'config';

export interface WrapProps {
  children?: React.ReactNode;
}

export const Wrap = ({ children }: WrapProps) => {
  const config = React.useContext(Config);

  return <Component config={config}>{children}</Component>;
};

const Component = styled.div<{ config: UnflexibleProviderConfig }>`
  :global() {
    :root {
      --unflexible-ui-core-wrap-xl: 1240px;
      --unflexible-ui-core-wrap-l: 1030px;
      --unflexible-ui-core-wrap-m: 760px;
      --unflexible-ui-core-wrap-s: 470px;
      --unflexible-ui-core-wrap-xs: 94%;
    }
  }

  position: relative;
  margin: 0 auto;
  width: var(--unflexible-ui-core-wrap-xl);

  @media only screen and (max-width: ${(p) => p.config.breakpoints.l}px) {
    width: var(--unflexible-ui-core-wrap-l);
  }

  @media only screen and (max-width: ${(p) => p.config.breakpoints.m}px) {
    width: var(--unflexible-ui-core-wrap-m);
  }

  @media only screen and (max-width: ${(p) => p.config.breakpoints.s}px) {
    width: var(--unflexible-ui-core-wrap-s);
  }

  @media only screen and (max-width: ${(p) => p.config.breakpoints.xs}px) {
    width: var(--unflexible-ui-core-wrap-xs);
  }
`;
