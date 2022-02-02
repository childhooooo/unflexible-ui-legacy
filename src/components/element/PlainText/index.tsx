import React from 'react';
import styled from 'styled-components';
import { screen, color, font } from 'lib/config';
import { Config } from 'components/UnflexibleProvider';

interface EachSizes {
  xl: string;
  l: string;
  m: string;
  s: string;
  xs: string;
}

interface ConfigProps {
  baseSize: EachSizes;
  h1Size: EachSizes;
  h2Size: EachSizes;
  h3Size: EachSizes;
  h4Size: EachSizes;
  h5Size: EachSizes;
  baseWeight: string;
  h1Weight: string;
  h2Weight: string;
  h3Weight: string;
  h4Weight: string;
  h5Weight: string;
  baseAlign: string;
  h1Align: string;
  h2Align: string;
  h3Align: string;
  h4Align: string;
  h5Align: string;
  baseColor: string;
  h1Color: string;
  h2Color: string;
  h3Color: string;
  h4Color: string;
  h5Color: string;
  baseFamily: string;
  h1Family: string;
  h2Family: string;
  h3Family: string;
  h4Family: string;
  h5Family: string;
  baseLineHeight: string;
  h1LineHeight: string;
  h2LineHeight: string;
  h3LineHeight: string;
  h4LineHeight: string;
  h5LineHeight: string;
  baseMargin: string;
  h1Margin: string;
  h2Margin: string;
  h3Margin: string;
  h4Margin: string;
  h5Margin: string;
  baseStrongRate: string;
  h1StrongRate: string;
  h2StrongRate: string;
  h3StrongRate: string;
  h4StrongRate: string;
  h5StrongRate: string;
  baseLetterSpacing: string;
  h1LetterSpacing: string;
  h2LetterSpacing: string;
  h3LetterSpacing: string;
  h4LetterSpacing: string;
  h5LetterSpacing: string;
}

const defaultConfig: ConfigProps = {
  baseSize: {
    xl: '1rem',
    l: '1rem',
    m: '1rem',
    s: '1rem',
    xs: '1rem'
  },
  h1Size: {
    xl: '2.25rem',
    l: '2.25rem',
    m: '2.25rem',
    s: '1.75rem',
    xs: '1.75rem'
  },
  h2Size: {
    xl: '2rem',
    l: '2rem',
    m: '2rem',
    s: '1.5rem',
    xs: '1.5rem'
  },
  h3Size: {
    xl: '1.5rem',
    l: '1.5rem',
    m: '1.5rem',
    s: '1.25rem',
    xs: '1.25rem'
  },
  h4Size: {
    xl: '1.25rem',
    l: '1.25rem',
    m: '1.25rem',
    s: '1.1rem',
    xs: '1.1rem'
  },
  h5Size: {
    xl: '1rem',
    l: '1rem',
    m: '1rem',
    s: '1rem',
    xs: '1rem'
  },
  baseWeight: '400',
  h1Weight: '700',
  h2Weight: '700',
  h3Weight: '700',
  h4Weight: '700',
  h5Weight: '700',
  baseAlign: 'left',
  h1Align: 'left',
  h2Align: 'left',
  h3Align: 'left',
  h4Align: 'left',
  h5Align: 'left',
  baseColor: color.black,
  h1Color: color.black,
  h2Color: color.black,
  h3Color: color.black,
  h4Color: color.black,
  h5Color: color.black,
  baseFamily: font.sansSerif,
  h1Family: font.sansSerif,
  h2Family: font.sansSerif,
  h3Family: font.sansSerif,
  h4Family: font.sansSerif,
  h5Family: font.sansSerif,
  baseLineHeight: '1.5',
  h1LineHeight: '1.5',
  h2LineHeight: '1.5',
  h3LineHeight: '1.5',
  h4LineHeight: '1.5',
  h5LineHeight: '1.5',
  baseMargin: '1rem 0 1rem 0',
  h1Margin: '2rem 0 1rem 0',
  h2Margin: '2rem 0 1rem 0',
  h3Margin: '2rem 0 1rem 0',
  h4Margin: '2rem 0 1rem 0',
  h5Margin: '2rem 0 1rem 0',
  baseStrongRate: '1.25',
  h1StrongRate: '1.25',
  h2StrongRate: '1.25',
  h3StrongRate: '1.25',
  h4StrongRate: '1.25',
  h5StrongRate: '1.25',
  baseLetterSpacing: '0',
  h1LetterSpacing: '0',
  h2LetterSpacing: '0',
  h3LetterSpacing: '0',
  h4LetterSpacing: '0',
  h5LetterSpacing: '0',
}

