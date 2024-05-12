import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "../../../../User";
import connect from "../../../../db";

export async function POST(request: NextRequest, response: NextResponse) {
  await connect();
  const { username, password } = await request.json();
  console.log("Dane logowania:", username, password);

  try {
    const user = await User.findOne({ username: username });
    console.log("Użytkownik znaleziony:", username);
    if (username && user.password === password) {
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
        })
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
