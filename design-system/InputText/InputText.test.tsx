import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { InputText } from "./InputText";

describe("InputText", () => {
  it("renderiza con placeholder", () => {
    render(<InputText placeholder="Buscar..." />);
    expect(screen.getByPlaceholderText("Buscar...")).toBeInTheDocument();
  });

  it("muestra el value controlado", () => {
    render(<InputText placeholder="Buscar" value="Rick" />);
    const input = screen.getByDisplayValue("Rick");

    expect(input).toBeInTheDocument();
  });

  it("llama onValueChange al escribir", async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();

    render(<InputText placeholder="Buscar" onValueChange={onValueChange} />);
    const input = screen.getByPlaceholderText("Buscar");

    await user.type(input, "a");
    expect(onValueChange).toHaveBeenCalled();
  });

  it("acepta icon como startContent", () => {
    render(
      <InputText
        icon={<span data-testid="icon">🔍</span>}
        placeholder="Buscar"
      />,
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
