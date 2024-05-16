import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";

function generateRandomCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const { email } = await req.json();
    const code = generateRandomCode();
    try {
      await sendMail({
        to: `${email}`,
        subject: "Kod weryfikacyjny",
        body: `Kod weryfikacyjny: ${code}`,
      });
      return NextResponse.json({ success: true, code });
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
          message: "Błąd podczas wysyłania kodu",
        },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      {
        success: false,
        message: "Niepoprawny typ zapytania",
      },
      { status: 405 }
    );
  }
}
