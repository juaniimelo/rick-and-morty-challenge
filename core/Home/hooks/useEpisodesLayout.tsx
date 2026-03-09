"use client";

import { useState } from "react";

import { useMainContext } from "../context/MainContext";
import { getSharedEpisodes } from "../utils/episode.utils";

export type DrawerSlot = "1" | "shared" | "2";

export const useEpisodesLayout = () => {
  const [openDrawer, setOpenDrawer] = useState<DrawerSlot | null>(null);
  const { selectedCharacter1, selectedCharacter2 } = useMainContext();

  const episodes1 = selectedCharacter1?.episode ?? [];
  const episodes2 = selectedCharacter2?.episode ?? [];
  const sharedEpisodes = getSharedEpisodes(episodes1, episodes2);

  const drawerTitle: string | null =
    openDrawer === "1"
      ? (selectedCharacter1?.name ?? null)
      : openDrawer === "shared"
        ? "Episodios compartidos"
        : openDrawer === "2"
          ? (selectedCharacter2?.name ?? null)
          : null;

  return {
    sharedEpisodes,
    selectedCharacter1,
    selectedCharacter2,
    episodes1,
    episodes2,
    drawerTitle,
    openDrawer,
    setOpenDrawer,
  };
};
