import { createElement, type ElementType, type HTMLAttributes } from "react";
import { cn } from "@heroui/theme";

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
} as const;

export type ParagraphAs = "p" | "span" | "div";
export type ParagraphSize = keyof typeof sizeClasses;

export interface ParagraphProps extends HTMLAttributes<HTMLElement> {
  /** Elemento a renderizar */
  as?: ParagraphAs;
  /** Tamaño del texto */
  size?: ParagraphSize;
  children: React.ReactNode;
}

const defaultAs: ParagraphAs = "p";
const defaultSize: ParagraphSize = "md";

export function Paragraph({
  as = defaultAs,
  size = defaultSize,
  className,
  children,
  ...rest
}: ParagraphProps) {
  const Component = as as ElementType;

  return createElement(
    Component,
    {
      className: cn(
        "text-center text-app-text-gray-light tracking-tight",
        sizeClasses[size],
        className,
      ),
      ...rest,
    },
    children,
  );
}
