"use client";

import { AlertCircle } from "lucide-react";
import { TitleText, Paragraph, ActionItem } from "@/design-system";
import { PUBLIC_PATHS } from "@/lib/routing/paths";

export default function Error() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-app-background text-app-foreground px-6 py-12">
      <div className="flex flex-col items-center justify-center gap-6 max-w-md text-center">
        <div
          className="flex items-center justify-center w-16 h-16 rounded-full bg-app-character-card-bg-color border border-app-border-gray-light"
          aria-hidden
        >
          <AlertCircle
            className="w-8 h-8 text-app-space-green-portal"
            strokeWidth={2}
          />
        </div>

        <TitleText as="h1" size="2xl" className="text-app-title-section">
          Algo salió mal
        </TitleText>

        <Paragraph as="p" size="md" className="text-balance">
          Ocurrió un error inesperado. Podés intentar de nuevo o volver al inicio.
        </Paragraph>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
          <ActionItem as="a" href={PUBLIC_PATHS.HOME} size="md">
            Volver al inicio
          </ActionItem>
        </div>
      </div>
    </div>
  );
}
