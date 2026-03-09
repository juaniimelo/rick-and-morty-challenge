import { Suspense } from "react";
import {
  MainSection,
  MainArticle,
  TitleText,
  Paragraph,
} from "@/design-system";

import { CharacterList } from "../components/CharactersList/CharacterList";
import { CharacterListSkeleton } from "../components/CharacterListSkeleton/CharacterListSkeleton";

const ListsFallback = () => (
  <div className="w-full flex items-start justify-between gap-20">
    <CharacterListSkeleton />
    <CharacterListSkeleton />
  </div>
);

export const CharactersLayout = () => {
  return (
    <MainSection>
      <MainArticle>
        <div className="flex flex-col items-center gap-2">
          <TitleText as="h1" size="2xl">
            Compará los personajes de la serie
          </TitleText>
          <Paragraph as="p" size="md">
            Selecciona dos personajes para comparar sus características.
          </Paragraph>
        </div>
        <Suspense fallback={<ListsFallback />}>
          <div className="w-full flex items-start justify-between gap-20">
            <CharacterList listId="1" title="Lista de personajes #1" />
            <CharacterList listId="2" title="Lista de personajes #2" />
          </div>
        </Suspense>
      </MainArticle>
    </MainSection>
  );
};
