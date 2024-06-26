import { NextRequest, NextResponse } from "next/server";
import User from "../../../../User";
import connect from "../../../../db";

export const revalidate = 1;
export async function POST(request: NextRequest) {
  await connect();
  const { email } = await request.json();

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return new NextResponse(
        JSON.stringify({ success: false, message: "User not found" }),
        { status: 404 }
      );
    }

    if (user.verification && new Date() > user.verificationExpiresAt) {
      user.verification = false;
      await user.save();
    }

    return new NextResponse(
      JSON.stringify({ success: true, verification: user.verification })
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "Error checking verification",
      }),
      { status: 500 }
    );
  }
}
