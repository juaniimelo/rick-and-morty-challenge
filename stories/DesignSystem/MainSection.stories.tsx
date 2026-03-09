import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { MainSection } from "@/design-system";

const meta = {
  title: "Design System/MainSection",
  component: MainSection,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof MainSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-2xl font-bold text-app-title-section">
          Título de sección
        </h2>
        <p className="text-app-text-gray-light">Contenido de la sección.</p>
      </div>
    ),
  },
};
