export const MainSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full flex flex-col items-center gap-10 px-10 md:px-20 py-5">
      {children}
    </section>
  );
};
