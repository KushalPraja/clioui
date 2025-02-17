import type { Meta, StoryObj } from '@storybook/react';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectValue,
} from './select';

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
