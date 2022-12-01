import { ReactNode, useContext } from "react";
import { styled } from "@linaria/react";
import { InitialPropsContext, ViewPortContext } from "../UnflexibleProvider";
import { selectValueOfTag, selectValueOfTagOfScreen } from "../../lib/util";
import { ValuesForScreens } from "../../lib/screen";
import {
  ValuesForTextTags,
  TextTag,
  textTagsAsString,
} from "../../lib/textTag";

export type PlainTextProps = {
  text?: string;
  margin?: ValuesForTextTags<[number, number, number, number]>;
  fontSize?: ValuesForTextTags<ValuesForScreens<number>>;
  color?: ValuesForTextTags<string>;
  fontWeight?: ValuesForTextTags<number>;
  fontFamily?: ValuesForTextTags<string>;
  lineHeight?: ValuesForTextTags<number>;
  textAlign?: ValuesForTextTags<string>;
  letterSpacing?: ValuesForTextTags<string>;
  liPadding?: number;
  baseMargin?: string;
  baseLiPadding?: string;
  mediaWidth?: string;
  children?: ReactNode;
};

export const initialPlainTextProps: PlainTextProps = {
  margin: {
    p: [1, 0, 1, 0],
    h1: [2, 0, 1, 0],
    h2: [2, 0, 1, 0],
    h3: [2, 0, 1, 0],
    h4: [2, 0, 1, 0],
    h5: [2, 0, 1, 0],
    ul: [2, 0, 1, 0],
    ol: [2, 0, 1, 0],
  },
  fontSize: {
    p: { xl: 1 },
    h1: { xl: 2 },
    h2: { xl: 1.75 },
    h3: { xl: 1.5 },
    h4: { xl: 1.25 },
    h5: { xl: 1 },
    ul: { xl: 1 },
    ol: { xl: 1 },
    a: { xl: 1 },
    small: { xl: 0.8 },
    strong: { xl: 1 },
  },
  color: {
    p: "#333333",
    h1: "#333333",
    h2: "#333333",
    h3: "#333333",
    h4: "#333333",
    h5: "#333333",
    ul: "#333333",
    ol: "#333333",
    a: "#0000ee",
    small: "#333333",
    strong: "#ee0000",
  },
  fontWeight: {
    p: 400,
    h1: 700,
    h2: 700,
    h3: 700,
    h4: 700,
    h5: 700,
    ul: 400,
    ol: 400,
    a: 400,
    small: 400,
    strong: 700,
  },
  fontFamily: {
    p: "inherit",
    h1: "inherit",
    h2: "inherit",
    h3: "inherit",
    h4: "inherit",
    h5: "inherit",
    ul: "inherit",
    ol: "inherit",
    a: "inherit",
    small: "inherit",
    strong: "inherit",
  },
  lineHeight: {
    p: 1.75,
    h1: 1.75,
    h2: 1.75,
    h3: 1.75,
    h4: 1.75,
    h5: 1.75,
    ul: 1.75,
    ol: 1.75,
    a: 1.75,
    small: 1.75,
    strong: 1.75,
  },
  textAlign: {
    p: "left",
    h1: "left",
    h2: "left",
    h3: "left",
    h4: "left",
    h5: "left",
    ul: "left",
    ol: "left",
    a: "left",
    small: "left",
    strong: "left",
  },
  letterSpacing: {
    p: "normal",
    h1: "normal",
    h2: "normal",
    h3: "normal",
    h4: "normal",
    h5: "normal",
    ul: "normal",
    ol: "normal",
    a: "normal",
    small: "normal",
    strong: "normal",
  },
  baseMargin: "1rem",
  liPadding: 1,
  baseLiPadding: "1rem",
  mediaWidth: "100%",
};

