import type { CharactersState } from "../context/characters-state.type";

import { BASE_PATH } from "../utils/constant";

interface GetCharactersParams {
  page: number;
  name: string;
}

export async function getCharactersClient(
  params: GetCharactersParams,
): Promise<CharactersState> {
  const searchParams = new URLSearchParams();

  searchParams.set("page", String(params.page));

  if (params.name) {
    searchParams.set("name", params.name);
  }

  const response = await fetch(`${BASE_PATH}?${searchParams.toString()}`);

  if (!response.ok) {
    throw new Error("Error al cargar los personajes");
  }

  return response.json() as Promise<CharactersState>;
}
