import type { CharacterDto } from "../dto/Character.dto";
import type { GetCharacterResultDto } from "../dto/GetCharacterResult.dto";

import { Character } from "../../domain/entities/character.entity";
import { CharacterInfo } from "../../domain/entities/character-info.entity";

export class CharacterMapper {
  static fromDto(dto: GetCharacterResultDto): {
    info: CharacterInfo;
    results: Character[];
  } {
    return {
      info: new CharacterInfo({
        count: dto.info.count,
        pages: dto.info.pages,
        next: dto.info.next ?? 0,
        prev: dto.info.prev ?? 0,
      }),
      results: dto.results.map((item: CharacterDto) =>
        CharacterMapper.toCharacterEntity(item),
      ),
    };
  }

  static toCharacterEntity(dto: CharacterDto): Character {
    return new Character({
      id: dto.id,
      name: dto.name,
      image: dto.image,
      status: dto.status,
      species: dto.species,
      episode: Array.isArray(dto.episode)
        ? dto.episode
        : dto.episode
          ? [dto.episode]
          : [],
    });
  }
}
