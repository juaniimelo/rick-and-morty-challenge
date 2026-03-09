import { ModuleFactory } from "@/lib/factories/Module.factory";
import {
  toCharactersPlainResult,
  type CharactersPlainResult,
} from "@/lib/modules/Character";

export interface GetCharactersParams {
  page?: number;
  name?: string;
}

export class CharacterService {
  static async getCharacters({
    page = 1,
    name = "",
  }: GetCharactersParams = {}): Promise<CharactersPlainResult> {
    const factory = await ModuleFactory.create();
    const result = await factory
      .CharacterModuleFactory()
      .getCharacters(page, name);

    return toCharactersPlainResult(result);
  }
}
