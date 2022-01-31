import React from 'react';
import styled from 'styled-components';
import { screen } from 'lib/config';

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
}

const Component = styled.div<ComponentProps>`
  width: 100%;

  * {
    margin: ${(props) => props.baseMargin || 'var(--plain-base-margin)'};
    font-size: ${(props) => props.baseSizeXL || 'var(--plain-base-size-xl)'};
    color: ${(props) => props.baseColor || 'var(--plain-base-color)'};
    text-align: ${(props) => props.baseAlign || 'var(--plain-base-align)'};
    font-family: ${(props) => props.baseFamily || 'var(--plain-base-family)'};
    font-weight: ${(props) => props.baseWeight || 'var(--plain-base-weight)'};
    line-height: ${(props) => props.baseLineHeight || 'var(--plain-base-line-height)'};
    letter-spacing: ${(props) => props.baseLetterSpacing || 'var(--plain-base-letter-spacing)'};
  }

  strong {
    font-size: ${(props) => props.baseStrongRate || 'var(--plain-base-strong-rate)'};
  }

  h1 {
    margin: ${(props) => props.h1Margin || 'var(--plain-h1-margin)'};
    font-size: ${(props) => props.h1SizeXL || 'var(--plain-h1-size-xl)'};
    color: ${(props) => props.h1Color || 'var(--plain-h1-color)'};
    text-align: ${(props) => props.h1Align || 'var(--plain-h1-align)'};
    font-family: ${(props) => props.h1Family || 'var(--plain-h1-family)'};
    font-weight: ${(props) => props.h1Weight || 'var(--plain-h1-weight)'};
    line-height: ${(props) => props.h1LineHeight || 'var(--plain-h1-line-height)'};
    letter-spacing: ${(props) => props.h1LetterSpacing || 'var(--plain-h1-letter-spacing)'};

    strong {
      font-size: ${(props) => props.h1StrongRate || 'var(--plain-h1-strong-rate)'};
    }
  }

  h2 {
    margin: ${(props) => props.h2Margin || 'var(--plain-h2-margin)'};
    font-size: ${(props) => props.h2SizeXL || 'var(--plain-h2-size-xl)'};
    color: ${(props) => props.h2Color || 'var(--plain-h2-color)'};
    text-align: ${(props) => props.h2Align || 'var(--plain-h2-align)'};
    font-family: ${(props) => props.h2Family || 'var(--plain-h2-family)'};
    font-weight: ${(props) => props.h2Weight || 'var(--plain-h2-weight)'};
    line-height: ${(props) => props.h2LineHeight || 'var(--plain-h2-line-height)'};
    letter-spacing: ${(props) => props.h2LetterSpacing || 'var(--plain-h2-letter-spacing)'};

    strong {
      font-size: ${(props) => props.h2StrongRate || 'var(--plain-h2-strong-rate)'};
    }
  }

  h3 {
    margin: ${(props) => props.h3Margin || 'var(--plain-h3-margin)'};
    font-size: ${(props) => props.h3SizeXL || 'var(--plain-h3-size-xl)'};
    color: ${(props) => props.h3Color || 'var(--plain-h3-color)'};
    text-align: ${(props) => props.h3Align || 'var(--plain-h3-align)'};
    font-family: ${(props) => props.h3Family || 'var(--plain-h3-family)'};
    font-weight: ${(props) => props.h3Weight || 'var(--plain-h3-weight)'};
    line-height: ${(props) => props.h3LineHeight || 'var(--plain-h3-line-height)'};
    letter-spacing: ${(props) => props.h3LetterSpacing || 'var(--plain-h3-letter-spacing)'};

    strong {
      font-size: ${(props) => props.h3StrongRate || 'var(--plain-h3-strong-rate)'};
    }
  }

  h4 {
    margin: ${(props) => props.h4Margin || 'var(--plain-h4-margin)'};
    font-size: ${(props) => props.h4SizeXL || 'var(--plain-h4-size-xl)'};
    color: ${(props) => props.h4Color || 'var(--plain-h4-color)'};
    text-align: ${(props) => props.h4Align || 'var(--plain-h4-align)'};
    font-family: ${(props) => props.h4Family || 'var(--plain-h4-family)'};
    font-weight: ${(props) => props.h4Weight || 'var(--plain-h4-weight)'};
    line-height: ${(props) => props.h4LineHeight || 'var(--plain-h4-line-height)'};
    letter-spacing: ${(props) => props.h4LetterSpacing || 'var(--plain-h4-letter-spacing)'};

    strong {
      font-size: ${(props) => props.h4StrongRate || 'var(--plain-h4-strong-rate)'};
    }
  }

  h5 {
    margin: ${(props) => props.h5Margin || 'var(--plain-h5-margin)'};
    font-size: ${(props) => props.h5SizeXL || 'var(--plain-h5-size-xl)'};
    color: ${(props) => props.h5Color || 'var(--plain-h5-color)'};
    text-align: ${(props) => props.h5Align || 'var(--plain-h5-align)'};
    font-family: ${(props) => props.h5Family || 'var(--plain-h5-family)'};
    font-weight: ${(props) => props.h5Weight || 'var(--plain-h5-weight)'};
    line-height: ${(props) => props.h5LineHeight || 'var(--plain-h5-line-height)'};
    letter-spacing: ${(props) => props.h5LetterSpacing || 'var(--plain-h5-letter-spacing)'};

    strong {
      font-size: ${(props) => props.h5StrongRate || 'var(--plain-h5-strong-rate)'};
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
    h1 {
      font-size: ${(props) => props.h1SizeL || props.h1SizeXL || 'var(--plain-h1-size-l)'};
    }

    h2 {
      font-size: ${(props) => props.h2SizeL || props.h2SizeXL || 'var(--plain-h2-size-l)'};
    }

    h3 {
      font-size: ${(props) => props.h3SizeL || props.h3SizeXL || 'var(--plain-h3-size-l)'};
    }

    h4 {
      font-size: ${(props) => props.h4SizeL || props.h4SizeXL || 'var(--plain-h4-size-l)'};
    }

    h5 {
      font-size: ${(props) => props.h5SizeL || props.h5SizeXL || 'var(--plain-h5-size-l)'};
    }
  }

  @media only screen and (max-width: ${screen.m}px) {
    h1 {
      font-size: ${(props) => props.h1SizeM || props.h1SizeL || props.h1SizeXL || 'var(--plain-h1-size-m)'};
    }

    h2 {
      font-size: ${(props) => props.h2SizeM || props.h2SizeL || props.h2SizeXL || 'var(--plain-h2-size-m)'};
    }

    h3 {
      font-size: ${(props) => props.h3SizeM || props.h3SizeL || props.h3SizeXL || 'var(--plain-h3-size-m)'};
    }

    h4 {
      font-size: ${(props) => props.h4SizeM || props.h4SizeL || props.h4SizeXL || 'var(--plain-h4-size-m)'};
    }

    h5 {
      font-size: ${(props) => props.h5SizeM || props.h5SizeL || props.h5SizeXL || 'var(--plain-h5-size-m)'};
    }
  }

  @media only screen and (max-width: ${screen.s}px) {
    h1 {
      font-size: ${(props) => props.h1SizeS || props.h1SizeM || props.h1SizeL || props.h1SizeXL || 'var(--plain-h1-size-s)'};
    }

    h2 {
      font-size: ${(props) => props.h2SizeS || props.h2SizeM || props.h2SizeL || props.h2SizeXL || 'var(--plain-h2-size-s)'};
    }

    h3 {
      font-size: ${(props) => props.h3SizeS || props.h3SizeM || props.h3SizeL || props.h3SizeXL || 'var(--plain-h3-size-s)'};
    }

    h4 {
      font-size: ${(props) => props.h4SizeS || props.h4SizeM || props.h4SizeL || props.h4SizeXL || 'var(--plain-h4-size-s)'};
    }

    h5 {
      font-size: ${(props) => props.h5SizeS || props.h5SizeM || props.h5SizeL || props.h5SizeXL || 'var(--plain-h5-size-s)'};
    }
  }

  @media only screen and (max-width: ${screen.xs}px) {
    h1 {
      font-size: ${(props) => props.h1SizeXS || props.h1SizeS || props.h1SizeM || props.h1SizeL || props.h1SizeXL || 'var(--plain-h1-size-xs)'};
    }

    h2 {
      font-size: ${(props) => props.h2SizeXS || props.h2SizeS || props.h2SizeM || props.h2SizeL || props.h2SizeXL || 'var(--plain-h2-size-xs)'};
    }

    h3 {
      font-size: ${(props) => props.h3SizeXS || props.h3SizeS || props.h3SizeM || props.h3SizeL || props.h3SizeXL || 'var(--plain-h3-size-xs)'};
    }

    h4 {
      font-size: ${(props) => props.h4SizeXS || props.h4SizeS || props.h4SizeM || props.h4SizeL || props.h4SizeXL || 'var(--plain-h4-size-xs)'};
    }

    h5 {
      font-size: ${(props) => props.h5SizeXS || props.h5SizeS || props.h5SizeM || props.h5SizeL || props.h5SizeXL || 'var(--plain-h5-size-xs)'};
    }
  }
`;

export default PlainText;
