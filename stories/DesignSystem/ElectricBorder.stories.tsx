import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ElectricBorder } from "@/design-system";

const meta = {
  title: "Design System/ElectricBorder",
  component: ElectricBorder,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    speed: { control: { type: "number", min: 0.5, max: 3, step: 0.1 } },
    chaos: { control: { type: "number", min: 0, max: 0.5, step: 0.01 } },
  },
} satisfies Meta<typeof ElectricBorder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-6 bg-white dark:bg-app-character-card-bg-color rounded-lg min-w-[200px] text-center">
        Contenido con borde eléctrico
      </div>
    ),
  },
};

export const Cyan: Story = {
  args: {
    color: "#7df9ff",
    speed: 1,
    chaos: 0.12,
    children: (
      <div className="p-6 bg-white dark:bg-app-character-card-bg-color rounded-lg min-w-[200px] text-center">
        Borde cyan
      </div>
    ),
  },
};

export const SmallBox: Story = {
  args: {
    color: "#5227FF",
    children: (
      <div className="px-4 py-2 rounded bg-white dark:bg-app-character-card-bg-color">
        Small
      </div>
    ),
  },
};
