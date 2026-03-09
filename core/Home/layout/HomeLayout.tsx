import { CharactersLayout } from "./CharactersLayout";
import { EpisodesLayout } from "./EpisodesLayout";

import { MainContent, HeaderMenu, Footer } from "@/design-system";
import { getCharacters } from "@/core/Home/actions/character.action";
import { MainProvider } from "@/core/Home/context/MainContext";

export const HomeLayout = async () => {
  const [initialList1, initialList2] = await Promise.all([
    getCharacters(1, ""),
    getCharacters(1, ""),
  ]);

  return (
    <MainProvider initialList1={initialList1} initialList2={initialList2}>
      <MainContent>
        <HeaderMenu />
        <CharactersLayout />
        <EpisodesLayout />
        <Footer />
      </MainContent>
    </MainProvider>
  );
};
