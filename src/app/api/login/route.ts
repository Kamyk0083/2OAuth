import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "../../../../User";
import connect from "../../../../db";

export const revalidate = 1;
export async function POST(request: NextRequest) {
  await connect();
  const { username, password } = await request.json();
  console.log("Dane logowania:", username, password);

  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      console.log("Użytkownik nie znaleziony:", username);
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Użytkownik nie znaleziony",
        }),
        { status: 404 }
      );
    }
    console.log("Użytkownik znaleziony:", username);
    if (user.password === password) {
      const token = jwt.sign(
        {
          username: user.username,
          email: user.email,
        },
        "secret"
      );
      console.log("Token:", token);
      return new NextResponse(JSON.stringify({ success: true, token }));
    } else {
      console.log("Niepoprawna nazwa użytkownika lub hasło");
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Nieprawidłowa nazwa użytkownika lub hasło",
        }),
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Błąd logowania:", error);
    return new NextResponse(
      JSON.stringify({ success: false, message: "Błąd logowania" }),
      { status: 500 }
    );
  }
}
