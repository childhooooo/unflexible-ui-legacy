import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Block, BlockProps } from './index';
import { UnflexibleProvider } from '../UnflexibleProvider';

export default {
  title: 'Block',
  component: Block,
} as Meta;

const Template: Story<BlockProps> = (args) => {
  return (
    <UnflexibleProvider config={{}}>
      <Block {...args} />
    </UnflexibleProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
