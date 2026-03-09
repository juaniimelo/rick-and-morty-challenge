"use client";

import type { ThemeMode } from "@/config/theme";

import { useEffect, useState } from "react";
import { useTheme as useNextTheme } from "next-themes";

/**
 * next-themes 0.4.x no expone "status". Usamos mounted para saber cuándo
 * el tema ya está disponible en el cliente (evita hydration mismatch).
 */
export function useTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme, themes } = useNextTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return {
    theme: theme as ThemeMode | undefined,
    setTheme: setTheme as (theme: ThemeMode) => void,
    resolvedTheme,
    themes,
    /** true cuando el tema ya está disponible (post-hidratación). next-themes no expone "status". */
    ready: mounted,
    toggleTheme,
    isDark: resolvedTheme === "dark",
    isLight: resolvedTheme === "light",
  };
}
