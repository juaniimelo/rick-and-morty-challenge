import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { EpisodesBadge } from "./EpisodesBadge";

describe("EpisodesBadge", () => {
  it("muestra el conteo de episodios", () => {
    render(<EpisodesBadge episodesCount={5} />);
    expect(screen.getByText("Episodios 5")).toBeInTheDocument();
  });

  it("aplica estilo shared cuando isShared es true", () => {
    render(<EpisodesBadge isShared episodesCount={3} />);
    expect(screen.getByText("Episodios 3")).toBeInTheDocument();
    const badge = screen.getByText("Episodios 3").closest("div");

    expect(badge).toHaveClass("bg-app-episodes-badge-shared-color");
  });
});
