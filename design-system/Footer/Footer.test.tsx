import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Footer } from "./Footer";

describe("Footer", () => {
  it("renderiza el texto y el enlace al autor", () => {
    render(<Footer />);
    expect(screen.getByText(/Powered by/)).toBeInTheDocument();
    const link = screen.getByRole("link", { name: "Juan Melo" });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/juanimelo/",
    );
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("renderiza un footer semántico", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("footer");

    expect(footer).toBeInTheDocument();
  });
});
