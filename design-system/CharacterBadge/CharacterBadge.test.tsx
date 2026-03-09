import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { CharacterBadge } from "./CharacterBadge";

describe("CharacterBadge", () => {
  it("muestra status y species", () => {
    render(<CharacterBadge species="Human" status="Alive" />);
    expect(screen.getByText("Alive")).toBeInTheDocument();
    expect(screen.getByText("Human")).toBeInTheDocument();
  });

  it("aplica clases de estilo correctas", () => {
    const { container } = render(
      <CharacterBadge species="Alien" status="Dead" />,
    );
    const wrapper = container.firstChild as HTMLElement;

    expect(wrapper).toHaveClass("flex");
  });
});
