import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fn } from "storybook/test";

import { CharacterPaginator } from "@/design-system";

const meta = {
  title: "Design System/CharacterPaginator",
  component: CharacterPaginator,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    isLoading: { control: "boolean" },
  },
  args: {
    onPrevious: fn(),
    onNext: fn(),
  },
} satisfies Meta<typeof CharacterPaginator>;

export default meta;
type Story = StoryObj<typeof meta>;

const firstPage = { count: 826, pages: 42, next: 2, prev: 0 };
const midPage = { count: 826, pages: 42, next: 4, prev: 2 };
const lastPage = { count: 826, pages: 42, next: 0, prev: 42 };

export const FirstPage: Story = {
  args: { info: firstPage },
};

export const MidPage: Story = {
  args: { info: midPage },
};

export const LastPage: Story = {
  args: { info: lastPage },
};

export const Loading: Story = {
  args: { info: firstPage, isLoading: true },
};
