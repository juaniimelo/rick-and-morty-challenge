import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Separator } from "@/design-system";

const meta = {
  title: "Design System/Separator",
  component: Separator,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