export interface Props {
  text?: string;
  baseSizeXL?: string;
  h1SizeXL?: string;
  h2SizeXL?: string;
  h3SizeXL?: string;
  h4SizeXL?: string;
  h5SizeXL?: string;
  baseSizeL?: string;
  h1SizeL?: string;
  h2SizeL?: string;
  h3SizeL?: string;
  h4SizeL?: string;
  h5SizeL?: string;
  baseSizeM?: string;
  h1SizeM?: string;
  h2SizeM?: string;
  h3SizeM?: string;
  h4SizeM?: string;
  h5SizeM?: string;
  baseSizeS?: string;
  h1SizeS?: string;
  h2SizeS?: string;
  h3SizeS?: string;
  h4SizeS?: string;
  h5SizeS?: string;
  baseSizeXS?: string;
  h1SizeXS?: string;
  h2SizeXS?: string;
  h3SizeXS?: string;
  h4SizeXS?: string;
  h5SizeXS?: string;
  baseWeight?: string;
  h1Weight?: string;
  h2Weight?: string;
  h3Weight?: string;
  h4Weight?: string;
  h5Weight?: string;
  baseAlign?: string;
  h1Align?: string;
  h2Align?: string;
  h3Align?: string;
  h4Align?: string;
  h5Align?: string;
  baseColor?: string;
  h1Color?: string;
  h2Color?: string;
  h3Color?: string;
  h4Color?: string;
  h5Color?: string;
  baseFamily?: string;
  h1Family?: string;
  h2Family?: string;
  h3Family?: string;
  h4Family?: string;
  h5Family?: string;
  baseMargin?: string;
  h1Margin?: string;
  h2Margin?: string;
  h3Margin?: string;
  h4Margin?: string;
  h5Margin?: string;
  baseLineHeight?: string;
  h1LineHeight?: string;
  h2LineHeight?: string;
  h3LineHeight?: string;
  h4LineHeight?: string;
  h5LineHeight?: string;
  baseStrongRate?: string;
  h1StrongRate?: string;
  h2StrongRate?: string;
  h3StrongRate?: string;
  h4StrongRate?: string;
  h5StrongRate?: string;
  baseLetterSpacing?: string;
  h1LetterSpacing?: string;
  h2LetterSpacing?: string;
  h3LetterSpacing?: string;
  h4LetterSpacing?: string;
  h5LetterSpacing?: string;
  children?: React.ReactNode;
}

