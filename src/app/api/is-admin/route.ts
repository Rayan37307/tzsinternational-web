import { NextResponse } from "next/server";
//check if the this is admin
export async function GET(req: Request) {
  const { secretCode } = await req.json();

  if (secretCode !== process.env.ADMIN_SECRET_CODE) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ message: "Admin" }, { status: 200 });
}
