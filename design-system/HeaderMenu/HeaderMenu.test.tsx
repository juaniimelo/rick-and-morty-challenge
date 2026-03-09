import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { HeaderMenu } from "./HeaderMenu";

describe("HeaderMenu", () => {
  it("renderiza un header con Logo y ThemeSwitch", () => {
    render(<HeaderMenu />);
    const header = screen.getByRole("banner");

    expect(header).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Rick & Morty/ }),
    ).toBeInTheDocument();
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });
});
