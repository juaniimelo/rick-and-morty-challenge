import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ThemeSwitch } from "./Switch";

const useThemeMock = vi.fn();

vi.mock("@/lib/hooks/use-theme", () => ({
  useTheme: () => useThemeMock(),
}));

describe("ThemeSwitch", () => {
  const defaultThemeReturn = {
    isDark: false,
    setTheme: vi.fn(),
    ready: true,
    theme: "light" as const,
    resolvedTheme: "light" as const,
    themes: ["light", "dark"],
    toggleTheme: vi.fn(),
    isLight: true,
  };

  beforeEach(() => {
    useThemeMock.mockReturnValue(defaultThemeReturn);
  });

  it("renderiza switch cuando ready es true", () => {
    render(<ThemeSwitch />);
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  it("muestra switch deshabilitado cuando ready es false", () => {
    useThemeMock.mockReturnValue({ ...defaultThemeReturn, ready: false });
    render(<ThemeSwitch />);
    expect(
      screen.getByRole("switch", { name: /Cargando tema/i }),
    ).toBeDisabled();
  });

  it("llama setTheme al cambiar valor", async () => {
    const user = userEvent.setup();
    const setTheme = vi.fn();

    useThemeMock.mockReturnValue({ ...defaultThemeReturn, setTheme });
    render(<ThemeSwitch />);
    const switchEl = screen.getByRole("switch");

    await user.click(switchEl);
    expect(setTheme).toHaveBeenCalledWith("dark");
  });
});
