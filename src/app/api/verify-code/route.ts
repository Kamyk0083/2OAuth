import { NextRequest, NextResponse } from "next/server";
import VerificationCode from "../../../../Verification_code";
import User from "../../../../User";

export async function POST(req: NextRequest) {
  const { email, code } = await req.json();
  const record = await VerificationCode.findOne({ email, code });
  if (record) {
    await User.findOneAndUpdate(
      { email },
      {
        verification: true,
        verificationExpiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      }
    );
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json(
      { success: false, message: "Niepoprawny kod" },
      { status: 400 }
    );
  }
}