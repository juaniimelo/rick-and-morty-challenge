export type ThemeMode = "light" | "dark" | "system";

export const themeConfig = {
  light: { background: "#ffffff" },
  dark: { background: "#0f172a" },
} as const;

export const themeStorageKey = "theme";
