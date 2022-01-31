import React from 'react';
import { Story, Meta } from '@storybook/react';
import PlainText, { Props } from './index';
import UnflexibleProvider from '../../UnflexibleProvider';

export default {
  title: 'PlainText',
  component: PlainText,
} as Meta;

const Template: Story<Props> = (args) => (
  <UnflexibleProvider>
    <PlainText {...args} />
  </UnflexibleProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <>
      <h1>見出し（h1）</h1>
      <p>段落</p>
      <h2>見出し（h2）</h2>
      <p>段落</p>
      <h3>見出し（h3）</h3>
      <p>段落</p>
      <h4>見出し（h4）</h4>
      <p>段落</p>
      <ul>
        <li>リスト</li>
        <li>リスト</li>
        <li>リスト</li>
      </ul>
    </>
  ),
};
