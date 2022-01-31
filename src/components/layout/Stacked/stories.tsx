import React from 'react';
import { Story, Meta } from '@storybook/react';
import Stacked, { Props } from './index';
import UnflexibleProvider from '../../UnflexibleProvider';

export default {
  title: 'Stacked',
  component: Stacked,
} as Meta;

const Template: Story<Props> = (args) => {
  return (
    <UnflexibleProvider>
      <Stacked {...args} />
    </UnflexibleProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
