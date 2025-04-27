import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Simulate sending a message
    return NextResponse.json({ message: "Fluvio message simulation success!" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
