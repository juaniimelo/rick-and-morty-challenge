"use client";

import Image from "next/image";

import { TitleText } from "../TitleText/TitleText";
import { CharacterBadge } from "../CharacterBadge/CharacterBadge";
import { EpisodesBadge } from "../EpisodesBadge/EpisodesBadge";
import { ElectricBorder } from "../ElectricBorder/ElectricBorder";

import { CharacterPlain } from "@/core/Home/context/characters-state.type";

interface CharacterCardProps {
  character: CharacterPlain;
  isSelected?: boolean;
  onSelect?: () => void;
}

const cardBaseClasses =
  "w-full max-w-[400px] flex items-center justify-between gap-5 rounded-lg p-5 shadow-xs transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-md cursor-pointer";

export const CharacterCard = ({
  character,
  isSelected = false,
  onSelect,
}: CharacterCardProps) => {
  const content = (
    <>
      <div className="w-[80px] h-[80px] rounded-md shrink-0 overflow-hidden">
        <Image
          alt={character.name}
          className="w-full h-auto object-cover transition-transform duration-200 ease-out scale-100 group-hover:scale-110"
          height={80}
          src={character.image}
          width={80}
        />
      </div>
      <div className="w-full flex flex-col items-start justify-between flex-1 gap-2 min-w-0">
        <TitleText
          as="h4"
          className="w-[200px] truncate text-app-character-card-text-color"
          size="md"
        >
          {character.name}
        </TitleText>
        <CharacterBadge species={character.species} status={character.status} />
        {character.episode?.length ? (
          <EpisodesBadge episodesCount={character.episode.length} />
        ) : null}
      </div>
    </>
  );

  const cardInner = (
    <div
      className={`group ${cardBaseClasses} ${character.status === "Alive" ? "bg-app-character-card-bg-color" : "bg-app-character-card-bg-dead-color"}`}
    >
      {content}
    </div>
  );

  if (isSelected) {
    return (
      <div
        className="w-full max-w-[400px]"
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
      className={`group ${cardBaseClasses} border border-app-character-card-border-color ${character.status === "Alive" ? "bg-app-character-card-bg-color" : "bg-app-character-card-bg-dead-color"}`}
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
