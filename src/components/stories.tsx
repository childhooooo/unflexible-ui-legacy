import { Story, Meta } from "@storybook/react";
import { UnflexibleProvider } from "./UnflexibleProvider";
import { Stacked } from "./Stacked";
import { Columns } from "./Columns";
import { Block } from "./Block";
import { PlainText } from "./PlainText";

const Test = () => {
  return (
    <>
      <Stacked padding={{ xl: [2, 2], m: [1, 1] }} color="#efefef" wrap>
        <Columns justify="center" gap={{ xl: 1 }} repeat={{ xl: 2, xs: 1 }}>
          <Block
            height={{ xl: "100%" }}
            fixRatio
            padding={{ xl: [1, 1, 1, 1] }}
            color="#dddddd"
          >
            <PlainText
              fontSize={{ h1: { xl: 1.5 } }}
              textAlign={{ h1: "center" }}
            >
              <h1>見出し</h1>
              <p>本文です。</p>
            </PlainText>
          </Block>
          <Block
            height={{ xl: "100%" }}
            padding={{ xl: [1, 1, 1, 1] }}
            color="#dddddd"
          >
            <PlainText
              fontSize={{ h1: { xl: 1.5 } }}
              textAlign={{ h1: "center" }}
            >
              <h1>見出し</h1>
              <p>本文です。</p>
            </PlainText>
          </Block>
        </Columns>
      </Stacked>

      <Stacked padding={{ xl: [2, 2] }} color="#aaaaaa" wrap>
        <Columns
          justify="center"
          gap={{ xl: 1 }}
          repeat={{ xl: 3, s: 1 }}
          wrap={{ xl: "wrap" }}
        >
          <Block
            height={{ xl: "100%" }}
            padding={{ xl: [1, 1, 1, 1] }}
            color="#dddddd"
          >
            <PlainText>
              <h1>見出し</h1>
              <p>本文です。</p>
            </PlainText>
          </Block>
          <Block
            height={{ xl: "100%" }}
            padding={{ xl: [1, 1, 1, 1] }}
            color="#dddddd"
          >
            <PlainText>
              <h1>見出し</h1>
              <p>本文です。</p>
            </PlainText>
          </Block>
          <Block
            height={{ xl: "100%" }}
            padding={{ xl: [1, 1, 1, 1] }}
            color="#dddddd"
          >
            <PlainText>
              <h1>見出し</h1>
              <p>本文です。本文です。本文です。本文です。</p>
              <p>本文です。</p>
            </PlainText>
          </Block>
        </Columns>
      </Stacked>

      <Stacked padding={{ xl: [2, 2] }} color="#efefef" wrap>
        <Columns justify="center" wrap={{ xl: "wrap" }}>
          <Block
            width={{ l: "900px", m: "450px" }}
            padding={{ xl: [1, 1, 1, 1] }}
            color="#dddddd"
          >
            <PlainText>
              <h1>見出し1</h1>
              <p>本文です。</p>
              <h2>見出し2</h2>
              <p>本文です。</p>
            </PlainText>
          </Block>
        </Columns>
      </Stacked>
    </>
  );
};

export default {
  title: "Test",
  component: Test,
} as Meta;

const Template: Story<{}> = (args) => {
  return (
    <UnflexibleProvider>
      <Test {...args} />
    </UnflexibleProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
