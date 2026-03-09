import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Logo } from "./Logo";

describe("Logo", () => {
  it("renderiza el enlace a home con texto Rick & Morty Comparador", () => {
    render(<Logo />);
    const link = screen.getByRole("link", { name: /Rick & Morty Comparador/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });

  it("incluye la palabra Comparador en el texto", () => {
    render(<Logo />);
    expect(screen.getByText(/Comparador/)).toBeInTheDocument();
  });
});
