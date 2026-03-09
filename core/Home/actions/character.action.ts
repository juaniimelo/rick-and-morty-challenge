"use server";

import type { CharactersState } from "@/core/Home/context/characters-state.type";

import { CharacterService } from "@/lib/services/character/character.service";

export async function getCharacters(
  page: number = 1,
  name: string = "",
): Promise<CharactersState> {
  return CharacterService.getCharacters({ page, name });
}
