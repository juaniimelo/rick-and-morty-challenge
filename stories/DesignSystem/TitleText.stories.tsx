import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { TitleText } from "@/design-system";

const meta = {
  title: "Design System/TitleText",
  component: TitleText,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    size: {
      control: "select",
      options: [
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
      ],
    },
  },
} satisfies Meta<typeof TitleText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Título principal" },
};

export const AsH2: Story = {
  args: { as: "h2", size: "2xl", children: "Subtítulo" },
};

export const Small: Story = {
  args: { as: "h4", size: "sm", children: "Texto pequeño" },
};

export const Large: Story = {
  args: { as: "h1", size: "4xl", children: "Título grande" },
};
