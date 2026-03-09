import { createElement, type ElementType, type HTMLAttributes } from "react";
import { cn } from "@heroui/theme";

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
} as const;

export type TitleLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type TitleSize = keyof typeof sizeClasses;

export interface TitleTextProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Etiqueta de encabezado a renderizar */
  as?: TitleLevel;
  /** Tamaño visual del texto */
  size?: TitleSize;
  children: React.ReactNode;
}

const defaultLevel: TitleLevel = "h1";
const defaultSize: TitleSize = "lg";

export function TitleText({
  as = defaultLevel,
  size = defaultSize,
  className,
  children,
  ...rest
}: TitleTextProps) {
  const Component = as as ElementType;

  return createElement(
    Component,
    {
      className: cn("font-bold tracking-tight", sizeClasses[size], className),
      ...rest,
    },
    children,
  );
}
