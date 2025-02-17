import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "../components/button"

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "default",
  },
}

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
}

export const Destructive: Story = {
  args: {
    children: "Button",
    variant: "destructive",
  },
}

export const Outline: Story = {
  args: {
    children: "Button",
    variant: "outline",
  },
}

export const Ghost: Story = {
  args: {
    children: "Button",
    variant: "ghost",
  },
}
