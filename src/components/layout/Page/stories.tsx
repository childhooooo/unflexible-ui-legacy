import React from 'react';
import { Story, Meta } from '@storybook/react';
import Page, { Props } from './index';
import UnflexibleProvider from '../../UnflexibleProvider';
import Stacked from '../Stacked';
import Columns from '../Columns';
import Block from '../Block';
import PlainText from '../../element/PlainText';
import Figure from '../../element/Figure';

import { color } from '../../../lib/config';
import imageM from '../../../lib/assets/astronaut_m.jpg';
import imageL from '../../../lib/assets/astronaut_l.jpg';

export default {
  title: 'Page',
  component: Page,
} as Meta;

const Template: Story<Props> = (args) => {
  return (
    <UnflexibleProvider>
      <Page {...args} />
    </UnflexibleProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  title: 'ページタイトル',
  description: '',
  header: <p>ヘッダー</p>,
  footer: <p>フッター</p>,
  children: (
    <Stacked color={color.gray} paddingPos="none">
      <Stacked color={color.white} imageSrc={imageL} wrap>
        <Block width="100%">
          <PlainText h2Color={color.white}>
            <h2>メインビジュアル</h2>
          </PlainText>
        </Block>
      </Stacked>

      <Stacked wrap>
        <Columns gap="normal" repeatXL={4} repeatM={2}>
          <Block height="75%" fixRatio>
            <Figure src={imageM} name="宇宙飛行士" width="100%" height="100%" />
          </Block>

          <Block>
            <PlainText h4Align="center">
              <h4>タイトル</h4>
              <p>文章</p>
            </PlainText>
          </Block>

          <Block>
            <PlainText h4Align="center">
              <h4>タイトル</h4>
              <p>文章</p>
            </PlainText>
          </Block>

          <Block height="75%" fixRatio>
            <Figure src={imageM} name="宇宙飛行士" width="100%" height="100%" />
          </Block>
        </Columns>
      </Stacked>

      <Stacked color={color.white} wrap>
        <Block width="100%">
          <PlainText>
            <h2>大きな見出し</h2>
            <p>文章です。</p>
            <h3>中くらいの見出し</h3>
            <p>文章です。</p>
            <ul>
              <li>リスト</li>
              <li>リスト</li>
              <li>リスト</li>
            </ul>
          </PlainText>
        </Block>
      </Stacked>
    </Stacked>
  ),
};
