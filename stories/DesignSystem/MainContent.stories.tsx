import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { MainContent } from "@/design-system";

const meta = {
  title: "Design System/MainContent",
  component: MainContent,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof MainContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="flex flex-col gap-4 p-4">
        <header className="text-lg font-semibold text-app-title-section">
          Header
        </header>
        <p className="text-app-text-gray-light">
          Contenido principal de la página.
        </p>
      </div>
    ),
  },
};
