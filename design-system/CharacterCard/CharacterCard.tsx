"use client";

import Image from "next/image";

import { TitleText } from "../TitleText/TitleText";
import { CharacterBadge } from "../CharacterBadge/CharacterBadge";
import { ElectricBorder } from "../ElectricBorder/ElectricBorder";

import { CharacterPlain } from "@/core/Home/context/characters-state.type";

interface CharacterCardProps {
  character: CharacterPlain;
  isSelected?: boolean;
  isDisabled?: boolean;
  onSelect?: () => void;
}

const cardBaseClasses =
  "w-full min-w-0 flex items-center justify-between gap-3 sm:gap-5 rounded-lg p-4 sm:p-5 shadow-xs min-h-[72px] sm:min-h-[100px]";

const cardInteractiveClasses =
  "transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-md cursor-pointer active:scale-[0.98]";

const cardDisabledClasses =
  "opacity-55 cursor-not-allowed grayscale pointer-events-none select-none";

export const CharacterCard = ({
  character,
  isSelected = false,
  isDisabled = false,
  onSelect,
}: CharacterCardProps) => {
  const content = (
    <>
      <div className="w-14 h-14 sm:w-[80px] sm:h-[80px] rounded-md shrink-0 overflow-hidden">
        <Image
          alt={character.name}
          className="w-full h-auto object-cover transition-transform duration-200 ease-out scale-100 group-hover:scale-110"
          height={80}
          src={character.image}
          width={80}
        />
      </div>
      <div className="w-full flex flex-col items-start justify-between flex-1 gap-0 min-w-0 overflow-hidden">
        <TitleText
          as="h4"
          className="w-full max-w-full truncate text-app-character-card-text-color text-sm sm:text-md"
          size="md"
        >
          {character.name}
        </TitleText>
        <CharacterBadge species={character.species} status={character.status} />
      </div>
    </>
  );

  const bgClass =
    character.status === "Alive"
      ? "bg-app-character-card-bg-color"
      : "bg-app-character-card-bg-dead-color";

  const cardInner = (
    <div className={`group ${cardBaseClasses} ${bgClass}`}>{content}</div>
  );

  if (isDisabled) {
    return (
      <div
        aria-disabled="true"
        className="w-full min-w-0"
        title="Ya seleccionado en la otra lista"
      >
        <div
          className={`${cardBaseClasses} border border-app-character-card-border-color ${bgClass} ${cardDisabledClasses}`}
        >
          {content}
        </div>
      </div>
    );
  }

  if (isSelected) {
    return (
      <div
        className="w-full min-w-0"
        role={onSelect ? "button" : undefined}
        tabIndex={onSelect ? 0 : undefined}
        onClick={onSelect}
        onKeyDown={
          onSelect
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelect();
                }
              }
            : undefined
        }
      >
        <ElectricBorder
          chaos={0.12}
          className=""
          color="#7df9ff"
          speed={1}
          style={{ borderRadius: 16 }}
        >
          {cardInner}
        </ElectricBorder>
      </div>
    );
  }

  return (
    <div
      className={`group ${cardBaseClasses} ${cardInteractiveClasses} border border-app-character-card-border-color ${bgClass}`}
      role={onSelect ? "button" : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onClick={onSelect}
      onKeyDown={
        onSelect
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelect();
              }
            }
          : undefined
      }
    >
      {content}
    </div>
  );
};
