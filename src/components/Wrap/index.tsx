import React from 'react';
import styled from 'styled-components';
import { screen } from 'lib/config';
import { Config } from 'components/UnflexibleProvider';

export interface WrapConfigProps {
  widthXL: string;
  widthL: string;
  widthM: string;
  widthS: string;
  widthXS: string;
}

const defaultConfig: WrapConfigProps = {
  widthXL: '1240px',
  widthL: '1030px',
  widthM: '760px',
  widthS: '470px',
  widthXS: '94%',
};

export interface WrapProps {
  children?: React.ReactNode;
}

export const Wrap = ({ children }: WrapProps) => {
  const context = React.useContext(Config);

  let config: WrapConfigProps = defaultConfig;
  if (context.wrap) {
    config = {
      ...config,
      ...context.wrap,
    };
  }

  return <Component config={config}>{children}</Component>;
};

interface ComponentProps {
  config: WrapConfigProps;
}

const Component = styled.div<ComponentProps>`
  position: relative;
  margin: 0 auto;
  width: ${(props) => props.config.widthXL};

  @media only screen and (max-width: ${screen.l}px) {
    width: ${(props) => props.config.widthL};
  }

  @media only screen and (max-width: ${screen.m}px) {
    width: ${(props) => props.config.widthM};
  }

  @media only screen and (max-width: ${screen.s}px) {
    width: ${(props) => props.config.widthS};
  }

  @media only screen and (max-width: ${screen.xs}px) {
    width: ${(props) => props.config.widthXS};
  }
`;
