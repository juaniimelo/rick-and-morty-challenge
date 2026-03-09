"use client";

import {
  createElement,
  type ElementType,
  type ButtonHTMLAttributes,
} from "react";
import Link from "next/link";
import { Spinner } from "@heroui/react";
import { cn } from "@heroui/theme";

const sizeClasses = {
  sm: "rounded-md px-3 py-1.5 text-sm gap-1.5",
  md: "rounded-lg px-4 py-2.5 text-base gap-2",
  lg: "rounded-lg p-5 text-lg gap-2",
} as const;

export type ButtonAs = "button" | "a";
export type ButtonSize = keyof typeof sizeClasses;

const baseClasses =
  "inline-flex items-center justify-center font-bold border text-app-button-text-color cursor-pointer bg-app-button-bg-color border-app-button-border-color transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-app-space-green-portal disabled:opacity-50 disabled:pointer-events-none outline-none";

export interface ActionItemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  as?: ButtonAs;
  size?: ButtonSize;
  fullWidth?: boolean;
  href?: string;
  children: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
}

const defaultAs: ButtonAs = "button";
const defaultSize: ButtonSize = "lg";

export function ActionItem({
  as = defaultAs,
  size = defaultSize,
  fullWidth = false,
  isDisabled = false,
  isLoading = false,
  className,
  children,
  href,
  ...rest
}: ActionItemProps) {
  const disabled = isDisabled || isLoading;
  const classNames = cn(
    baseClasses,
    sizeClasses[size],
    fullWidth && "w-full",
    className,
    disabled &&
      "bg-app-button-bg-color-disabled text-app-button-text-color-disabled pointer-events-none border-app-button-border-color-disabled",
  );

  if (as === "a" && href) {
    return createElement(
      Link,
      {
        href,
        className: classNames,
        role: "button",
      },
      isLoading ? (
        <>
          <Spinner className="shrink-0" color="primary" size="sm" />
          {children}
        </>
      ) : (
        children
      ),
    );
  }

  return createElement(
    "button",
    {
      type: "button",
      className: classNames,
      disabled,
      ...(rest as ButtonHTMLAttributes<HTMLButtonElement>),
    },
    isLoading ? (
      <>
        <Spinner className="shrink-0" color="primary" size="sm" />
        {children}
      </>
    ) : (
      children
    ),
  );
}
