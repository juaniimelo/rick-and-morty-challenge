export const MainSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full flex flex-col items-center gap-8 sm:gap-10 px-4 sm:px-6 md:px-10 lg:px-20 py-4 sm:py-5">
      {children}
    </section>
  );
};
