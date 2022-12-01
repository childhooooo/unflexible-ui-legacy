import "ress";
import React, { ReactNode, createContext, useState, useEffect } from "react";
import { styled } from "@linaria/react";
import {
  Screen,
  ScreenKind,
  ValuesForScreens,
  getScreen,
  getValueOfScreen,
} from "../lib/screen";
import { BlockProps, initialBlockProps } from "./Block";
import { ColumnsProps, initialColumnsProps } from "./Columns";
import { PlainTextProps, initialPlainTextProps } from "./PlainText";
import { StackedProps, initialStackedProps } from "./Stacked";
import { WrapProps, initialWrapProps } from "./Wrap";

export type Config = {
  breakpoints: [number, number, number, number];
  textColor: string;
  fontFamily: string;
  lineHeight: number;
  fontSize: ValuesForScreens<string>;
};

export type PartialConfig = {
  breakpoints?: [number, number, number, number];
  textColor?: string;
  fontFamily?: string;
  lineHeight?: number;
  fontSize?: ValuesForScreens<string>;
};

const defaultConfig: Config = {
  breakpoints: [481, 768, 1069, 1442],
  textColor: "#333333",
  fontFamily: "sans-serif",
  lineHeight: 1.75,
  fontSize: { xl: "100%", m: "87.5%" },
};

export type InitialProps = {
  block: BlockProps;
  columns: ColumnsProps;
  plainText: PlainTextProps;
  stacked: StackedProps;
  wrap: WrapProps;
};

export type PartialInitialProps = {
  block?: BlockProps;
  columns?: ColumnsProps;
  plainText?: PlainTextProps;
  stacked?: StackedProps;
  wrap?: WrapProps;
};

export type ViewPort = {
  width: number;
  screen: Screen;
};

export const ConfigContext = createContext<Config>(defaultConfig);

export const InitialPropsContext = createContext<InitialProps>({
  block: {},
  columns: {},
  plainText: {},
  stacked: {},
  wrap: {},
});

export const ViewPortContext = createContext<ViewPort>({
  width: 0,
  screen: ScreenKind.XS,
});

function debounce<F extends (...args: Parameters<F>) => ReturnType<F>>(
  func: F,
  delay: number
): (...args: Parameters<F>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<F>): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

export type UnflexibleProviderProps = {
  config?: PartialConfig;
  initialProps?: PartialInitialProps;
  children?: ReactNode;
};

export const UnflexibleProvider = ({
  config,
  initialProps,
  children,
}: UnflexibleProviderProps) => {
  const defaultInitialProps: InitialProps = {
    block: initialBlockProps,
    columns: initialColumnsProps,
    plainText: initialPlainTextProps,
    stacked: initialStackedProps,
    wrap: initialWrapProps,
  };

  const c = { ...defaultConfig, ...config };
  const i = {
    block: { ...defaultInitialProps.block, ...initialProps?.block },
    columns: { ...defaultInitialProps.columns, ...initialProps?.columns },
    plainText: { ...defaultInitialProps.plainText, ...initialProps?.plainText },
    stacked: { ...defaultInitialProps.stacked, ...initialProps?.stacked },
    wrap: { ...defaultInitialProps.wrap, ...initialProps?.wrap },
  };
  const [width, setWidth] = useState(0);
  const [screen, setScreen] = useState(getScreen(c.breakpoints, 0));

  const setViewPort = () => {
    if (window) {
      setWidth(window.innerWidth || 0);
      setScreen(getScreen(c.breakpoints, window.innerWidth || 0));
    }
  };
  const handleResize = debounce(setViewPort, 250);

  useEffect(() => {
    setViewPort();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ConfigContext.Provider value={c}>
      <InitialPropsContext.Provider value={i}>
        <ViewPortContext.Provider value={{ width, screen }}>
          <Component
            color={c.textColor}
            fontSize={getValueOfScreen(c.fontSize, screen) || "100%"}
            fontFamily={c.fontFamily}
            lineHeight={c.lineHeight}
          >
            {children}
          </Component>
        </ViewPortContext.Provider>
      </InitialPropsContext.Provider>
    </ConfigContext.Provider>
  );
};

type ComponentProps = {
  color: string;
  fontSize: string;
  fontFamily: string;
  lineHeight: number;
};

const Component = styled.div<ComponentProps>`
  :global() {
    html,
    body {
      padding: 0;
      margin: 0;
      width: 100vw;
      overflow-x: hidden;
    }
  }

  color: ${(p) => p.color};
  font-size: ${(p) => p.fontSize};
  font-family: ${(p) => p.fontFamily};
  line-height: ${(p) => p.lineHeight};

  img {
    object-fit: cover;
    object-position: 50% 50%;
    vertical-align: middle;
  }
`;
