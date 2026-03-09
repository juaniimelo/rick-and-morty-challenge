import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { CharacterPlain } from "@/core/Home/context/characters-state.type";

import { CharacterCard } from "@/design-system";

const mockCharacter: CharacterPlain = {
  id: 1,
  name: "Rick Sanchez",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  status: "Alive",
  species: "Human",
  episode: [
    { id: 1, name: "Pilot", episode: "S01E01", air_date: "2013-12-02" },
    { id: 2, name: "Lawnmower Dog", episode: "S01E02", air_date: "2013-12-09" },
  ],
};

const deadCharacter: CharacterPlain = {
  ...mockCharacter,
  id: 2,
  name: "Morty Smith",
  image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  status: "Dead",
  species: "Human",
  episode: [],
};

const meta = {
  title: "Design System/CharacterCard",
  component: CharacterCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    isSelected: { control: "boolean" },
    onSelect: { action: "selected" },
  },
} satisfies Meta<typeof CharacterCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { character: mockCharacter },
};

export const Selected: Story = {
  args: { character: mockCharacter, isSelected: true, onSelect: () => {} },
};

export const DeadCharacter: Story = {
  args: { character: deadCharacter },
};

export const NoEpisodes: Story = {
  args: { character: { ...mockCharacter, episode: [] } },
};
