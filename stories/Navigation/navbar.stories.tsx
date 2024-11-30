import { Meta, StoryObj } from "@storybook/react";

import Navbar from "@/components/navigation/navbar";

const meta = {
  title: "Navigation/Navbar",
  component: Navbar,
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
