"use server";

import type { CharactersState } from "@/core/Home/context/characters-state.type";

import { ModuleFactory } from "@/lib/factories/Module.factory";

/**
 * Obtener personajes desde una Server Action.
 * Devuelve objetos planos para poder pasarlos a Client Components.
 */
export async function getCharacters(
  page: number = 1,
  name: string = "",
): Promise<CharactersState> {
  const factory = await ModuleFactory.create();
  const result = await factory.getCharacterModule().getCharacters(page, name);

  return {
    info: result.info.serialize(),
    results: result.results.map((c) => c.serialize()),
  };
}
