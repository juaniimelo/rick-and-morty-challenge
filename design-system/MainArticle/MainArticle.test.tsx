import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { MainArticle } from "./MainArticle";

describe("MainArticle", () => {
  it("renderiza children dentro de article", () => {
    render(
      <MainArticle>
        <span>Contenido</span>
      </MainArticle>,
    );
    const article = screen.getByRole("article");

    expect(article).toBeInTheDocument();
    expect(screen.getByText("Contenido")).toBeInTheDocument();
  });
});
