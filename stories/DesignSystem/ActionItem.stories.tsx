import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fn } from "storybook/test";

import { ActionItem } from "@/design-system";

const meta = {
  title: "Design System/ActionItem",
  component: ActionItem,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    as: { control: "select", options: ["button", "a"] },
    isDisabled: { control: "boolean" },
    isLoading: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ActionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Acción" },
};

export const Small: Story = {
  args: { size: "sm", children: "Pequeño" },
};

export const Disabled: Story = {
  args: { children: "Deshabilitado", isDisabled: true },
};

export const Loading: Story = {
  args: { children: "Cargando...", isLoading: true },
};

export const FullWidth: Story = {
  args: { children: "Ancho completo", fullWidth: true },
  parameters: { layout: "padded" },
};
