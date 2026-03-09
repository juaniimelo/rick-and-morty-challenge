"use client";

import { Tv } from "lucide-react";
import { Button } from "@heroui/react";

import { SelectedCharacterCard } from "../components/SelectedCharacterCard/SelectedCharacterCard";
import { EpisodeList } from "../components/EpisodeList/EpisodeList";
import { useEpisodesLayout } from "../hooks/useEpisodesLayout";
import { useHomeLayout } from "../hooks/useHomeLayout";
import { EpisodesDrawer } from "../components/EpisodesDrawer/EpisodesDrawer";

import { Separator } from "@/design-system";
import { MainSection, MainArticle, TitleText } from "@/design-system";

export const EpisodesLayout = () => {
  const { canCompare } = useHomeLayout();
  const {
    sharedEpisodes,
    selectedCharacter1,
    selectedCharacter2,
    episodes1,
    episodes2,
    openDrawer,
    setOpenDrawer,
    drawerTitle,
  } = useEpisodesLayout();

  const drawerContent =
    openDrawer === "1" ? (
      <EpisodeList emptyMessage="Sin episodios" episodes={episodes1} />
    ) : openDrawer === "shared" ? (
      <EpisodeList
        emptyMessage="No comparten episodios"
        episodes={sharedEpisodes}
      />
    ) : openDrawer === "2" ? (
      <EpisodeList emptyMessage="Sin episodios" episodes={episodes2} />
    ) : null;

  if (!canCompare) return null;

  return (
    <>
      <Separator />
      <MainSection>
        <MainArticle>
          <div className="flex flex-col gap-6 sm:gap-8 w-full min-w-0">
            <div className="flex items-center gap-2">
              <Tv className="w-5 h-5 shrink-0 text-app-space-green-portal" />
              <TitleText as="h2" className="text-xl sm:text-2xl" size="2xl">
                Análisis de episodios
              </TitleText>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-3 lg:gap-4 xl:gap-10">
              <div className="w-full flex flex-col gap-5">
                {selectedCharacter1 ? (
                  <>
                    <SelectedCharacterCard
                      episodesCount={episodes1.length}
                      title={selectedCharacter1.name}
                    />
                    <Button
                      className="lg:hidden w-full justify-start gap-2 rounded-lg border"
                      variant="bordered"
                      onPress={() => setOpenDrawer("1")}
                    >
                      Ver episodios
                    </Button>
                    <div className="hidden lg:flex flex-col gap-2">
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
                    <Button
                      className="lg:hidden w-full justify-start gap-2 rounded-lg border"
                      variant="bordered"
                      onPress={() => setOpenDrawer("shared")}
                    >
                      Ver episodios
                    </Button>
                    <div className="hidden lg:flex flex-col gap-2">
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
                    <Button
                      className="lg:hidden w-full justify-start gap-2 rounded-lg border"
                      variant="bordered"
                      onPress={() => setOpenDrawer("2")}
                    >
                      Ver episodios
                    </Button>
                    <div className="hidden lg:flex flex-col gap-2">
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

      <EpisodesDrawer
        drawerTitle={drawerTitle}
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      >
        {drawerContent}
      </EpisodesDrawer>
    </>
  );
};
