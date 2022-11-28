import 'ress';
import React from 'react';
import { styled } from '@linaria/react';
import { defaultConfig, UnflexibleProviderConfig } from 'config';

export interface UnflexibleProviderProps {
  config?: UnflexibleProviderConfig;
  children?: React.ReactNode;
}

export const Config = React.createContext<UnflexibleProviderConfig>(defaultConfig);

export const UnflexibleProvider = ({ config, children }: UnflexibleProviderProps) => {
  const c = { ...defaultConfig, ...config };
  return (
    <Config.Provider value={c}>
      <Component config={c}>{children}</Component>
    </Config.Provider>
  );
};

const Component = styled.div<{ config: UnflexibleProviderConfig }>`
  :root {
    --unflexible-ui-core-text-color: #333333;
    --unflexible-ui-core-font-family: 'Helvetica Neue', Arial, Meiryo, 'Hiragino Kaku Gothic ProN',
      'Hiragino Sans', Meiryo, sans-serif;
    --unflexible-ui-core-line-height: 1.75;
    --unflexible-ui-core-mobile-font-size: 87.5%;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    width: 100vw;
    overflow-x: hidden;
    color: var(--unflexible-ui-core-text-color);
    font-size: 100%;
    font-family: var(--unflexible-ui-core-font-family);
    line-height: var(--unflexible-ui-core-line-height);
  }

  @media only screen and (max-width: ${(p: any) => p.config.breakpoints.s}px) {
    html,
    body {
      font-size: var(--unflexible-ui-core-mobile-font-size);
    }
  }
`;
