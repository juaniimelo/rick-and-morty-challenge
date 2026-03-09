import { TitleText, EpisodesBadge } from "@/design-system";

interface SelectedCharacterCardProps {
  title: string;
  episodesCount: number;
  isShared?: boolean;
}

export const SelectedCharacterCard = ({
  title,
  episodesCount,
  isShared,
}: SelectedCharacterCardProps) => {
  return (
    <div
      className={`
            w-full flex items-center justify-between gap-2 px-4 py-4 rounded-lg
            ${isShared ? "bg-app-character-card-bg-shared-color" : "bg-app-character-card-bg-episodes-color"}
        `}
    >
      <div className="flex items-center gap-2">
        <span
          className={`w-3 h-3 bg-app-space-green-portal rounded-full ${isShared ? "bg-app-episodes-badge-shared-color" : "bg-app-space-green-portal"}`}
        />
        <TitleText
          as="h4"
          className={`${isShared ? "text-app-episodes-badge-shared-text-color" : "text-app-title-section-color"}`}
          size="md"
        >
          {title}
        </TitleText>
      </div>
      <EpisodesBadge episodesCount={episodesCount} isShared={isShared} />
    </div>
  );
};
