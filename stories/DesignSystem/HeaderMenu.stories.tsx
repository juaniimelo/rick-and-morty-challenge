import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { HeaderMenu } from "@/design-system";

const meta = {
  title: "Design System/HeaderMenu",
  component: HeaderMenu,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
