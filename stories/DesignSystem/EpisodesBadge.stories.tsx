import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { EpisodesBadge } from "@/design-system";

const meta = {
  title: "Design System/EpisodesBadge",
  component: EpisodesBadge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    episodesCount: { control: "number" },
    isShared: { control: "boolean" },
  },
} satisfies Meta<typeof EpisodesBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { episodesCount: 5 },
};

export const Shared: Story = {
  args: { episodesCount: 3, isShared: true },
};

export const Many: Story = {
  args: { episodesCount: 51 },
};
