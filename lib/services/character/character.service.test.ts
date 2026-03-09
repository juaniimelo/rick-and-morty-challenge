import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/factories/Module.factory", () => {
  const create = vi.fn();

  return {
    ModuleFactory: {
      create,
    },
  };
});

vi.mock("@/lib/modules/Character", () => {
  const toCharactersPlainResult = vi.fn();

  return {
    toCharactersPlainResult,
  };
});

import { CharacterService } from "./character.service";

import { ModuleFactory } from "@/lib/factories/Module.factory";
import { toCharactersPlainResult } from "@/lib/modules/Character";

const createMock = ModuleFactory.create as unknown as ReturnType<typeof vi.fn>;
const toCharactersPlainResultMock =
  toCharactersPlainResult as unknown as ReturnType<typeof vi.fn>;

let getCharactersMock: ReturnType<typeof vi.fn>;

describe("CharacterService", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    getCharactersMock = vi.fn();

    (createMock as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
      CharacterModuleFactory: () => ({
        getCharacters: getCharactersMock,
      }),
    });
  });

  it("llama al CharacterModule con los parámetros correctos y mapea el resultado plano", async () => {
    const domainResult = { info: { serialize: vi.fn() }, results: [] };
    const plainResult = {
      info: { count: 0, pages: 0, next: 0, prev: 0 },
      results: [],
    };

    getCharactersMock.mockResolvedValue(domainResult);
    toCharactersPlainResultMock.mockReturnValue(plainResult);

    const result = await CharacterService.getCharacters({
      page: 2,
      name: "rick",
    });

    expect(createMock).toHaveBeenCalledTimes(1);
    expect(getCharactersMock).toHaveBeenCalledWith(2, "rick");
    expect(toCharactersPlainResultMock).toHaveBeenCalledWith(domainResult);
    expect(result).toEqual(plainResult);
  });

  it("usa valores por defecto cuando no se pasan parámetros", async () => {
    const domainResult = { info: { serialize: vi.fn() }, results: [] };
    const plainResult = {
      info: { count: 0, pages: 0, next: 0, prev: 0 },
      results: [],
    };

    getCharactersMock.mockResolvedValue(domainResult);
    toCharactersPlainResultMock.mockReturnValue(plainResult);

    const result = await CharacterService.getCharacters();

    expect(getCharactersMock).toHaveBeenCalledWith(1, "");
    expect(result).toEqual(plainResult);
  });
});
