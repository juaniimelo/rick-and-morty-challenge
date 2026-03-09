import type { EpisodePlain } from "../context/characters-state.type";

import { describe, it, expect } from "vitest";

import { getSharedEpisodes } from "./episode.utils";

describe("getSharedEpisodes", () => {
  const ep1: EpisodePlain = {
    id: 1,
    name: "Pilot",
    episode: "S01E01",
    air_date: "2013-12-02",
  };
  const ep2: EpisodePlain = {
    id: 2,
    name: "Lawnmower Dog",
    episode: "S01E02",
    air_date: "2013-12-09",
  };
  const ep3: EpisodePlain = {
    id: 3,
    name: "Anatomy Park",
    episode: "S01E03",
    air_date: "2013-12-16",
  };

  it("devuelve episodios que están en ambas listas", () => {
    const list1 = [ep1, ep2];
    const list2 = [ep2, ep3];
    const result = getSharedEpisodes(list1, list2);

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(2);
    expect(result[0].name).toBe("Lawnmower Dog");
  });

  it("devuelve array vacío cuando no hay episodios compartidos", () => {
    const list1 = [ep1];
    const list2 = [ep2, ep3];
    const result = getSharedEpisodes(list1, list2);

    expect(result).toHaveLength(0);
  });

  it("devuelve todos cuando las listas son iguales", () => {
    const list = [ep1, ep2];
    const result = getSharedEpisodes(list, list);

    expect(result).toHaveLength(2);
    expect(result.map((e) => e.id)).toEqual([1, 2]);
  });

  it("mantiene orden de la primera lista", () => {
    const list1 = [ep3, ep1, ep2];
    const list2 = [ep1, ep3];
    const result = getSharedEpisodes(list1, list2);

    expect(result.map((e) => e.id)).toEqual([3, 1]);
  });
});
