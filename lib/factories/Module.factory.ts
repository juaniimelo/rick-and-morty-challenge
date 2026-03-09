import type { ApolloClient } from "@apollo/client";

import { CharacterModule } from "@/lib/modules/Character/infraestructure/character.module";

/**
 * Concentrador de módulos. La conexión Apollo se crea dentro de la clase
 * y se usa en todos los módulos.
 */
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

  /** Módulo Character: la “magia” y los atajos de dominio viven en el módulo */
  getCharacterModule(): CharacterModule {
    return new CharacterModule(this.apolloClient);
  }
}
