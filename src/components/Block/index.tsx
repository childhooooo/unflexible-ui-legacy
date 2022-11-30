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

  return (
    <BlockComponent
      width={
        selectValueOfScreen<string>(
          initialProps.block.width,
          props.width,
          viewPort.screen
        ) || "inherit"
      }
      maxWidth={props.maxWidth || "inherit"}
      height={
        selectValueOfScreen<string>(
          initialProps.block.height,
          props.height,
          viewPort.screen
        ) || "inherit"
      }
      padding={
        selectValueOfScreen<[number, number, number, number]>(
          initialProps.block.padding,
          props.padding,
          viewPort.screen
        ) || [0, 0, 0, 0]
      }
      fixRatio={props.fixRatio || initialProps.block.fixRatio || false}
      shrink={props.shrink || initialProps.block.shrink || "inherit"}
      grow={props.grow || initialProps.block.grow || "inherit"}
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
  shrink: number | string;
  grow: number | string;
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
    top: ${(p) => (p.fixRatio ? 0 : "auto")};
    left: ${(p) => (p.fixRatio ? 0 : "auto")};
    height: ${(p) => (p.fixRatio ? "100%" : p.height)};
    width: ${(p) => p.width};
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
    padding-top: ${(p) => p.height};
  }
`;
