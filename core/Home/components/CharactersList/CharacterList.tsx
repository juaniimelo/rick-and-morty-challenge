"use client";

import type { ListId } from "../../context/characters-state.type";

import { useCallback, useState } from "react";

import { useMainContext } from "../../context/MainContext";

import {
  TitleText,
  InputText,
  CharacterCard,
  CharacterPaginator,
} from "@/design-system";
import { SearchIcon } from "@/lib/assets/icons/SearchIcon";
import { CharacterListSkeleton } from "../CharacterListSkeleton/CharacterListSkeleton";

const defaultInfo = { count: 0, pages: 0, next: 0, prev: 0 };

interface CharacterListProps {
  listId: ListId;
  title: string;
}

export const CharacterList = ({ listId, title }: CharacterListProps) => {
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
  const [inputValue, setInputValue] = useState(list.name);

  const handleSearch = useCallback(
    (value: string) => {
      setInputValue(value);
      if (value.length >= 5) {
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

  if (list.isLoading && characters.length === 0) {
    return (
      <div className="w-full flex flex-col items-start gap-5">
        <TitleText
          as="h3"
          className="text-app-title-section-color uppercase"
          size="lg"
        >
          {title}
        </TitleText>
        <CharacterListSkeleton />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-start gap-5">
      <TitleText
        as="h3"
        className="text-app-title-section-color uppercase"
        size="lg"
      >
        {title}
      </TitleText>
      <div className="w-full flex flex-col items-center justify-between gap-5">
        <InputText
          icon={
            <SearchIcon className="text-app-text-gray-light w-5 h-5 pointer-events-none shrink-0" />
          }
          placeholder="Buscar personaje"
          value={inputValue}
          onValueChange={handleSearch}
        />
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              isSelected={character.id === selectedId}
              onSelect={() =>
                setSelectedCharacter(
                  listId,
                  character.id === selectedId ? null : character,
                )
              }
            />
          ))}
        </div>
        <CharacterPaginator
          info={info}
          isLoading={list.isLoading}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </div>
    </div>
  );
};
