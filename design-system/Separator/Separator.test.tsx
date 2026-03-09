import React from "react";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import { Separator } from "./Separator";

describe("Separator", () => {
  it("renderiza un contenedor con línea separadora", () => {
    const { container } = render(<Separator />);
    const wrapper = container.firstChild as HTMLElement;

    expect(wrapper).toBeInTheDocument();
    expect(wrapper.className).toContain("flex");
    const span = wrapper.querySelector("span");

    expect(span).toHaveClass("bg-app-separator-gray-light");
  });
});