const PlainText = ({
  text,
  baseSizeXL,
  h1SizeXL,
  h2SizeXL,
  h3SizeXL,
  h4SizeXL,
  h5SizeXL,
  baseSizeL,
  h1SizeL,
  h2SizeL,
  h3SizeL,
  h4SizeL,
  h5SizeL,
  baseSizeM,
  h1SizeM,
  h2SizeM,
  h3SizeM,
  h4SizeM,
  h5SizeM,
  baseSizeS,
  h1SizeS,
  h2SizeS,
  h3SizeS,
  h4SizeS,
  h5SizeS,
  baseSizeXS,
  h1SizeXS,
  h2SizeXS,
  h3SizeXS,
  h4SizeXS,
  h5SizeXS,
  baseWeight,
  h1Weight,
  h2Weight,
  h3Weight,
  h4Weight,
  h5Weight,
  baseAlign,
  h1Align,
  h2Align,
  h3Align,
  h4Align,
  h5Align,
  baseColor,
  h1Color,
  h2Color,
  h3Color,
  h4Color,
  h5Color,
  baseFamily,
  h1Family,
  h2Family,
  h3Family,
  h4Family,
  h5Family,
  baseLineHeight,
  h1LineHeight,
  h2LineHeight,
  h3LineHeight,
  h4LineHeight,
  h5LineHeight,
  baseMargin,
  h1Margin,
  h2Margin,
  h3Margin,
  h4Margin,
  h5Margin,
  baseStrongRate,
  h1StrongRate,
  h2StrongRate,
  h3StrongRate,
  h4StrongRate,
  h5StrongRate,
  baseLetterSpacing,
  h1LetterSpacing,
  h2LetterSpacing,
  h3LetterSpacing,
  h4LetterSpacing,
  h5LetterSpacing,
  children,
}: Props) => {
  const context = React.useContext(Config);

  let config: ConfigProps = defaultConfig;
  if(context.plainText) {
    config = {
      ...config,
      ...context.plainText
    };
  }

  return (
    <Component
      baseSizeXL={baseSizeXL}
      h1SizeXL={h1SizeXL}
      h2SizeXL={h2SizeXL}
      h3SizeXL={h3SizeXL}
      h4SizeXL={h4SizeXL}
      h5SizeXL={h5SizeXL}
      baseSizeL={baseSizeL}
      h1SizeL={h1SizeL}
      h2SizeL={h2SizeL}
      h3SizeL={h3SizeL}
      h4SizeL={h4SizeL}
      h5SizeL={h5SizeL}
      baseSizeM={baseSizeM}
      h1SizeM={h1SizeM}
      h2SizeM={h2SizeM}
      h3SizeM={h3SizeM}
      h4SizeM={h4SizeM}
      h5SizeM={h5SizeM}
      baseSizeS={baseSizeS}
      h1SizeS={h1SizeS}
      h2SizeS={h2SizeS}
      h3SizeS={h3SizeS}
      h4SizeS={h4SizeS}
      h5SizeS={h5SizeS}
      baseSizeXS={baseSizeXS}
      h1SizeXS={h1SizeXS}
      h2SizeXS={h2SizeXS}
      h3SizeXS={h3SizeXS}
      h4SizeXS={h4SizeXS}
      h5SizeXS={h5SizeXS}
      baseWeight={baseWeight}
      h1Weight={h1Weight}
      h2Weight={h2Weight}
      h3Weight={h3Weight}
      h4Weight={h4Weight}
      h5Weight={h5Weight}
      baseAlign={baseAlign}
      h1Align={h1Align}
      h2Align={h2Align}
      h3Align={h3Align}
      h4Align={h4Align}
      h5Align={h5Align}
      baseColor={baseColor}
      h1Color={h1Color}
      h2Color={h2Color}
      h3Color={h3Color}
      h4Color={h4Color}
      h5Color={h5Color}
      baseFamily={baseFamily}
      h1Family={h1Family}
      h2Family={h2Family}
      h3Family={h3Family}
      h4Family={h4Family}
      h5Family={h5Family}
      baseLineHeight={baseLineHeight}
      h1LineHeight={h1LineHeight}
      h2LineHeight={h2LineHeight}
      h3LineHeight={h3LineHeight}
      h4LineHeight={h4LineHeight}
      h5LineHeight={h5LineHeight}
      baseMargin={baseMargin}
      h1Margin={h1Margin}
      h2Margin={h2Margin}
      h3Margin={h3Margin}
      h4Margin={h4Margin}
      h5Margin={h5Margin}
      baseStrongRate={baseStrongRate}
      h1StrongRate={h1StrongRate}
      h2StrongRate={h2StrongRate}
      h3StrongRate={h3StrongRate}
      h4StrongRate={h4StrongRate}
      h5StrongRate={h5StrongRate}
      baseLetterSpacing={baseLetterSpacing}
      h1LetterSpacing={h1LetterSpacing}
      h2LetterSpacing={h2LetterSpacing}
      h3LetterSpacing={h3LetterSpacing}
      h4LetterSpacing={h4LetterSpacing}
      h5LetterSpacing={h5LetterSpacing}
      config={config}
    >
      {text ? <div dangerouslySetInnerHTML={{ __html: text }}></div> : children}
    </Component>
  );
};

