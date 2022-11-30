import { Story, Meta } from '@storybook/react';
import { Columns, ColumnsProps } from './index';
import { UnflexibleProvider } from '../UnflexibleProvider';

export default {
  title: 'Columns',
  component: Columns,
} as Meta;

const Template: Story<ColumnsProps> = (args) => {
  return (
    <UnflexibleProvider>
      <Columns {...args} />
    </UnflexibleProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
