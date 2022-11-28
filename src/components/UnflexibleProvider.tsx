import 'ress';

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { font, color, screen } from 'lib/config';

export interface UnflexibleProviderProps {
  config: any;
  children?: React.ReactNode;
}

export const Config = React.createContext<any>({});

export const UnflexibleProvider = ({ config, children }: UnflexibleProviderProps) => {
  return (
    <Config.Provider value={config}>
      <GlobalStyle />
      {children}
    </Config.Provider>
  );
};

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  width: 100vw;
  overflow-x: hidden;
  color: ${color.black};
  font-size: 16px;
  font-family: ${font.sansSerif};
  line-height: 1.5;
}

@media only screen and (max-width: ${screen.s}px) {
  html, body {
    font-size: 14px;
  }
}
`;
