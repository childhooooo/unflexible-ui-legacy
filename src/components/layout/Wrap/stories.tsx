import React from 'react';
import { Story, Meta } from '@storybook/react';
import Wrap, { Props } from './index';
import UnflexibleProvider from '../../UnflexibleProvider';

export default {
  title: 'Wrap',
  component: Wrap,
} as Meta;

const Template: Story<Props> = (args) => {
  return (
    <UnflexibleProvider>
      <Wrap {...args} />
    </UnflexibleProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
