"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import dbConnect from "./db";
import { User } from "@/models/User";
import { compare, hash } from "bcryptjs";
import { ethers } from "ethers";

export async function RegisterUser(
  signature: string,
  prevState: string | undefined,
  formData: FormData
) {
  const { username, email, password, metaAccount } = Object.fromEntries(formData);

  try {
    await dbConnect();

    const existingUser = await User.findOne({ email });

    if (existingUser) return "Sorry choose a different account";

    const hashedPassword = await hash(password as string, 10);

    const payload = {
      username,
      email,
      password: hashedPassword,
      metaAddress: metaAccount,
    };

    const newUser = new User(payload);

    await newUser.save();

    return "success create";
  } catch (error) {
    console.log(error);
    return "sorry cant seem to register user";
  }
}

export async function AuthenticateUser(
  prevState: string | undefined,
  formData: FormData
) {
  const { email, password} = Object.fromEntries(formData);

  try {
    await dbConnect();

    const existingUser = await User.findOne({ email });

    if(!existingUser) return "sorry user no exist"

    const yono = await compare(password as string, existingUser.password)

    if(yono) existingUser

    return "Successfuly sign in";

  } catch (error) {

    console.log(error);
    return "sorry cant seem to register user";
  }
}

export async function nerd(  prevState: string | undefined, signature: string) {
  try {
    await dbConnect();

    const existing = await User.findOne({signature})

    if (!existing) {
        console.log("NOT EXISTING")
      return "Sorry you must register with your walllet you dumbass";
    }
    
    // const mes = process.env.SIGNMESSAGE as string

    const userAddress = ethers.utils.verifyMessage(process.env.SIGNMESSAGE!, signature);

    console.log(userAddress)
    
    return "status ok"

  } catch (error) {
    console.log(error);
    return "de ticket";
  }
}
