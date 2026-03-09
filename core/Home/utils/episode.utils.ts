import type { EpisodePlain } from "../context/characters-state.type";

/**
 * Devuelve los episodios que están en ambas listas (por id).
 */
export function getSharedEpisodes(
  episodes1: EpisodePlain[],
  episodes2: EpisodePlain[],
): EpisodePlain[] {
  const ids2 = new Set(episodes2.map((e) => e.id));

  return episodes1.filter((e) => ids2.has(e.id));
}
