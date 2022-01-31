import React from 'react';
import styled from 'styled-components';
import { screen } from 'lib/config';

const defaultSizes = {
  xl: '1240px',
  l: '1030px',
  m: '760px',
  s: '470px',
  xs: '94%',
};

export interface Props {
  children?: React.ReactNode;
}

const Wrap = ({ children }: Props) => {
  return <Component>{children}</Component>;
};

const Component = styled.div`
  position: relative;
  margin: 0 auto;
  width: var(--wrap-width-xl, ${defaultSizes.xl});

  @media only screen and (max-width: ${screen.l}px) {
    width: var(--wrap-width-l, ${defaultSizes.l});
  }

  @media only screen and (max-width: ${screen.m}px) {
    width: var(--wrap-width-m, ${defaultSizes.m});
  }

  @media only screen and (max-width: ${screen.s}px) {
    width: var(--wrap-width-s, ${defaultSizes.s});
  }

  @media only screen and (max-width: ${screen.xs}px) {
    width: var(--wrap-width-xs, ${defaultSizes.xs});
  }
`;

export default Wrap;
