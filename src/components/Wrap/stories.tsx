import { Story, Meta } from '@storybook/react';
import { Wrap, WrapProps } from './index';
import { UnflexibleProvider } from '../UnflexibleProvider';

export default {
  title: 'Wrap',
  component: Wrap,
} as Meta;

const Template: Story<WrapProps> = (args) => {
  return (
    <UnflexibleProvider>
      <Wrap {...args} />
    </UnflexibleProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
