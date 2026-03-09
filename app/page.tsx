import { Suspense } from "react";

import { HomeLayout } from "@/core/Home/layout/HomeLayout";
import { HomeLayoutSkeleton } from "@/core/Home/layout/HomeLayoutSkeleton";

export default async function Home() {
  return (
    <Suspense fallback={<HomeLayoutSkeleton />}>
      <HomeLayout />
    </Suspense>
  );
}
