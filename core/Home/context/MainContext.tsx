"use client";

import type {
  CharacterPlain,
  CharactersState,
  ListId,
  ListState,
} from "./characters-state.type";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

import { emptyListState } from "./characters-state.type";

import { getCharacters } from "@/core/Home/actions/character.action";

export type SelectedIdsByList = Record<ListId, number | null>;

export interface MainContextValue {
  list1: ListState;
  list2: ListState;
  /** Personaje seleccionado por columna (solo uno por lista), con nombre y episodios */
  selectedCharacter1: CharacterPlain | null;
  selectedCharacter2: CharacterPlain | null;
  /** Ids para marcar la card seleccionada en cada lista */
  selectedIds: SelectedIdsByList;
  setSelectedCharacter: (
    listId: ListId,
    character: CharacterPlain | null,
  ) => void;
  loadList: (listId: ListId, page: number, name: string) => Promise<void>;
  setListPage: (listId: ListId, page: number) => void;
  setListName: (listId: ListId, name: string) => void;
  searchList: (listId: ListId, name: string) => void;
}

const initialState: MainContextValue = {
  list1: emptyListState,
  list2: emptyListState,
  selectedCharacter1: null,
  selectedCharacter2: null,
  selectedIds: { "1": null, "2": null },
  setSelectedCharacter: () => {},
  loadList: async () => {},
  setListPage: () => {},
  setListName: () => {},
  searchList: () => {},
};

export const MainContext = createContext<MainContextValue>(initialState);

interface MainProviderProps {
  children: ReactNode;
  /** Datos iniciales para cada lista (desde el servidor) */
  initialList1?: CharactersState | null;
  initialList2?: CharactersState | null;
}

export function MainProvider({
  children,
  initialList1 = null,
  initialList2 = null,
}: MainProviderProps) {
  const [list1, setList1State] = useState<ListState>({
    ...emptyListState,
    data: initialList1 ?? null,
  });
  const [list2, setList2State] = useState<ListState>({
    ...emptyListState,
    data: initialList2 ?? null,
  });

  const [selectedCharacter1, setSelectedCharacter1] =
    useState<CharacterPlain | null>(null);
  const [selectedCharacter2, setSelectedCharacter2] =
    useState<CharacterPlain | null>(null);

  const setSelectedCharacter = useCallback(
    (listId: ListId, character: CharacterPlain | null) => {
      if (listId === "1") setSelectedCharacter1(character);
      else setSelectedCharacter2(character);
    },
    [],
  );

  const selectedIds: SelectedIdsByList = {
    "1": selectedCharacter1?.id ?? null,
    "2": selectedCharacter2?.id ?? null,
  };

  const loadList = useCallback(
    async (listId: ListId, page: number, name: string) => {
      const setState = listId === "1" ? setList1State : setList2State;

      setState((prev) => ({ ...prev, isLoading: true }));
      try {
        const data = await getCharacters(page, name);

        setState((prev) => ({
          ...prev,
          data,
          page,
          name,
          isLoading: false,
        }));
      } catch {
        setState((prev) => ({ ...prev, isLoading: false }));
      }
    },
    [],
  );

  const setListPage = useCallback(
    (listId: ListId, page: number) => {
      const list = listId === "1" ? list1 : list2;

      loadList(listId, page, list.name);
    },
    [list1, list2, loadList],
  );

  const setListName = useCallback((listId: ListId, name: string) => {
    const setState = listId === "1" ? setList1State : setList2State;

    setState((prev) => ({ ...prev, name }));
  }, []);

  const searchList = useCallback(
    (listId: ListId, name: string) => {
      loadList(listId, 1, name);
    },
    [loadList],
  );

  const value: MainContextValue = {
    list1,
    list2,
    selectedCharacter1,
    selectedCharacter2,
    selectedIds,
    setSelectedCharacter,
    loadList,
    setListPage,
    setListName,
    searchList,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}

export function useMainContext(): MainContextValue {
  const context = useContext(MainContext);

  if (!context) {
    throw new Error("useMainContext debe usarse dentro de MainProvider");
  }

  return context;
}
