import type { Meta, StoryObj } from '@storybook/react';
import { Dialog, DialogTrigger, DialogContent } from './dialog';
import { Button } from '../button';

const meta: Meta<typeof Dialog> = {
  title: 'UI/Dialog',
  component: Dialog,
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <h2>Dialog Title</h2>
        <p>Dialog content goes here</p>
      </DialogContent>
    </Dialog>
  ),
};
