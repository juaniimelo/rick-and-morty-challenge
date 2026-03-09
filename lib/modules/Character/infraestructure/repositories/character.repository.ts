import type { ApolloClient } from "@apollo/client";
import type { GetCharacterResultDto } from "../dto/GetCharacterResult.dto";

import { GET_ALL_CHARACTERS } from "@/lib/graphql/queries";

export class CharacterRepository {
  constructor(private readonly client: ApolloClient) {}

  async getAllCharacters(
    page: number,
    name: string,
  ): Promise<GetCharacterResultDto> {
    const { data } = await this.client.query<{
      characters: GetCharacterResultDto;
    }>({
      query: GET_ALL_CHARACTERS,
      variables: { page, name },
      fetchPolicy: "cache-first",
    });

    if (!data) throw new Error("Characters query returned no data");

    return data.characters || [];
  }
}
