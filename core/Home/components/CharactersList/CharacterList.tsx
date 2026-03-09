"use client";

import type { ListId } from "../../context/characters-state.type";

import { useCharacterList } from "../../hooks/useCharacterList";
import { CharacterListSkeleton } from "../CharacterListSkeleton/CharacterListSkeleton";

import {
  TitleText,
  InputText,
  CharacterCard,
  CharacterPaginator,
} from "@/design-system";
import { SearchIcon } from "@/lib/assets/icons/SearchIcon";

interface CharacterListProps {
  listId: ListId;
  title: string;
  onSelectionChange?: () => void;
}

export const CharacterList = ({
  listId,
  title,
  onSelectionChange,
}: CharacterListProps) => {
  const {
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
  } = useCharacterList({ listId });

  if (list.isLoading && characters.length === 0) {
    return (
      <div className="w-full min-w-0 flex flex-col items-start gap-4 sm:gap-5">
        <TitleText
          as="h3"
          className="text-app-title-section-color uppercase text-base sm:text-lg"
          size="lg"
        >
          {title}
        </TitleText>
        <CharacterListSkeleton />
      </div>
    );
  }

  return (
    <div className="w-full min-w-0 flex flex-col items-start gap-4 sm:gap-5">
      <TitleText
        as="h3"
        className="text-app-title-section-color uppercase text-base sm:text-lg"
        size="lg"
      >
        {title}
      </TitleText>
      <div className="w-full flex flex-col items-center justify-between gap-4 sm:gap-5">
        <InputText
          icon={
            <SearchIcon className="text-app-text-gray-light w-5 h-5 pointer-events-none shrink-0" />
          }
          placeholder="Buscar personaje"
          value={inputValue}
          onValueChange={handleSearch}
        />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {characters.map((character) => {
            const isDisabled = character.id === selectedIdInOtherList;

            return (
              <CharacterCard
                key={character.id}
                character={character}
                isDisabled={isDisabled}
                isSelected={character.id === selectedId}
                onSelect={
                  isDisabled
                    ? undefined
                    : () => {
                        setSelectedCharacter(
                          listId,
                          character.id === selectedId ? null : character,
                        );
                        onSelectionChange?.();
                      }
                }
              />
            );
          })}
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
