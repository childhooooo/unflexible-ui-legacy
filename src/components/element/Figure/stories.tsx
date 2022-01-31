import React from 'react';
import { Story, Meta } from '@storybook/react';
import Figure, { Props } from './index';
import UnflexibleProvider from '../../UnflexibleProvider';

export default {
  title: 'Figure',
  component: Figure,
} as Meta;

const Template: Story<Props> = (args) => {
  return (
    <UnflexibleProvider>
      <Figure {...args} />
    </UnflexibleProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
