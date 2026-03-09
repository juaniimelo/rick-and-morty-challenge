import { GetCharactersResult } from "../domain/types/character-result.type";
import { CharacterPort } from "../domain/ports/character.port";

export class GetAllCharactersUseCase {
  constructor(private readonly characterPort: CharacterPort) {}

  async execute(
    page: number = 1,
    name: string = "",
  ): Promise<GetCharactersResult> {
    return this.characterPort.getCharacters(page, name);
  }
}
