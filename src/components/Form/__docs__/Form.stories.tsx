import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta: Meta<typeof Example> = {
  title: 'Button',
  component: Example
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    style: { color: 'black' }
  }
};
export const Secondary: Story = {
  args: {
    style: { color: 'green' }
  }
};
