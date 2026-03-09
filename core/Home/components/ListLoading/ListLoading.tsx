import { Skeleton } from "@heroui/skeleton";

import { CharacterListSkeleton } from "../CharacterListSkeleton/CharacterListSkeleton";

const ListButtonSkeleton = () => (
  <div className="w-full h-14 px-4 rounded-lg border border-app-character-card-border-color bg-app-character-card-bg-color flex items-center gap-3">
    <Skeleton className="w-9 h-9 rounded-full shrink-0" />
    <div className="flex flex-col gap-1.5 min-w-0 flex-1">
      <Skeleton className="h-4 w-40 sm:w-48 rounded" />
      <Skeleton className="h-3 w-24 rounded" />
    </div>
  </div>
);

export const ListLoading = () => {
  return (
    <>
      {/* Desktop: skeletons de listas completas */}
      <div className="hidden lg:flex w-full flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-12 xl:gap-20">
        <CharacterListSkeleton />
        <CharacterListSkeleton />
      </div>
      {/* Móvil: dos botones skeleton (misma estructura que los botones reales) */}
      <div className="lg:hidden w-full flex flex-col gap-4">
        <ListButtonSkeleton />
        <ListButtonSkeleton />
      </div>
    </>
  );
};
