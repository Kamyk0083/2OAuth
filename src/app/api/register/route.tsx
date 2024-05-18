import User from "../../../../User";
import connect from "../../../../db";
import { NextResponse } from "next/server";

export const revalidate = 1;
export async function POST(request: Request) {
  await connect();
  try {
    const requestBody = await request.text();
    if (!requestBody) {
      return NextResponse.json(
        { error: "Brak danych w żądaniu" },
        { status: 400 }
      );
    }
    const { username, email, password} =
      JSON.parse(requestBody);
    const user = new User({ username, email, password});
    await user.save();
    return NextResponse.json({ message: "User dodany!" });
  } catch (error) {
    console.error("Error processing request", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
