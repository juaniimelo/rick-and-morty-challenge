import { FileQuestion } from "lucide-react";
import { TitleText, Paragraph, ActionItem } from "@/design-system";
import { PUBLIC_PATHS } from "@/lib/routing/paths";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-app-background text-app-foreground px-6 py-12">
      <div className="flex flex-col items-center justify-center gap-6 max-w-md text-center">
        <div
          className="flex items-center justify-center w-16 h-16 rounded-full bg-app-character-card-bg-color border border-app-border-gray-light"
          aria-hidden
        >
          <FileQuestion
            className="w-8 h-8 text-app-space-green-portal"
            strokeWidth={2}
          />
        </div>

        <TitleText as="h1" size="2xl" className="text-app-title-section">
          404 · Página no encontrada
        </TitleText>

        <Paragraph as="p" size="md" className="text-balance">
          La página que buscás no existe o fue movida. Volvé al inicio para
          seguir navegando.
        </Paragraph>

        <ActionItem as="a" href={PUBLIC_PATHS.HOME} size="md">
          Volver al inicio
        </ActionItem>
      </div>
    </div>
  );
}