export const PlainText = (props: PlainTextProps) => {
  const initialProps = useContext(InitialPropsContext);
  const viewPort = useContext(ViewPortContext);

  const styles: TextTagStyle[] = textTagsAsString.map((tag: TextTag) => {
    const margin = selectValueOfTag<[number, number, number, number]>(
      initialProps.plainText.margin,
      props.margin,
      tag
    );
    const baseMargin = props.baseMargin || initialProps.plainText.baseMargin;

    const fontSize = selectValueOfTagOfScreen<number>(
      initialProps.plainText.fontSize,
      props.fontSize,
      tag,
      viewPort.screen
    );

    const color = selectValueOfTag<string>(
      initialProps.plainText.color,
      props.color,
      tag
    );

    const fontWeight = selectValueOfTag<number>(
      initialProps.plainText.fontWeight,
      props.fontWeight,
      tag
    );

    const fontFamily = selectValueOfTag<string>(
      initialProps.plainText.fontFamily,
      props.fontFamily,
      tag
    );

    const lineHeight = selectValueOfTag<number>(
      initialProps.plainText.lineHeight,
      props.lineHeight,
      tag
    );

    const textAlign = selectValueOfTag<string>(
      initialProps.plainText.textAlign,
      props.textAlign,
      tag
    );

    const letterSpacing = selectValueOfTag<string>(
      initialProps.plainText.letterSpacing,
      props.letterSpacing,
      tag
    );

    return {
      margin:
        margin && baseMargin
          ? `calc(${margin[0]} * ${baseMargin}) calc(${margin[1]} * ${baseMargin}) calc(${margin[2]} * ${baseMargin}) calc(${margin[3]} * ${baseMargin})`
          : "auto",
      fontSize: fontSize ? `${fontSize}rem` : "auto",
      color: color || "transparent",
      fontWeight: fontWeight || "auto",
      fontFamily: fontFamily || "auto",
      lineHeight: lineHeight || "auto",
      textAlign: textAlign || "auto",
      letterSpacing: letterSpacing || "auto",
    };
  });

  const liPadding = props.liPadding || initialProps.plainText.liPadding;
  const baseLiPadding =
    props.baseLiPadding || initialProps.plainText.baseLiPadding;

  const mediaWidth = props.mediaWidth || initialProps.plainText.mediaWidth;

  return (
    <PlainTextComponent
      pStyle={styles[0]}
      h1Style={styles[1]}
      h2Style={styles[2]}
      h3Style={styles[3]}
      h4Style={styles[4]}
      h5Style={styles[5]}
      ulStyle={styles[6]}
      olStyle={styles[7]}
      aStyle={styles[8]}
      smallStyle={styles[9]}
      strongStyle={styles[10]}
      liPadding={
        liPadding && baseLiPadding
          ? `calc(${liPadding} * ${baseLiPadding})`
          : "auto"
      }
      mediaWidth={mediaWidth || "auto"}
    >
      {props.text ? (
        <div dangerouslySetInnerHTML={{ __html: props.text }}></div>
      ) : (
        props.children
      )}
    </PlainTextComponent>
  );
};

type TextTagStyle = {
  margin: string;
  fontSize: string;
  color: string;
  fontWeight: string | number;
  fontFamily: string;
  lineHeight: string | number;
  textAlign: string;
  letterSpacing: string;
};

type PlainTextComponentProps = {
  pStyle: TextTagStyle;
  h1Style: TextTagStyle;
  h2Style: TextTagStyle;
  h3Style: TextTagStyle;
  h4Style: TextTagStyle;
  h5Style: TextTagStyle;
  ulStyle: TextTagStyle;
  olStyle: TextTagStyle;
  aStyle: TextTagStyle;
  smallStyle: TextTagStyle;
  strongStyle: TextTagStyle;
  liPadding: string;
  mediaWidth: string;
};

