"use client";

import type { ListId } from "../context/characters-state.type";

import { useState, useCallback } from "react";

import { useMainContext } from "../context/MainContext";

interface UseCharacterListProps {
  listId: ListId;
}

const defaultInfo = { count: 0, pages: 0, next: 0, prev: 0 };

export const useCharacterList = ({ listId }: UseCharacterListProps) => {
  const {
    list1,
    list2,
    selectedIds,
    setSelectedCharacter,
    searchList,
    setListPage,
  } = useMainContext();
  const list = listId === "1" ? list1 : list2;
  const selectedId = selectedIds[listId];
  const selectedIdInOtherList =
    listId === "1" ? selectedIds["2"] : selectedIds["1"];
  const [inputValue, setInputValue] = useState(list.name);

  const handleSearch = useCallback(
    (value: string) => {
      setInputValue(value);
      if (value.length >= 3) {
        searchList(listId, value);
      } else if (value.length === 0) {
        searchList(listId, "");
      }
    },
    [listId, searchList],
  );

  const handlePrevious = useCallback(() => {
    if (list.data?.info?.prev) setListPage(listId, list.data.info.prev);
  }, [listId, list.data?.info?.prev, setListPage]);

  const handleNext = useCallback(() => {
    if (list.data?.info?.next) setListPage(listId, list.data.info.next);
  }, [listId, list.data?.info?.next, setListPage]);

  const characters = list?.data?.results ?? [];
  const info = list?.data?.info ?? defaultInfo;

  return {
    inputValue,
    handleSearch,
    handleNext,
    handlePrevious,
    list,
    selectedId,
    selectedIdInOtherList,
    characters,
    info,
    setSelectedCharacter,
  };
};