interface ComponentProps {
  size?: string;
  baseSizeXL?: string;
  h1SizeXL?: string;
  h2SizeXL?: string;
  h3SizeXL?: string;
  h4SizeXL?: string;
  h5SizeXL?: string;
  baseSizeL?: string;
  h1SizeL?: string;
  h2SizeL?: string;
  h3SizeL?: string;
  h4SizeL?: string;
  h5SizeL?: string;
  baseSizeM?: string;
  h1SizeM?: string;
  h2SizeM?: string;
  h3SizeM?: string;
  h4SizeM?: string;
  h5SizeM?: string;
  baseSizeS?: string;
  h1SizeS?: string;
  h2SizeS?: string;
  h3SizeS?: string;
  h4SizeS?: string;
  h5SizeS?: string;
  baseSizeXS?: string;
  h1SizeXS?: string;
  h2SizeXS?: string;
  h3SizeXS?: string;
  h4SizeXS?: string;
  h5SizeXS?: string;
  baseWeight?: string;
  h1Weight?: string;
  h2Weight?: string;
  h3Weight?: string;
  h4Weight?: string;
  h5Weight?: string;
  baseAlign?: string;
  h1Align?: string;
  h2Align?: string;
  h3Align?: string;
  h4Align?: string;
  h5Align?: string;
  baseColor?: string;
  h1Color?: string;
  h2Color?: string;
  h3Color?: string;
  h4Color?: string;
  h5Color?: string;
  baseFamily?: string;
  h1Family?: string;
  h2Family?: string;
  h3Family?: string;
  h4Family?: string;
  h5Family?: string;
  baseLineHeight?: string;
  h1LineHeight?: string;
  h2LineHeight?: string;
  h3LineHeight?: string;
  h4LineHeight?: string;
  h5LineHeight?: string;
  baseMargin?: string;
  h1Margin?: string;
  h2Margin?: string;
  h3Margin?: string;
  h4Margin?: string;
  h5Margin?: string;
  baseStrongRate?: string;
  h1StrongRate?: string;
  h2StrongRate?: string;
  h3StrongRate?: string;
  h4StrongRate?: string;
  h5StrongRate?: string;
  baseLetterSpacing?: string;
  h1LetterSpacing?: string;
  h2LetterSpacing?: string;
  h3LetterSpacing?: string;
  h4LetterSpacing?: string;
  h5LetterSpacing?: string;
  config: ConfigProps;
}

