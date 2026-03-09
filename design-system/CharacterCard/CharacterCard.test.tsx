import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { CharacterCard } from "./CharacterCard";

const mockCharacter = {
  id: 1,
  name: "Rick Sanchez",
  image: "https://example.com/rick.jpg",
  status: "Alive",
  species: "Human",
  episode: [
    { id: 1, name: "Pilot", episode: "S01E01", air_date: "2013-12-02" },
  ],
};

describe("CharacterCard", () => {
  it("renderiza nombre y badge del personaje", () => {
    render(<CharacterCard character={mockCharacter} />);
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Alive")).toBeInTheDocument();
    expect(screen.getByText("Human")).toBeInTheDocument();
  });

  it("renderiza imagen con alt correcto", () => {
    render(<CharacterCard character={mockCharacter} />);
    const img = screen.getByRole("img", { name: "Rick Sanchez" });

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", expect.stringContaining("rick.jpg"));
  });

  it("aplica ElectricBorder cuando isSelected", () => {
    const { container } = render(
      <CharacterCard isSelected character={mockCharacter} />,
    );

    expect(container.querySelector(".electric-border")).toBeInTheDocument();
  });

  it("llama onSelect al hacer click cuando está seleccionado", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();

    render(
      <CharacterCard
        isSelected
        character={mockCharacter}
        onSelect={onSelect}
      />,
    );
    const card = screen.getByRole("button");

    await user.click(card);
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it("personaje Dead tiene clase de fondo distinta", () => {
    const deadChar = { ...mockCharacter, status: "Dead" };
    const { container } = render(<CharacterCard character={deadChar} />);
    const card = container.querySelector(
      ".bg-app-character-card-bg-dead-color",
    );

    expect(card).toBeInTheDocument();
  });
});
