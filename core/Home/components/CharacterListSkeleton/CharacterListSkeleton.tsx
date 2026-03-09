import { Skeleton } from "@heroui/skeleton";

const CARD_COUNT = 8;

const cardWrapperClass =
  "w-full min-w-0 flex items-center gap-3 sm:gap-5 rounded-lg p-4 sm:p-5 border border-app-character-card-border-color bg-app-character-card-bg-color min-h-[72px] sm:min-h-[100px]";

const CharacterCardSkeleton = () => (
  <div className={cardWrapperClass}>
    <Skeleton className="w-14 h-14 sm:w-[80px] sm:h-[80px] rounded-md shrink-0" />
    <div className="flex-1 flex flex-col gap-0 min-w-0 overflow-hidden">
      <Skeleton className="h-5 w-full max-w-[140px] sm:max-w-[180px] rounded" />
      <Skeleton className="h-4 w-20 sm:w-24 rounded mt-1" />
    </div>
  </div>
);

const ListTitleSkeleton = () => (
  <Skeleton className="h-8 w-40 sm:w-48 rounded" />
);

const SearchInputSkeleton = () => (
  <Skeleton className="w-full h-10 rounded-lg" />
);

const PaginatorSkeleton = () => (
  <div className="w-full flex flex-wrap items-center justify-between gap-2 mt-4 sm:mt-5">
    <Skeleton className="h-9 w-16 sm:w-20 rounded-md shrink-0" />
    <Skeleton className="h-5 w-20 sm:w-24 rounded shrink-0" />
    <Skeleton className="h-9 w-16 sm:w-20 rounded-md shrink-0" />
  </div>
);

export const CharacterListSkeleton = () => (
  <div className="w-full min-w-0 flex flex-col items-start gap-4 sm:gap-5">
    <ListTitleSkeleton />
    <div className="w-full flex flex-col items-center justify-between gap-4 sm:gap-5">
      <SearchInputSkeleton />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {Array.from({ length: CARD_COUNT }, (_, i) => (
          <CharacterCardSkeleton key={i} />
        ))}
      </div>
      <PaginatorSkeleton />
    </div>
  </div>
);
