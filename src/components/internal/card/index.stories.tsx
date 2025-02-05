import type { Meta, StoryObj } from "@storybook/react";

import { Card } from ".";

const meta = {
  title: "Card",
  component: Card,
  tags: ["docsPage"],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ComponentCard: Story = {
  args: {
    children: "Hello, World!",
  },
};
