import { Character } from "../entities/character.entity";
import { CharacterInfo } from "../entities/character-info.entity";

export interface GetCharactersResult {
  info: CharacterInfo;
  results: Character[];
}
