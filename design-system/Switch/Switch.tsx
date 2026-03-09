"use client";

import { Switch } from "@heroui/react";

import { useTheme } from "@/lib/hooks/use-theme";
import { MoonIcon } from "@/lib/assets/icons/MoonIcon";
import { SunIcon } from "@/lib/assets/icons/SunIcon";

export const ThemeSwitch = () => {
  const { isDark, setTheme, ready } = useTheme();

  if (!ready) {
    return <Switch isDisabled aria-label="Cargando tema" />;
  }

  return (
    <Switch
      aria-label={isDark ? "Usar tema claro" : "Usar tema oscuro"}
      classNames={{
        wrapper:
          "group-data-[selected=true]:!bg-[var(--app-space-green-portal)]",
      }}
      color="secondary"
      isSelected={isDark}
      size="lg"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
      onValueChange={(dark) => setTheme(dark ? "dark" : "light")}
    />
  );
};
