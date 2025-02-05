import type { Meta, StoryObj } from "@storybook/react";

import { Field } from ".";

const meta = {
  title: "Input",
  component: Field,
  tags: ["docsPage"],
  argTypes: {
    className: {
      type: "string",
      description: "Additional classes to be applied to the root component",
    },
  },
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ComponentField: Story = {
  args: {
    placeholder: "Enter a placeholder",
  },
};
