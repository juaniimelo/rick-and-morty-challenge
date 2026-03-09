"use client";

import type { EpisodePlain } from "../../context/characters-state.type";

interface EpisodeListProps {
  episodes: EpisodePlain[];
  emptyMessage?: string;
  className?: string;
}

export const EpisodeList = ({
  episodes,
  emptyMessage = "Ningún episodio",
  className,
}: EpisodeListProps) => {
  if (!episodes.length) {
    return (
      <p className={`text-sm text-app-text-gray-light ${className ?? ""}`}>
        {emptyMessage}
      </p>
    );
  }

  return (
    <ul className={`flex flex-col gap-2 list-none p-0 m-0 ${className ?? ""}`}>
      {episodes.map((ep) => (
        <li
          key={ep.id}
          className="flex flex-col gap-1.5 py-2 px-3 rounded-md bg-app-character-card-bg-color border border-app-character-card-border-color"
        >
          <span
            className="text-sm font-medium text-app-character-card-text-color truncate"
            title={ep.name}
          >
            {ep.name}
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <span
              aria-label={`Episodio ${ep.episode}`}
              className="inline-flex shrink-0 px-2 py-0.5 text-xs font-semibold rounded-md bg-app-episodes-badge-shared-color text-app-episodes-badge-shared-text-color"
            >
              {ep.episode}
            </span>
            <span className="text-xs text-app-text-gray-light">
              {ep.air_date}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};
