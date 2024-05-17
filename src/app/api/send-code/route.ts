import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";
import VerificationCode from "../../../../Verification_code";
import User from "../../../../User";

function generateRandomCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  const code = generateRandomCode();
  try {
    await sendMail({
      to: `${email}`,
      subject: "Kod weryfikacyjny",
      body: `Kod weryfikacyjny: ${code}`,
    });
    await VerificationCode.findOneAndUpdate(
      { email },
      { email, code, createdAt: new Date() },
      { upsert: true }
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Błąd podczas wysyłania kodu" },
      { status: 500 }
    );
  }
}
