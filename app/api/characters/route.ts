import { NextRequest, NextResponse } from "next/server";

import { CharacterService } from "@/lib/services/character/character.service";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const pageParam = searchParams.get("page") ?? "1";
  const name = searchParams.get("name") ?? "";

  const page = Number.isNaN(Number(pageParam)) ? 1 : Number(pageParam);

  const result = await CharacterService.getCharacters({ page, name });

  return NextResponse.json(result);
}
