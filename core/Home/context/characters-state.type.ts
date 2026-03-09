import type {
  CharactersPlainResult,
  CharacterEpisodePlain,
  CharacterInfoPlain as DomainCharacterInfoPlain,
} from "@/lib/modules/Character";

export type CharacterInfoPlain = DomainCharacterInfoPlain;
export type EpisodePlain = CharacterEpisodePlain;
export type CharactersState = CharactersPlainResult;
export type CharacterPlain = CharactersPlainResult["results"][number];

export type ListId = "1" | "2";

export interface ListState {
  data: CharactersState | null;
  page: number;
  name: string;
  isLoading: boolean;
}

export const emptyListState: ListState = {
  data: null,
  page: 1,
  name: "",
  isLoading: false,
};
