export interface CharacterInfoPlain {
  count: number;
  pages: number;
  next: number;
  prev: number;
}

export interface EpisodePlain {
  id: number;
  name: string;
  episode: string;
  air_date: string;
}

export interface CharacterPlain {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  episode: EpisodePlain[];
}

export interface CharactersState {
  info: CharacterInfoPlain;
  results: CharacterPlain[];
}

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
