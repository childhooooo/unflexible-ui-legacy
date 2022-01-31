import React from 'react';
import { Story, Meta } from '@storybook/react';
import Columns, { Props } from './index';
import UnflexibleProvider from '../../UnflexibleProvider';

export default {
  title: 'Columns',
  component: Columns,
} as Meta;

const Template: Story<Props> = (args) => {
  return (
    <UnflexibleProvider>
      <Columns {...args} />
    </UnflexibleProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
