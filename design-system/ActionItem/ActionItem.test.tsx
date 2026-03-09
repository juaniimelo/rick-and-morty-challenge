import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ActionItem } from "./ActionItem";

describe("ActionItem", () => {
  it("renderiza como button por defecto con children", () => {
    render(<ActionItem>Enviar</ActionItem>);
    const btn = screen.getByRole("button", { name: "Enviar" });

    expect(btn).toBeInTheDocument();
    expect(btn.tagName).toBe("BUTTON");
  });

  it("ejecuta onClick al hacer click", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<ActionItem onClick={onClick}>Click</ActionItem>);
    await user.click(screen.getByRole("button", { name: "Click" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("está deshabilitado cuando isDisabled", () => {
    render(<ActionItem isDisabled>Disabled</ActionItem>);
    expect(screen.getByRole("button", { name: "Disabled" })).toBeDisabled();
  });

  it("muestra spinner cuando isLoading y deshabilita el botón", () => {
    render(<ActionItem isLoading>Cargando</ActionItem>);
    const btn = screen.getByRole("button", { name: /Cargando/ });

    expect(btn).toBeDisabled();
    expect(btn.textContent).toContain("Cargando");
  });

  it("aplica fullWidth con clase w-full", () => {
    render(<ActionItem fullWidth>Full</ActionItem>);
    expect(screen.getByRole("button")).toHaveClass("w-full");
  });

  it('renderiza como enlace (Link de Next) cuando as="a" y href', () => {
    render(
      <ActionItem as="a" href="/home">
        Ir
      </ActionItem>,
    );
    const link = screen.getByRole("button", { name: "Ir" });

    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "/home");
  });

  it('renderiza como button cuando as="a" pero no tiene href', () => {
    render(<ActionItem as="a">Sin href</ActionItem>);
    const btn = screen.getByRole("button", { name: "Sin href" });

    expect(btn.tagName).toBe("BUTTON");
  });
});
