import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { MainArticle } from "@/design-system";

const meta = {
  title: "Design System/MainArticle",
  component: MainArticle,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof MainArticle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-2xl font-bold text-app-title-section">
          Sección de artículo
        </h2>
        <p className="text-app-text-gray-light">Contenido del artículo aquí.</p>
      </div>
    ),
  },
};
