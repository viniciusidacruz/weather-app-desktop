import type { Meta, StoryObj } from "@storybook/react";

import { Root } from ".";

const meta = {
  title: "Input",
  component: Root,
  tags: ["docsPage"],
  argTypes: {
    children: {
      description: "Content to be displayed inside the root component",
    },
    className: {
      type: "string",
      description: "Additional classes to be applied to the root component",
    },
  },
} satisfies Meta<typeof Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ComponentRoot: Story = {
  args: {
    children: (
      <>
        <span>One</span>
        <span>Two</span>
        <span>Three</span>
      </>
    ),
  },
};
