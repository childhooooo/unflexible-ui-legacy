import { ReactNode, useContext } from "react";
import { styled } from "@linaria/react";
import { InitialPropsContext, ViewPortContext } from "..//UnflexibleProvider";
import { ValuesForScreens } from "../../lib/screen";
import { selectValueOfScreen } from "../../lib/util";

export type WrapProps = {
  width?: ValuesForScreens<string>;
  children?: ReactNode;
};

export const initialWrapProps = {
  width: {
    xl: "1240px",
    l: "1030px",
    m: "760px",
    s: "470px",
    xs: "94%",
  },
};

export const Wrap = (props: WrapProps) => {
  const initialProps = useContext(InitialPropsContext);
  const viewPort = useContext(ViewPortContext);

  return (
    <WrapComponent
      width={
        selectValueOfScreen(
          initialProps.wrap.width,
          props.width,
          viewPort.screen
        ) || "inherit"
      }
    >
      {props.children}
    </WrapComponent>
  );
};

type WrapComponentProps = {
  width: string;
};

const WrapComponent = styled.div<WrapComponentProps>`
  position: relative;
  margin: 0 auto;
  width: ${(p) => p.width};
`;
