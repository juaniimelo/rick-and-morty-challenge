import type { ApolloClient } from "@apollo/client";

import { GetAllCharactersUseCase } from "../application/get-all-characters.uc";

import { CharacterRepository } from "./repositories/character.repository";
import { CharacterAdapter } from "./adapters/character.adapter";

export class CharacterModule {
  constructor(private readonly apolloClient: ApolloClient) {}

  private getGetAllCharactersUseCase(): GetAllCharactersUseCase {
    const repository = new CharacterRepository(this.apolloClient);
    const adapter = new CharacterAdapter(repository);

    return new GetAllCharactersUseCase(adapter);
  }

  getCharacters(page: number = 1, name: string = "") {
    return this.getGetAllCharactersUseCase().execute(page, name);
  }
}
