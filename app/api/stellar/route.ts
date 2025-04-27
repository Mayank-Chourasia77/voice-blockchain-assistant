import { NextResponse } from "next/server";
import { Keypair } from "stellar-sdk";

export async function GET() {
  try {
    const pair = Keypair.random();
    const publicKey = pair.publicKey();
    const secretKey = pair.secret();

    return NextResponse.json({ publicKey, secretKey }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
