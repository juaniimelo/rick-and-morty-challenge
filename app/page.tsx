import { HomeLayout } from "@/core/Home/layout/HomeLayout";
import { getCharacters } from "@/core/Home/actions/character.action";
import { MainProvider } from "@/core/Home/context/MainContext";

export default async function Home() {
  const [initialList1, initialList2] = await Promise.all([
    getCharacters(1, ""),
    getCharacters(1, ""),
  ]);

  return (
    <MainProvider initialList1={initialList1} initialList2={initialList2}>
      <HomeLayout />
    </MainProvider>
  );
}
