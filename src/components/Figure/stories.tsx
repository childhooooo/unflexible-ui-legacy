import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Figure, FigureProps } from './index';
import { UnflexibleProvider } from '../UnflexibleProvider';

export default {
  title: 'Figure',
  component: Figure,
} as Meta;

const Template: Story<FigureProps> = (args) => {
  return (
    <UnflexibleProvider config={{}}>
      <Figure {...args} />
    </UnflexibleProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
