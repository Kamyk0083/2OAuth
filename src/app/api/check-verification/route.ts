import { NextRequest, NextResponse } from "next/server";
import User from "../../../../User";
import connect from "../../../../db";

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
