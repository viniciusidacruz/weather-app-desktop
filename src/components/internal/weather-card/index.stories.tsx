import type { Meta, StoryObj } from "@storybook/react";

import { WeatherCard } from ".";

const meta = {
  title: "WeatherCard",
  component: WeatherCard,
  tags: ["docsPage"],
} satisfies Meta<typeof WeatherCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ComponentWeatherCard: Story = {
  args: {},
};
