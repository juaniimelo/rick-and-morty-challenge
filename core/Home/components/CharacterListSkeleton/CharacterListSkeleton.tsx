const CARD_COUNT = 4;

export const CharacterListSkeleton = () => {
  return (
    <div className="w-full flex flex-col items-start gap-5">
      <div className="h-8 w-48 rounded bg-app-character-card-border-color/50 animate-pulse" />
      <div className="w-full flex flex-col items-center justify-between gap-5">
        <div className="w-full h-10 rounded-lg bg-app-input-border-color/50 animate-pulse" />
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
          {Array.from({ length: CARD_COUNT }).map((_, i) => (
            <div
              key={i}
              className="w-full max-w-[400px] flex items-center gap-5 rounded-lg p-5 border border-app-character-card-border-color bg-app-character-card-bg-color"
            >
              <div className="w-[80px] h-[80px] rounded-md shrink-0 bg-app-character-card-border-color/50 animate-pulse" />
              <div className="flex-1 flex flex-col gap-2 min-w-0">
                <div className="h-5 w-[180px] rounded bg-app-character-card-border-color/50 animate-pulse" />
                <div className="h-4 w-24 rounded bg-app-character-card-border-color/40 animate-pulse" />
                <div className="h-6 w-20 rounded-md bg-app-character-card-border-color/40 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-between gap-2 mt-5">
          <div className="h-9 w-20 rounded-md bg-app-button-border-color/50 animate-pulse" />
          <div className="h-5 w-24 rounded bg-app-text-gray-light/30 animate-pulse" />
          <div className="h-9 w-20 rounded-md bg-app-button-border-color/50 animate-pulse" />
        </div>
      </div>
    </div>
  );
};
