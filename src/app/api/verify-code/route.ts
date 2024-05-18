import { NextRequest, NextResponse } from "next/server";
import VerificationCode from "../../../../Verification_code";
import User from "../../../../User";

export const revalidate = 1;
export async function POST(req: NextRequest) {
  const { email, code } = await req.json();
  const record = await VerificationCode.findOne({ email, code });
  if (record) {
    await User.findOneAndUpdate(
      { email },
      {
        verification: true,
        verificationExpiresAt: new Date(Date.now() + 60 * 1000),
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
