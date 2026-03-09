import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ThemeSwitch } from "@/design-system";

const meta = {
  title: "Design System/ThemeSwitch",
  component: ThemeSwitch,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
