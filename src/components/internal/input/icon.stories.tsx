import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from ".";
import { MapPin } from "lucide-react";

const meta = {
  title: "Input",
  component: Icon,
  tags: ["docsPage"],
  argTypes: {
    icon: {
      description: "Content for display icon",
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ComponentIcon: Story = {
  args: {
    icon: MapPin,
  },
};
