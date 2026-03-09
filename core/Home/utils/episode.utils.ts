import type { EpisodePlain } from "../context/characters-state.type";

export const getSharedEpisodes = (
  episodes1: EpisodePlain[],
  episodes2: EpisodePlain[],
): EpisodePlain[] => {
  const ids2 = new Set(episodes2.map((e) => e.id));

  return episodes1.filter((e) => ids2.has(e.id));
};
