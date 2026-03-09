import type { Character } from "../entities/character.entity";
import type { CharacterInfo } from "../entities/character-info.entity";

export interface CharacterEpisodePlain {
  id: number;
  name: string;
  episode: string;
  air_date: string;
}

export interface CharacterInfoPlain {
  count: number;
  pages: number;
  next: number;
  prev: number;
}

export interface CharacterPlain {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  episode: CharacterEpisodePlain[];
}

export interface CharactersPlainResult {
  info: CharacterInfoPlain;
  results: CharacterPlain[];
}

export function toCharactersPlainResult(characters: {
  info: CharacterInfo;
  results: Character[];
}): CharactersPlainResult {
  return {
    info: characters.info.serialize(),
    results: characters.results.map((character) => character.serialize()),
  };
}
