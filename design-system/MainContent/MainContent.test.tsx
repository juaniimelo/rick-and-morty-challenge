import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { MainContent } from "./MainContent";

describe("MainContent", () => {
  it("renderiza children dentro de main", () => {
    render(
      <MainContent>
        <span>Main</span>
      </MainContent>,
    );
    const main = screen.getByRole("main");

    expect(main).toBeInTheDocument();
    expect(screen.getByText("Main")).toBeInTheDocument();
  });
});
