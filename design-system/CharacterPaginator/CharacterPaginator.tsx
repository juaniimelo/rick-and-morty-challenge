import { ActionItem } from "../ActionItem/ActionItem";

import { type CharacterInfoPlain } from "@/core/Home/context/characters-state.type";

interface CharacterPaginatorProps {
  info: CharacterInfoPlain;
  onPrevious: () => void;
  onNext: () => void;
  isLoading?: boolean;
}

export const CharacterPaginator = ({
  info,
  onPrevious,
  onNext,
  isLoading = false,
}: CharacterPaginatorProps) => {
  const currentPage = info.next ? info.next - 1 : info.prev ? info.prev + 1 : 1;

  return (
    <div className="w-full flex items-center justify-between gap-2 mt-5">
      <ActionItem
        as="button"
        isDisabled={info.prev === 0}
        isLoading={isLoading}
        size="sm"
        onClick={onPrevious}
      >
        Anterior
      </ActionItem>
      <span className="text-app-text-gray-light">
        Página {currentPage} de {info.pages}
      </span>
      <ActionItem
        as="button"
        isDisabled={info.next === 0}
        isLoading={isLoading}
        size="sm"
        onClick={onNext}
      >
        Siguiente
      </ActionItem>
    </div>
  );
};
