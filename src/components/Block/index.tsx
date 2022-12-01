import { ReactNode, useContext } from "react";
import { styled } from "@linaria/react";
import { InitialPropsContext, ViewPortContext } from "../UnflexibleProvider";
import { selectValueOfScreen } from "../../lib/util";
import { ValuesForScreens } from "../../lib/screen";

export type BlockProps = {
  width?: ValuesForScreens<string>;
  maxWidth?: string;
  height?: ValuesForScreens<string>;
  padding?: ValuesForScreens<[number, number, number, number]>;
  fixRatio?: boolean;
  shrink?: number;
  grow?: number;
  color?: string;
  basePadding?: string;
  children?: ReactNode;
};

export const initialBlockProps: BlockProps = {
  basePadding: "32px",
};

export const Block = (props: BlockProps) => {
  const initialProps = useContext(InitialPropsContext);
  const viewPort = useContext(ViewPortContext);

  let grow = 0;
  if (initialProps.block.grow !== undefined) {
    grow = initialProps.block.grow;
  }
  if (props.grow !== undefined) {
    grow = props.grow;
  }

  let shrink = 0;
  if (initialProps.block.shrink !== undefined) {
    shrink = initialProps.block.shrink;
  }
  if (props.shrink !== undefined) {
    shrink = props.shrink;
  }

  return (
    <BlockComponent
      width={
        selectValueOfScreen<string>(
          initialProps.block.width,
          props.width,
          viewPort.screen
        ) || "auto"
      }
      maxWidth={props.maxWidth || "100%"}
      height={
        selectValueOfScreen<string>(
          initialProps.block.height,
          props.height,
          viewPort.screen
        ) || "auto"
      }
      padding={
        selectValueOfScreen<[number, number, number, number]>(
          initialProps.block.padding,
          props.padding,
          viewPort.screen
        ) || [0, 0, 0, 0]
      }
      fixRatio={props.fixRatio || initialProps.block.fixRatio || false}
      shrink={shrink}
      grow={grow}
      color={props.color || initialProps.block.color || "transparent"}
      basePadding={props.basePadding || initialProps.block.basePadding || "0px"}
    >
      <div>{props.children}</div>
    </BlockComponent>
  );
};

type BlockComponentProps = {
  width: string;
  maxWidth: string;
  height: string;
  padding: [number, number, number, number];
  fixRatio: boolean;
  shrink: number;
  grow: number;
  color: string;
  basePadding: string;
};

const BlockComponent = styled.div<BlockComponentProps>`
  position: relative;
  max-width: ${(p) => p.maxWidth};
  flex-shrink: ${(p) => p.shrink};
  flex-grow: ${(p) => p.grow};

  > div {
    position: ${(p) => (p.fixRatio ? "absolute" : "relative")};
    height: ${(p) => p.height};
    width: ${(p) => (p.fixRatio ? "100%" : p.width)};
    max-width: 100%;
    top: ${(p) => (p.fixRatio ? 0 : "auto")};
    left: ${(p) => (p.fixRatio ? 0 : "auto")};
    height: ${(p) => (p.fixRatio ? "100%" : p.height)};
    padding: calc(${(p) => p.basePadding} * ${(p) => p.padding[0]})
      calc(${(p) => p.basePadding} * ${(p) => p.padding[1]})
      calc(${(p) => p.basePadding} * ${(p) => p.padding[2]})
      calc(${(p) => p.basePadding} * ${(p) => p.padding[3]});
    background-color: ${(p) => p.color};
  }

  &:before {
    position: relative;
    display: ${(p) => (p.fixRatio ? "block" : "none")};
    content: "";
    width: ${(p) => (p.fixRatio ? p.width : "auto")};
    padding-top: ${(p) => p.height};
  }
`;
