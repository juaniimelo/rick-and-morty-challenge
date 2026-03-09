"use client";

import { MainSection, MainArticle, TitleText } from "@/design-system";
import { Tv } from "lucide-react";

import { useMainContext } from "../context/MainContext";
import { SelectedCharacterCard } from "../components/SelectedCharacterCard/SelectedCharacterCard";
import { EpisodeList } from "../components/EpisodeList/EpisodeList";
import { getSharedEpisodes } from "../utils/episode.utils";


export const EpisodesLayout = () => {
  const { selectedCharacter1, selectedCharacter2 } = useMainContext();

  const episodes1 = selectedCharacter1?.episode ?? [];
  const episodes2 = selectedCharacter2?.episode ?? [];
  const sharedEpisodes = getSharedEpisodes(episodes1, episodes2);

  return (
    <MainSection>
      <MainArticle>
        <div className="flex flex-col gap-8 w-full">
          <div className="flex items-center gap-2">
            <Tv className="w-5 h-5 text-app-space-green-portal" />
            <TitleText as="h2" size="2xl">
              Análisis de episodios
            </TitleText>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="w-full flex flex-col gap-5">
              {selectedCharacter1 ? (
                <>
                  <SelectedCharacterCard
                    episodesCount={episodes1.length}
                    title={selectedCharacter1.name}
                  />
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-app-title-section-color uppercase">
                      Lista de episodios
                    </span>
                    <EpisodeList
                      emptyMessage="Sin episodios"
                      episodes={episodes1}
                    />
                  </div>
                </>
              ) : (
                <p className="text-app-text-gray-light text-sm">
                  Seleccioná un personaje de la columna izquierda
                </p>
              )}
            </div>
            <div className="w-full flex flex-col gap-5">
              {selectedCharacter1 && selectedCharacter2 ? (
                <>
                  <SelectedCharacterCard
                    isShared
                    episodesCount={sharedEpisodes.length}
                    title="Episodios compartidos"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-app-title-section-color uppercase">
                      Lista de episodios
                    </span>
                    <EpisodeList
                      emptyMessage="No comparten episodios"
                      episodes={sharedEpisodes}
                    />
                  </div>
                </>
              ) : (
                <p className="text-app-text-gray-light text-sm">
                  Seleccioná un personaje en cada columna para comparar
                </p>
              )}
            </div>
            <div className="w-full flex flex-col gap-5">
              {selectedCharacter2 ? (
                <>
                  <SelectedCharacterCard
                    episodesCount={episodes2.length}
                    title={selectedCharacter2.name}
                  />
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-app-title-section-color uppercase">
                      Lista de episodios
                    </span>
                    <EpisodeList
                      emptyMessage="Sin episodios"
                      episodes={episodes2}
                    />
                  </div>
                </>
              ) : (
                <p className="text-app-text-gray-light text-sm">
                  Seleccioná un personaje de la columna derecha
                </p>
              )}
            </div>
          </div>
        </div>
      </MainArticle>
    </MainSection>
  );
};
