import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./card";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content with some information here.</p>
      </CardContent>
      <CardFooter>
        <p>Card footer with actions</p>
      </CardFooter>
    </Card>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card className="w-[350px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=350&h=175&fit=crop&auto=format"
        alt="Card image"
        className="w-full h-[175px] object-cover"
      />
      <CardHeader className="pt-4">
        <CardTitle>Card With Image</CardTitle>
        <CardDescription>This card has an image on top</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content with details about the image.</p>
      </CardContent>
    </Card>
  ),
};
