import dbConnect from "@/app/madlib/db";
import { User } from "@/models/User";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    const { username, email, password, metaAccount } = Object.fromEntries(data);

    await dbConnect();

    const existingUser = await User.findOne({ email });

    if (existingUser)
      return NextResponse.json(
        { message: "Sorry choose a different account" },
        { status: 500 }
      );

    const hashedPassword = await hash(password as string, 10);

    const payload = {
      username,
      email,
      password: hashedPassword,
      metaAddress: metaAccount,
    };

    const newUser = new User(payload);

    await newUser.save();

    return NextResponse.json({ message: "success created" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "sorry cant seem to register user" },
      { status: 500 }
    );
  }
}
