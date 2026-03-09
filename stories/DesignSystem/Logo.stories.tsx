import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Logo } from "@/design-system";

const meta = {
  title: "Design System/Logo",
  component: Logo,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
