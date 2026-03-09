import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Paragraph } from "@/design-system";

const meta = {
  title: "Design System/Paragraph",
  component: Paragraph,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    as: { control: "select", options: ["p", "span", "div"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl", "2xl"] },
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Texto de párrafo centrado con estilo del design system." },
};

export const Small: Story = {
  args: { size: "sm", children: "Texto pequeño" },
};

export const AsSpan: Story = {
  args: { as: "span", children: "Inline span" },
};
