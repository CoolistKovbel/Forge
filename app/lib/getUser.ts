import { User } from "@/models/User";
import dbConnect from "./db";

/**
 * This checks the database to see if a user with the same id exists.
 *
 *
 */
export const findUserById = async (id: string) => {
  try {
    await dbConnect();

    const user = await User.findOne({ _id: id });

    return user;
  } catch (error) {
    return null;
  }
};

/**
 * This checks the database to see if a user with the same email
 *
 *
 */
export const findUserByEamil = async (email: string) => {
  try {
    await dbConnect();

    const user = await User.findOne({ email });

    return user;
  } catch (error) {
    return null;
  }
};

/**
 * This checks the database to see if a user with the same email
 *
 *
 */
export const findUserBySignature = async (signature: string) => {
  try {
    await dbConnect();

    const user = await User.findOne({ signature });

    return user;
  } catch (error) {
    return null;
  }
};
