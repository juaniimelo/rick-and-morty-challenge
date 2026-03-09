import type { CharacterDto } from "./Character.dto";
import type { CharacterInfoDto } from "./CharacterInfo.dto";

export interface GetCharacterResultDto {
  info: CharacterInfoDto;
  results: CharacterDto[];
}
