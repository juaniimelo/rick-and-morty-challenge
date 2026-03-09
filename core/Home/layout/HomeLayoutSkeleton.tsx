import {
  MainContent,
  HeaderMenu,
  Footer,
  MainSection,
  MainArticle,
  TitleText,
  Paragraph,
} from "@/design-system";
import { CharacterListSkeleton } from "../components/CharacterListSkeleton/CharacterListSkeleton";

export const HomeLayoutSkeleton = () => {
  return (
    <MainContent>
      <HeaderMenu />
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
          <div className="w-full flex items-start justify-between gap-20">
            <CharacterListSkeleton />
            <CharacterListSkeleton />
          </div>
        </MainArticle>
      </MainSection>
      <Footer />
    </MainContent>
  );
};
