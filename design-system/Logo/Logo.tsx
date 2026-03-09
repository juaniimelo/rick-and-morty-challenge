"use client";

import Link from "next/link";
import { Gamepad } from "lucide-react";

import { playpenSansThai } from "@/config/fonts";
import { PUBLIC_PATHS } from "@/lib/routing/paths";

export const Logo = () => {
  return (
    <Link
      className={`${playpenSansThai.className} flex items-center gap-2`}
      href={PUBLIC_PATHS.HOME}
    >
      <div className="w-10 h-10 bg-app-space-green-portal border border-app-space-green-portal rounded-full flex items-center justify-center">
        <Gamepad className="w-6 h-6 text-white" />
      </div>
      <span className="text-2xl font-bold">
        Rick & Morty{" "}
        <b className="text-app-space-green-portal tracking-[-.8px]">
          Comparador
        </b>
      </span>
    </Link>
  );
};
