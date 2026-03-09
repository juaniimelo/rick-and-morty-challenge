import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CharacterBadge } from "@/design-system";

const meta = {
  title: "Design System/CharacterBadge",
  component: CharacterBadge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    status: { control: "text" },
    species: { control: "text" },
  },
} satisfies Meta<typeof CharacterBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AliveHuman: Story = {
  args: { status: "Alive", species: "Human" },
};

export const DeadAlien: Story = {
  args: { status: "Dead", species: "Alien" },
};

export const Unknown: Story = {
  args: { status: "unknown", species: "Human" },
};
