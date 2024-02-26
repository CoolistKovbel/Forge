import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    const { email, password } = Object.fromEntries(data);

    return NextResponse.json({ message: email }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "sorry no login for you" },
      { status: 500 }
    );
  }
}
