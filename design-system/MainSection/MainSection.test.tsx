import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { MainSection } from "./MainSection";

describe("MainSection", () => {
  it("renderiza children dentro de section", () => {
    render(
      <MainSection>
        <span>Sección</span>
      </MainSection>,
    );
    const section = document.querySelector("section");

    expect(section).toBeInTheDocument();
    expect(screen.getByText("Sección")).toBeInTheDocument();
  });
});
