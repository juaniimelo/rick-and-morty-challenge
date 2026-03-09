import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { ElectricBorder } from "./ElectricBorder";

describe("ElectricBorder", () => {
  it("renderiza children dentro del borde", () => {
    render(
      <ElectricBorder>
        <span>Contenido</span>
      </ElectricBorder>,
    );
    expect(screen.getByText("Contenido")).toBeInTheDocument();
  });

  it("renderiza sin children", () => {
    const { container } = render(<ElectricBorder />);
    const wrapper = container.querySelector(".electric-border");

    expect(wrapper).toBeInTheDocument();
    expect(wrapper?.querySelector(".eb-content")).toBeInTheDocument();
  });

  it("aplica className personalizada", () => {
    const { container } = render(
      <ElectricBorder className="custom-class">
        <span>X</span>
      </ElectricBorder>,
    );

    expect(container.querySelector(".electric-border")).toHaveClass(
      "custom-class",
    );
  });

  it("incluye canvas para el efecto", () => {
    const { container } = render(
      <ElectricBorder>
        <span>X</span>
      </ElectricBorder>,
    );

    expect(container.querySelector("canvas")).toBeInTheDocument();
  });
});
