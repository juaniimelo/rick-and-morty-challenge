import type { ApolloClient } from "@apollo/client";

import { CharacterModule } from "@/lib/modules/Character/infraestructure/character.module";

export class ModuleFactory {
  private readonly apolloClient: ApolloClient;

  private constructor(apolloClient: ApolloClient) {
    this.apolloClient = apolloClient;
  }

  static async create(): Promise<ModuleFactory> {
    const { createApolloClient } = await import(
      "@/lib/apollo/server/apollo.server"
    );
    const apolloClient = await createApolloClient();

    return new ModuleFactory(apolloClient);
  }

  CharacterModuleFactory(): CharacterModule {
    return new CharacterModule(this.apolloClient);
  }
}
