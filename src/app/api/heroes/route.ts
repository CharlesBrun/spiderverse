import { NextResponse } from "next/server";
import { dataMock } from "./mock";

export async function GET() {
  // const res = await fetch(process.env.API_URL);
  // const data = await res.json();

  return NextResponse.json({ dataMock });
}
