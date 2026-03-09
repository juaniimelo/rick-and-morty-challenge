import type { ListId } from "../context/characters-state.type";

import { useState } from "react";

import { useMainContext } from "../context/MainContext";

export const useCharacterLayout = () => {
  const { selectedCharacter1, selectedCharacter2 } = useMainContext();
  const [listDrawer, setListDrawer] = useState<ListId | null>(null);

  const drawerTitle =
    listDrawer === "1"
      ? "Lista de personajes #1"
      : listDrawer === "2"
        ? "Lista de personajes #2"
        : "";

  return {
    drawerTitle,
    selectedCharacter1,
    selectedCharacter2,
    listDrawer,
    setListDrawer,
  };
};
