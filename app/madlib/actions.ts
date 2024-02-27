"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import dbConnect from "./db";
import { User } from "@/models/User";
import { compare, hash } from "bcryptjs";
import { ethers } from "ethers";
import { signIn, signOut } from "@/auth";


dbConnect()

export async function RegisterUser(
  signature: string,
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const { username, email, password, metaAccount } =
    Object.fromEntries(formData);
    
   

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
  const { email, password } = Object.fromEntries(formData);

  try {
   

    const existingUser = await User.findOne({ email });

    if (!existingUser) return "sorry user no exist";

    const yono = await compare(password as string, existingUser.password);

    if (!yono) return "password invalid";


    try {
      await signIn("credentials", {
        email,
        password,
        redirectTo: "/dashboard",
      });
    } catch (error) {
      console.error("Error during signIn:", error);
      // Handle or log the error as needed
    }

    return "Successfuly sign in";
  } catch (error) {
    console.log(error);
    return "sorry cant seem to authenicate user";
  }
}

export async function nerd(prevState: string | undefined, signature: string) {
  try {
   
    
    const userAddress = ethers.utils.verifyMessage(
      process.env.SIGNMESSAGE!,
      signature
    );

    const existing = await User.findOne({ metaAddress: userAddress });

    if (!existing) {
      console.log("NOT EXISTING");
      return "Sorry you must register with your walllet you dumbass";
    }

    try {
      await signIn("credentials", {
        signature: userAddress,
        redirectTo: "/dashboard",
      });
    } catch (error) {
      console.error("Error during signIn:", error);
      // Handle or log the error as needed
    }
    

    return "status ok";
  } catch (error) {
    console.log(error);
    return "de ticket";
  }
}


export const logout = async () => {
  await signOut();
};

export async function UpdateUserProfile( uaerId: string, prevState: string | undefined,
  formData: FormData){

    const { username, email, password, } =
    Object.fromEntries(formData);

  try {

    await dbConnect()

    const existingUser = await User.findById({_id: uaerId});

    if (!existingUser) {
      return 'User not found';
    }

    // Update fields only if provided in the formData
    if (username) {
      existingUser.username = username as string;
    }

    if (email) {
      existingUser.email = email as string;
    }

    if (password) {
      existingUser.password = await hash(password as string, 10);
    }

    // Save the changes
    await existingUser.save();

  
  } catch (error) {
    console.log(error)
    return "Error updating the user...."
  }

  revalidatePath("/settings")
  redirect("/settings")
}