"use client";

import { Suspense } from "react";
import Image from "next/image";
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@heroui/react";

import { CharacterList } from "../components/CharactersList/CharacterList";
import { ListLoading } from "../components/ListLoading/ListLoading";
import { useCharacterLayout } from "../hooks/useCharacterLayout";

import {
  MainSection,
  MainArticle,
  TitleText,
  Paragraph,
} from "@/design-system";

export const CharactersLayout = () => {
  const {
    drawerTitle,
    selectedCharacter1,
    selectedCharacter2,
    listDrawer,
    setListDrawer,
  } = useCharacterLayout();

  return (
    <MainSection>
      <MainArticle>
        <div className="flex flex-col items-center gap-2 text-center px-2 sm:px-0">
          <TitleText as="h1" className="text-xl sm:text-2xl" size="2xl">
            Compará los personajes de la serie
          </TitleText>
          <Paragraph as="p" className="text-sm sm:text-base" size="md">
            Selecciona dos personajes para comparar sus características.
          </Paragraph>
        </div>
        <Suspense fallback={<ListLoading />}>
          <div className="hidden lg:flex w-full flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-12 xl:gap-20 min-w-0">
            <div className="w-full min-w-0 lg:flex-1">
              <CharacterList listId="1" title="Lista de personajes #1" />
            </div>
            <div className="w-full min-w-0 lg:flex-1">
              <CharacterList listId="2" title="Lista de personajes #2" />
            </div>
          </div>
          <div className="lg:hidden w-full flex flex-col gap-4">
            <Button
              className="w-full justify-start gap-3 h-14 px-4 text-left rounded-lg border"
              startContent={
                selectedCharacter1 ? (
                  <span className="w-9 h-9 rounded-full overflow-hidden shrink-0 bg-app-character-card-border-color">
                    <Image
                      alt={selectedCharacter1.name}
                      className="w-full h-full object-cover"
                      height={36}
                      src={selectedCharacter1.image}
                      width={36}
                    />
                  </span>
                ) : (
                  <span className="w-9 h-9 rounded-full shrink-0 bg-app-button-bg-color-avatar" />
                )
              }
              variant="bordered"
              onPress={() => setListDrawer("1")}
            >
              <span className="flex flex-col items-start gap-0.5">
                <span className="font-semibold">Lista de personajes #1</span>
                {selectedCharacter1 && (
                  <span className="text-sm font-normal text-app-text-gray-light">
                    {selectedCharacter1.name}
                  </span>
                )}
              </span>
            </Button>
            <Button
              className="w-full justify-start gap-3 h-14 px-4 text-left rounded-lg border"
              startContent={
                selectedCharacter2 ? (
                  <span className="w-9 h-9 rounded-full overflow-hidden shrink-0 bg-app-character-card-border-color">
                    <Image
                      alt={selectedCharacter2.name}
                      className="w-full h-full object-cover"
                      height={36}
                      src={selectedCharacter2.image}
                      width={36}
                    />
                  </span>
                ) : (
                  <span className="w-9 h-9 rounded-full shrink-0 bg-app-button-bg-color-avatar" />
                )
              }
              variant="bordered"
              onPress={() => setListDrawer("2")}
            >
              <span className="flex flex-col items-start gap-0.5">
                <span className="font-semibold">Lista de personajes #2</span>
                {selectedCharacter2 && (
                  <span className="text-sm font-normal text-app-text-gray-light">
                    {selectedCharacter2.name}
                  </span>
                )}
              </span>
            </Button>
          </div>

          <Drawer
            classNames={{
              base: "max-h-[90vh] rounded-t-2xl",
              body: "overflow-y-auto pb-6",
            }}
            isOpen={listDrawer !== null}
            placement="bottom"
            size="full"
            onOpenChange={(open) => !open && setListDrawer(null)}
          >
            <DrawerContent>
              <DrawerHeader className="border-b border-app-character-card-border-color">
                {drawerTitle}
              </DrawerHeader>
              <DrawerBody>
                {listDrawer === "1" && (
                  <CharacterList
                    listId="1"
                    title="Lista de personajes #1"
                    onSelectionChange={() => setListDrawer(null)}
                  />
                )}
                {listDrawer === "2" && (
                  <CharacterList
                    listId="2"
                    title="Lista de personajes #2"
                    onSelectionChange={() => setListDrawer(null)}
                  />
                )}
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Suspense>
      </MainArticle>
    </MainSection>
  );
};
