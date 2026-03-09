"use client";

import { Input } from "@heroui/react";

interface InputTextProps {
  placeholder: string;
  icon?: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
}

export const InputText = ({
  placeholder,
  icon,
  value,
  onValueChange,
}: InputTextProps) => {
  return (
    <Input
      classNames={{
        input:
          "font-medium text-sm text-app-input-text-color placeholder:text-app-input-placeholder-color",
        inputWrapper: [
          "border-app-border-gray-light",
          "border",
          "bg-app-input-bg-color",
          "border-app-input-border-color",
        ],
      }}
      color="secondary"
      placeholder={placeholder}
      size="md"
      startContent={icon}
      value={value}
      onValueChange={onValueChange}
    />
  );
};