const PlainTextComponent = styled.div<PlainTextComponentProps>`
  width: 100%;

  p {
    margin: ${(p) => p.pStyle.margin};
    font-size: ${(p) => p.pStyle.fontSize};
    color: ${(p) => p.pStyle.color};
    font-weight: ${(p) => p.pStyle.fontWeight};
    font-family: ${(p) => p.pStyle.fontFamily};
    line-height: ${(p) => p.pStyle.lineHeight};
    text-align: ${(p) => p.pStyle.textAlign};
    letter-spacing: ${(p) => p.pStyle.letterSpacing};
  }

  h1 {
    margin: ${(p) => p.h1Style.margin};
    font-size: ${(p) => p.h1Style.fontSize};
    color: ${(p) => p.h1Style.color};
    font-weight: ${(p) => p.h1Style.fontWeight};
    font-family: ${(p) => p.h1Style.fontFamily};
    line-height: ${(p) => p.h1Style.lineHeight};
    text-align: ${(p) => p.h1Style.textAlign};
    letter-spacing: ${(p) => p.h1Style.letterSpacing};
  }

  h2 {
    margin: ${(p) => p.h2Style.margin};
    font-size: ${(p) => p.h2Style.fontSize};
    color: ${(p) => p.h2Style.color};
    font-weight: ${(p) => p.h2Style.fontWeight};
    font-family: ${(p) => p.h2Style.fontFamily};
    line-height: ${(p) => p.h2Style.lineHeight};
    text-align: ${(p) => p.h2Style.textAlign};
    letter-spacing: ${(p) => p.h2Style.letterSpacing};
  }

  h3 {
    margin: ${(p) => p.h3Style.margin};
    font-size: ${(p) => p.h3Style.fontSize};
    color: ${(p) => p.h3Style.color};
    font-weight: ${(p) => p.h3Style.fontWeight};
    font-family: ${(p) => p.h3Style.fontFamily};
    line-height: ${(p) => p.h3Style.lineHeight};
    text-align: ${(p) => p.h3Style.textAlign};
    letter-spacing: ${(p) => p.h3Style.letterSpacing};
  }

  h4 {
    margin: ${(p) => p.h4Style.margin};
    font-size: ${(p) => p.h4Style.fontSize};
    color: ${(p) => p.h4Style.color};
    font-weight: ${(p) => p.h4Style.fontWeight};
    font-family: ${(p) => p.h4Style.fontFamily};
    line-height: ${(p) => p.h4Style.lineHeight};
    text-align: ${(p) => p.h4Style.textAlign};
    letter-spacing: ${(p) => p.h4Style.letterSpacing};
  }

  h5 {
    margin: ${(p) => p.h5Style.margin};
    font-size: ${(p) => p.h5Style.fontSize};
    color: ${(p) => p.h5Style.color};
    font-weight: ${(p) => p.h5Style.fontWeight};
    font-family: ${(p) => p.h5Style.fontFamily};
    line-height: ${(p) => p.h5Style.lineHeight};
    text-align: ${(p) => p.h5Style.textAlign};
    letter-spacing: ${(p) => p.h5Style.letterSpacing};
  }

  ul {
    margin: ${(p) => p.ulStyle.margin};
    font-size: ${(p) => p.ulStyle.fontSize};
    color: ${(p) => p.ulStyle.color};
    font-weight: ${(p) => p.ulStyle.fontWeight};
    font-family: ${(p) => p.ulStyle.fontFamily};
    line-height: ${(p) => p.ulStyle.lineHeight};
    text-align: ${(p) => p.ulStyle.textAlign};
    letter-spacing: ${(p) => p.ulStyle.letterSpacing};
  }

  ol {
    margin: ${(p) => p.olStyle.margin};
    font-size: ${(p) => p.olStyle.fontSize};
    color: ${(p) => p.olStyle.color};
    font-weight: ${(p) => p.olStyle.fontWeight};
    font-family: ${(p) => p.olStyle.fontFamily};
    line-height: ${(p) => p.olStyle.lineHeight};
    text-align: ${(p) => p.olStyle.textAlign};
    letter-spacing: ${(p) => p.olStyle.letterSpacing};
  }

  a {
    margin: ${(p) => p.aStyle.margin};
    font-size: ${(p) => p.aStyle.fontSize};
    color: ${(p) => p.aStyle.color};
    font-weight: ${(p) => p.aStyle.fontWeight};
    font-family: ${(p) => p.aStyle.fontFamily};
    line-height: ${(p) => p.aStyle.lineHeight};
    text-align: ${(p) => p.aStyle.textAlign};
    letter-spacing: ${(p) => p.aStyle.letterSpacing};
  }

  small {
    margin: ${(p) => p.smallStyle.margin};
    font-size: ${(p) => p.smallStyle.fontSize};
    color: ${(p) => p.smallStyle.color};
    font-weight: ${(p) => p.smallStyle.fontWeight};
    font-family: ${(p) => p.smallStyle.fontFamily};
    line-height: ${(p) => p.smallStyle.lineHeight};
    text-align: ${(p) => p.smallStyle.textAlign};
    letter-spacing: ${(p) => p.smallStyle.letterSpacing};
  }

  strong {
    margin: ${(p) => p.strongStyle.margin};
    font-size: ${(p) => p.strongStyle.fontSize};
    color: ${(p) => p.strongStyle.color};
    font-weight: ${(p) => p.strongStyle.fontWeight};
    font-family: ${(p) => p.strongStyle.fontFamily};
    line-height: ${(p) => p.strongStyle.lineHeight};
    text-align: ${(p) => p.strongStyle.textAlign};
    letter-spacing: ${(p) => p.strongStyle.letterSpacing};
  }

  li {
    padding: ${(p) => p.liPadding};
  }

  ul,
  ol {
    padding-left: 1.5rem;
  }

  figure,
  img,
  video,
  iframe {
    max-width: 100%;
    width: ${(p) => p.mediaWidth};
    vertical-align: middle;
  }

  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }
`;
