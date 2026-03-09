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
  useMemo,
  type ReactNode,
} from "react";

import { getCharactersClient } from "../services/characterClient.api";

import { emptyListState } from "./characters-state.type";

export type SelectedIdsByList = Record<ListId, number | null>;

export interface MainContextValue {
  list1: ListState;
  list2: ListState;
  selectedCharacter1: CharacterPlain | null;
  selectedCharacter2: CharacterPlain | null;
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
  initialList1?: CharactersState | null;
  initialList2?: CharactersState | null;
}

function useCharactersListsState(
  initialList1: CharactersState | null,
  initialList2: CharactersState | null,
) {
  const [list1, setList1State] = useState<ListState>({
    ...emptyListState,
    data: initialList1 ?? null,
  });

  const [list2, setList2State] = useState<ListState>({
    ...emptyListState,
    data: initialList2 ?? null,
  });

  const loadList = useCallback(
    async (listId: ListId, page: number, name: string) => {
      const setState = listId === "1" ? setList1State : setList2State;

      setState((prev) => ({ ...prev, isLoading: true }));

      try {
        const data = await getCharactersClient({ page, name });

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

  return {
    list1,
    list2,
    loadList,
    setListPage,
    setListName,
    searchList,
  };
}

function useCharacterSelectionState() {
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

  const selectedIds: SelectedIdsByList = useMemo(
    () => ({
      "1": selectedCharacter1?.id ?? null,
      "2": selectedCharacter2?.id ?? null,
    }),
    [selectedCharacter1, selectedCharacter2],
  );

  return {
    selectedCharacter1,
    selectedCharacter2,
    selectedIds,
    setSelectedCharacter,
  };
}

export function MainProvider({
  children,
  initialList1 = null,
  initialList2 = null,
}: MainProviderProps) {
  const listsState = useCharactersListsState(initialList1, initialList2);
  const selectionState = useCharacterSelectionState();

  const value: MainContextValue = {
    ...listsState,
    ...selectionState,
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
