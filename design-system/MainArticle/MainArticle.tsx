export const MainArticle = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className="w-full flex flex-col items-center gap-8 sm:gap-10 py-6 sm:py-10 max-w-[1600px]">
      {children}
    </article>
  );
};
