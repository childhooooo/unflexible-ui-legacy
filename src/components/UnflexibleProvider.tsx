import 'ress';

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { font, color, screen } from 'lib/config';

interface Props {
  config: any;
  children?: React.ReactNode;
}

export const Config = React.createContext<any>({});

const UnflexibleProvider = ({ config, children }: Props) => {
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

export default UnflexibleProvider;
