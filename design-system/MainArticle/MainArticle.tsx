export const MainArticle = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className="w-full flex flex-col items-center gap-10 py-10">
      {children}
    </article>
  );
};
