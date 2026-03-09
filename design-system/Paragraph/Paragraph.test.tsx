import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Paragraph } from "./Paragraph";

describe("Paragraph", () => {
  it("renderiza por defecto como p con tamaño md", () => {
    render(<Paragraph>Texto de párrafo</Paragraph>);
    const el = screen.getByText("Texto de párrafo");

    expect(el).toBeInTheDocument();
    expect(el.tagName).toBe("P");
    expect(el).toHaveClass("text-base");
  });

  it("renderiza con as span y size sm", () => {
    render(
      <Paragraph as="span" size="sm">
        Inline
      </Paragraph>,
    );
    const el = screen.getByText("Inline");

    expect(el.tagName).toBe("SPAN");
    expect(el).toHaveClass("text-sm");
  });

  it("aplica className y clases de centrado", () => {
    render(<Paragraph className="extra">Texto</Paragraph>);
    const el = screen.getByText("Texto");

    expect(el).toHaveClass("extra", "text-center", "tracking-tight");
  });
});
