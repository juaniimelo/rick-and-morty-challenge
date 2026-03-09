export const MainContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen w-full flex flex-col justify-start overflow-y-scroll">
      {children}
    </main>
  );
};
