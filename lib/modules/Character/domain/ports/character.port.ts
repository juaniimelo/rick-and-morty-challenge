import { GetCharactersResult } from "../types/character-result.type";

export interface CharacterPort {
  getCharacters(page: number, name: string): Promise<GetCharactersResult>;
}