const Component = styled.div<ComponentProps>`
  width: 100%;

  * {
    margin: ${(props) => props.baseMargin || props.config.baseMargin};
    font-size: ${(props) => props.baseSizeXL || props.config.baseSize.xl};
    color: ${(props) => props.baseColor || props.config.baseColor};
    text-align: ${(props) => props.baseAlign || props.config.baseAlign};
    font-family: ${(props) => props.baseFamily || props.config.baseFamily};
    font-weight: ${(props) => props.baseWeight || props.config.baseWeight};
    line-height: ${(props) => props.baseLineHeight || props.config.baseLineHeight};
    letter-spacing: ${(props) => props.baseLetterSpacing || props.config.baseLetterSpacing};
  }

  li {
    margin: 0;
  }

  strong {
    font-size: ${(props) => props.baseStrongRate || props.config.baseStrongRate};
  }

  h1 {
    margin: ${(props) => props.h1Margin || props.config.h1Margin};
    font-size: ${(props) => props.h1SizeXL || props.config.h1Size.xl};
    color: ${(props) => props.h1Color || props.config.h1Color};
    text-align: ${(props) => props.h1Align || props.config.h1Align};
    font-family: ${(props) => props.h1Family || props.config.h1Family};
    font-weight: ${(props) => props.h1Weight || props.config.h1Weight};
    line-height: ${(props) => props.h1LineHeight || props.config.h1LineHeight};
    letter-spacing: ${(props) => props.h1LetterSpacing || props.config.h1LetterSpacing};

    strong {
      font-size: ${(props) => props.h1StrongRate || props.config.h1StrongRate};
    }
  }

  h2 {
    margin: ${(props) => props.h2Margin || props.config.h2Margin};
    font-size: ${(props) => props.h2SizeXL || props.config.h2Size.xl};
    color: ${(props) => props.h2Color || props.config.h2Color};
    text-align: ${(props) => props.h2Align || props.config.h2Align};
    font-family: ${(props) => props.h2Family || props.config.h2Family};
    font-weight: ${(props) => props.h2Weight || props.config.h2Weight};
    line-height: ${(props) => props.h2LineHeight || props.config.h2LineHeight};
    letter-spacing: ${(props) => props.h2LetterSpacing || props.config.h2LetterSpacing};

    strong {
      font-size: ${(props) => props.h2StrongRate || props.config.h2StrongRate};
    }
  }

  h3 {
    margin: ${(props) => props.h3Margin || props.config.h3Margin};
    font-size: ${(props) => props.h3SizeXL || props.config.h3Size.xl};
    color: ${(props) => props.h3Color || props.config.h3Color};
    text-align: ${(props) => props.h3Align || props.config.h3Align};
    font-family: ${(props) => props.h3Family || props.config.h3Family};
    font-weight: ${(props) => props.h3Weight || props.config.h3Weight};
    line-height: ${(props) => props.h3LineHeight || props.config.h3LineHeight};
    letter-spacing: ${(props) => props.h3LetterSpacing || props.config.h3LetterSpacing};

    strong {
      font-size: ${(props) => props.h3StrongRate || props.config.h3StrongRate};
    }
  }

  h4 {
    margin: ${(props) => props.h4Margin || props.config.h4Margin};
    font-size: ${(props) => props.h4SizeXL || props.config.h4Size.xl};
    color: ${(props) => props.h4Color || props.config.h4Color};
    text-align: ${(props) => props.h4Align || props.config.h4Align};
    font-family: ${(props) => props.h4Family || props.config.h4Family};
    font-weight: ${(props) => props.h4Weight || props.config.h4Weight};
    line-height: ${(props) => props.h4LineHeight || props.config.h4LineHeight};
    letter-spacing: ${(props) => props.h4LetterSpacing || props.config.h4LetterSpacing};

    strong {
      font-size: ${(props) => props.h4StrongRate || props.config.h4StrongRate};
    }
  }

  h5 {
    margin: ${(props) => props.h5Margin || props.config.h5Margin};
    font-size: ${(props) => props.h5SizeXL || props.config.h5Size.xl};
    color: ${(props) => props.h5Color || props.config.h5Color};
    text-align: ${(props) => props.h5Align || props.config.h5Align};
    font-family: ${(props) => props.h5Family || props.config.h5Family};
    font-weight: ${(props) => props.h5Weight || props.config.h5Weight};
    line-height: ${(props) => props.h5LineHeight || props.config.h5LineHeight};
    letter-spacing: ${(props) => props.h5LetterSpacing || props.config.h5LetterSpacing};

    strong {
      font-size: ${(props) => props.h5StrongRate || props.config.h5StrongRate};
    }
  }

  ul,
  ol {
    padding-left: 1.5rem;
  }

  figure,
  img {
    max-width: 100%;
  }

  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  @media only screen and (max-width: ${screen.l}px) {
    * {
      font-size: ${(props) => props.h1SizeL || props.h1SizeXL || props.config.baseSize.l};
    }

    h1 {
      font-size: ${(props) => props.h1SizeL || props.h1SizeXL || props.config.h1Size.l};
    }

    h2 {
      font-size: ${(props) => props.h1SizeL || props.h1SizeXL || props.config.h2Size.l};
    }

    h3 {
      font-size: ${(props) => props.h1SizeL || props.h1SizeXL || props.config.h3Size.l};
    }

    h4 {
      font-size: ${(props) => props.h1SizeL || props.h1SizeXL || props.config.h4Size.l};
    }

    h5 {
      font-size: ${(props) => props.h1SizeL || props.h1SizeXL || props.config.h5Size.l};
    }
  }

  @media only screen and (max-width: ${screen.m}px) {
    * {
      font-size: ${(props) => props.h1SizeM || props.h1SizeL || props.h1SizeXL || props.config.baseSize.m};
    }

    h1 {
      font-size: ${(props) => props.h2SizeM || props.h2SizeL || props.h2SizeXL || props.config.h1Size.m};
    }

    h2 {
      font-size: ${(props) => props.h2SizeM || props.h2SizeL || props.h2SizeXL || props.config.h2Size.m};
    }

    h3 {
      font-size: ${(props) => props.h3SizeM || props.h3SizeL || props.h3SizeXL || props.config.h3Size.m};
    }

    h4 {
      font-size: ${(props) => props.h4SizeM || props.h4SizeL || props.h4SizeXL || props.config.h4Size.m};
    }

    h5 {
      font-size: ${(props) => props.h5SizeM || props.h5SizeL || props.h5SizeXL || props.config.h5Size.m};
    }
  }

  @media only screen and (max-width: ${screen.s}px) {
    * {
      font-size: ${(props) => props.h1SizeS || props.h1SizeM || props.h1SizeL || props.h1SizeXL || props.config.baseSize.s};
    }

    h1 {
      font-size: ${(props) => props.h2SizeS || props.h2SizeM || props.h2SizeL || props.h2SizeXL || props.config.h1Size.s};
    }

    h2 {
      font-size: ${(props) => props.h2SizeS || props.h2SizeM || props.h2SizeL || props.h2SizeXL || props.config.h2Size.s};
    }

    h3 {
      font-size: ${(props) => props.h3SizeS || props.h3SizeM || props.h3SizeL || props.h3SizeXL || props.config.h3Size.s};
    }

    h4 {
      font-size: ${(props) => props.h4SizeS || props.h4SizeM || props.h4SizeL || props.h4SizeXL || props.config.h4Size.s};
    }

    h5 {
      font-size: ${(props) => props.h5SizeS || props.h5SizeM || props.h5SizeL || props.h5SizeXL || props.config.h5Size.s};
    }
  }

  @media only screen and (max-width: ${screen.xs}px) {
    * {
      font-size: ${(props) => props.h1SizeXS || props.h1SizeS || props.h1SizeM || props.h1SizeL || props.h1SizeXL || props.config.baseSize.xs};
    }

    h1 {
      font-size: ${(props) => props.h1SizeXS || props.h1SizeS || props.h1SizeM || props.h1SizeL || props.h1SizeXL || props.config.h1Size.xs};
    }

    h2 {
      font-size: ${(props) => props.h2SizeXS || props.h2SizeS || props.h2SizeM || props.h2SizeL || props.h2SizeXL || props.config.h2Size.xs};
    }

    h3 {
      font-size: ${(props) => props.h3SizeXS || props.h3SizeS || props.h3SizeM || props.h3SizeL || props.h3SizeXL || props.config.h3Size.xs};
    }

    h4 {
      font-size: ${(props) => props.h4SizeXS || props.h4SizeS || props.h4SizeM || props.h4SizeL || props.h4SizeXL || props.config.h4Size.xs};
    }

    h5 {
      font-size: ${(props) => props.h5SizeXS || props.h5SizeS || props.h5SizeM || props.h5SizeL || props.h5SizeXL || props.config.h5Size.xs};
    }
  }
`;

export default PlainText;
