import { ReactNode, useContext } from "react";
import { styled } from "@linaria/react";
import { InitialPropsContext, ViewPortContext } from "..//UnflexibleProvider";
import { ValuesForScreens } from "../../lib/screen";
import { selectValueOfScreen } from "../../lib/util";

export type ColumnsProps = {
  align?: string;
  justify?: string;
  gap?: ValuesForScreens<number>;
  repeat?: ValuesForScreens<number>;
  wrap?: ValuesForScreens<string>;
  baseGap?: string;
  children?: ReactNode;
};

export const initialColumnsProps = {
  baseGap: "16px",
};

export const Columns = (props: ColumnsProps) => {
  const initialProps = useContext(InitialPropsContext);
  const viewPort = useContext(ViewPortContext);

  return (
    <ColumnsComponent
      align={props.align || initialProps.columns.align || "stretch"}
      justify={props.justify || initialProps.columns.justify || "flex-start"}
      gap={
        selectValueOfScreen<number>(
          initialProps.columns.gap,
          props.gap,
          viewPort.screen
        ) || 0
      }
      repeat={
        selectValueOfScreen<number>(
          initialProps.columns.repeat,
          props.repeat,
          viewPort.screen
        ) || null
      }
      wrap={
        selectValueOfScreen<string>(
          initialProps.columns.wrap,
          props.wrap,
          viewPort.screen
        ) || "wrap"
      }
      baseGap={props.baseGap || initialProps.columns.baseGap || "0px"}
    >
      {props.children}
    </ColumnsComponent>
  );
};

export type ColumnsComponentProps = {
  align: string;
  justify: string;
  gap: number;
  repeat: number | null;
  wrap: string;
  baseGap: string;
};

const ColumnsComponent = styled.div<ColumnsComponentProps>`
  display: flex;
  flex-wrap: ${(p) => p.wrap};
  align-items: ${(p) => p.align};
  justify-content: ${(p) => p.justify};
  gap: calc(${(p) => p.baseGap} * ${(p) => p.gap});
  width: 100%;

  > * {
    width: ${(p) =>
      p.repeat
        ? `calc(
      (100% - ${p.repeat - 1} * ${p.baseGap} * ${p.gap}) /
        ${p.repeat}
    )`
        : "auto"};
  }
`;
