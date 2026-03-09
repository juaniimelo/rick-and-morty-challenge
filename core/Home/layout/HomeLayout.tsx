"use client";

import { MainContent, HeaderMenu, Separator, Footer } from "@/design-system";

import { useMainContext } from "../context/MainContext";

import { CharactersLayout } from "./CharactersLayout";
import { EpisodesLayout } from "./EpisodesLayout";


export const HomeLayout = () => {
  const { selectedCharacter1, selectedCharacter2 } = useMainContext();
  const canCompare = Boolean(selectedCharacter1 && selectedCharacter2);

  return (
    <MainContent>
      <HeaderMenu />
      <CharactersLayout />
      {canCompare && (
        <>
          <Separator />
          <EpisodesLayout />
        </>
      )}
      <Footer />
    </MainContent>
  );
};
