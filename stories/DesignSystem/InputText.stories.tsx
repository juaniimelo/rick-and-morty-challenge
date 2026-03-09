import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { InputText } from "@/design-system";

const meta = {
  title: "Design System/InputText",
  component: InputText,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    value: { control: "text" },
  },
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: "Buscar personaje..." },
};

export const WithValue: Story = {
  args: { placeholder: "Nombre", value: "Rick" },
};

export const WithIcon: Story = {
  args: {
    placeholder: "Buscar...",
    icon: (
      <span aria-hidden className="text-app-text-gray-light text-lg">
        🔍
      </span>
    ),
  },
};
