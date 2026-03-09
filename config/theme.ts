export type ThemeMode = "light" | "dark" | "system";

/** Solo el color de fondo. Para cambiarlo: edita --app-background en lib/styles/global.css */
export const themeConfig = {
  light: { background: "#ffffff" },
  dark: { background: "#0f172a" },
} as const;

export const themeStorageKey = "theme";
