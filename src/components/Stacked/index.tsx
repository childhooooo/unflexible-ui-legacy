import { ReactNode, useContext } from "react";
import { styled } from "@linaria/react";
import { InitialPropsContext, ViewPortContext } from "..//UnflexibleProvider";
import { ValuesForScreens } from "../../lib/screen";
import { selectValueOfScreen } from "../../lib/util";

import { Wrap } from "../Wrap";

export type StackedProps = {
  padding?: ValuesForScreens<[number, number]>;
  color?: string;
  height?: ValuesForScreens<string>;
  gradient?: string;
  zIndex?: number;
  image?: StackedBackgroundImage;
  wrap?: boolean;
  style?: any;
  basePadding?: string;
  children?: ReactNode;
};

export const initialStackedProps = {
  basePadding: "32px",
};

export type StackedBackgroundImage = {
  src: string;
  srcSet?: string;
  size?: string;
  position?: string;
};

export const Stacked = (props: StackedProps) => {
  const initialProps = useContext(InitialPropsContext);
  const viewPort = useContext(ViewPortContext);

  return (
    <StackedComponent
      padding={
        selectValueOfScreen(
          initialProps.stacked.padding,
          props.padding,
          viewPort.screen
        ) || [0, 0]
      }
      color={props.color || initialProps.stacked.color || "transparent"}
      gradient={props.gradient || initialProps.stacked.gradient || null}
      zIndex={props.zIndex || initialProps.stacked.zIndex || 1}
      height={
        selectValueOfScreen(
          initialProps.stacked.height,
          props.height,
          viewPort.screen
        ) || "inherit"
      }
      image={props.image || initialProps.stacked.image || null}
      style={props.style || initialProps.stacked.style || null}
      basePadding={
        props.basePadding || initialProps.stacked.basePadding || "0px"
      }
    >
      {props.image && (
        <img
          className="stacked--background"
          src={props.image.src}
          srcSet={props.image.srcSet || undefined}
          alt="背景"
        />
      )}
      {props.wrap ? (
        <Wrap>{props.children}</Wrap>
      ) : (
        <NoWrap>{props.children}</NoWrap>
      )}
    </StackedComponent>
  );
};

type StackedComponentProps = {
  padding: [number, number];
  color: string;
  height: string;
  gradient: string | null;
  zIndex: number;
  image: StackedBackgroundImage | null;
  basePadding: string;
};

const StackedComponent = styled.div<StackedComponentProps>`
  position: relative;
  z-index: ${(p) => p.zIndex};

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  height: ${(p) => p.height};

  padding: calc(${(p) => p.basePadding} * ${(p) => p.padding[0]}) 0
    calc(${(p) => p.basePadding} * ${(p) => p.padding[1]}) 0;

  background: ${(p) =>
    p.gradient ? `linear-gradient(${p.gradient})` : p.color};

  > * {
    display: block;
    z-index: 2;
  }

  > .stacked--background {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: ${(p: any) => p.image?.size || "cover"};
    object-position: ${(p: any) => p.image?.position || "50% 50%"};
  }
`;

const NoWrap = styled.div`
  width: 100%;
`;
