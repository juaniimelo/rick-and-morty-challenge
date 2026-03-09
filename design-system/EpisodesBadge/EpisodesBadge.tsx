interface EpisodesBadgeProps {
  episodesCount: number;
  isShared?: boolean;
}

export const EpisodesBadge = ({
  episodesCount,
  isShared,
}: EpisodesBadgeProps) => {
  return (
    <div
      className={`px-4 py-1 rounded-md bg-app-episodes-badge-bg-color text-app-episodes-badge-text-color ${isShared ? "bg-app-episodes-badge-shared-color" : "bg-app-episodes-badge-bg-color"}`}
    >
      <span
        className={`${isShared ? "text-app-episodes-badge-shared-text-color" : "text-app-episodes-badge-text-color"}`}
      >
        Episodios {episodesCount}
      </span>
    </div>
  );
};
