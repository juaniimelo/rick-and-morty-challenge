import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { TitleText } from "./TitleText";

describe("TitleText", () => {
  it("renderiza por defecto como h1 con tamaño lg", () => {
    render(<TitleText>Título</TitleText>);
    const el = screen.getByRole("heading", { level: 1, name: "Título" });

    expect(el).toBeInTheDocument();
    expect(el.tagName).toBe("H1");
  });

  it("renderiza con as y size correctos", () => {
    render(
      <TitleText as="h3" size="2xl">
        Subtítulo
      </TitleText>,
    );
    const el = screen.getByRole("heading", { level: 3, name: "Subtítulo" });

    expect(el).toBeInTheDocument();
    expect(el).toHaveClass("text-2xl");
  });

  it("aplica className adicional", () => {
    render(<TitleText className="custom">Título</TitleText>);
    expect(screen.getByText("Título")).toHaveClass("custom", "font-bold");
  });

  it("aplica atributos HTML nativos", () => {
    render(<TitleText id="main-title">Título</TitleText>);
    expect(screen.getByText("Título")).toHaveAttribute("id", "main-title");
  });
});
