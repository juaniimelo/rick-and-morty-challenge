import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { CharacterPaginator } from "./CharacterPaginator";

describe("CharacterPaginator", () => {
  const info = {
    count: 42,
    pages: 2,
    next: 2,
    prev: 0,
  };

  it("muestra página actual y total", () => {
    render(
      <CharacterPaginator info={info} onNext={vi.fn()} onPrevious={vi.fn()} />,
    );
    expect(screen.getByText("Página 1 de 2")).toBeInTheDocument();
  });

  it("botón Anterior deshabilitado en primera página", () => {
    render(
      <CharacterPaginator info={info} onNext={vi.fn()} onPrevious={vi.fn()} />,
    );
    expect(screen.getByRole("button", { name: "Anterior" })).toBeDisabled();
    expect(
      screen.getByRole("button", { name: "Siguiente" }),
    ).not.toBeDisabled();
  });

  it("botón Siguiente deshabilitado en última página", () => {
    const lastPageInfo = { ...info, next: 0, prev: 1 };

    render(
      <CharacterPaginator
        info={lastPageInfo}
        onNext={vi.fn()}
        onPrevious={vi.fn()}
      />,
    );
    expect(screen.getByRole("button", { name: "Siguiente" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Anterior" })).not.toBeDisabled();
  });

  it("llama onNext al hacer click en Siguiente", async () => {
    const user = userEvent.setup();
    const onNext = vi.fn();

    render(
      <CharacterPaginator info={info} onNext={onNext} onPrevious={vi.fn()} />,
    );
    await user.click(screen.getByRole("button", { name: "Siguiente" }));
    expect(onNext).toHaveBeenCalledTimes(1);
  });

  it("llama onPrevious al hacer click en Anterior cuando no es primera página", async () => {
    const user = userEvent.setup();
    const onPrevious = vi.fn();
    const midInfo = { ...info, next: 3, prev: 2 };

    render(
      <CharacterPaginator
        info={midInfo}
        onNext={vi.fn()}
        onPrevious={onPrevious}
      />,
    );
    await user.click(screen.getByRole("button", { name: "Anterior" }));
    expect(onPrevious).toHaveBeenCalledTimes(1);
  });

  it("muestra loading en botones cuando isLoading", () => {
    render(
      <CharacterPaginator
        isLoading
        info={info}
        onNext={vi.fn()}
        onPrevious={vi.fn()}
      />,
    );
    const buttons = screen.getAllByRole("button");

    expect(buttons.every((b) => b.hasAttribute("disabled"))).toBe(true);
  });
});
