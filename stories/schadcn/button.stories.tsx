import { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/ui/button";

const meta = {
  title: "Schadcn/button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "secondary",
        "destructive",
        "ghost",
        "link",
        "outline",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["default", "icon", "sm", "lg"],
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// Button Variants

// <Button variant="default">Default</Button>
export const Default: Story = {
  args: {
    variant: "default",
    children: "Default",
  },
};

// <Button variant="secondary">Secondary</Button>
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "destructive",
  },
};
export const Outline: Story = {
  args: {
    variant: "outline",
    children: "outline",
  },
};
export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "ghost",
  },
};
export const link: Story = {
  args: {
    variant: "link",
    children: "link",
  },
};
