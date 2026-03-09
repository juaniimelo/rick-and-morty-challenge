import { GetCharactersResult } from "../../domain/types/character-result.type";
import { CharacterPort } from "../../domain/ports/character.port";
import { CharacterRepository } from "../repositories/character.repository";
import { CharacterMapper } from "../mappers/character.mapper";

export class CharacterAdapter implements CharacterPort {
  constructor(private readonly repository: CharacterRepository) {}

  async getCharacters(
    page: number,
    name: string,
  ): Promise<GetCharactersResult> {
    const apiResponse = await this.repository.getAllCharacters(page, name);

    return CharacterMapper.fromDto(apiResponse);
  }
}
