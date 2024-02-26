import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { UserSignInFormSchema } from "./app/lib/schema";
import { findUserByEamil, findUserBySignature } from "./app/lib/getUser";

export default {
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      async authorize(credentials) {

        const validatedFields = UserSignInFormSchema.safeParse(credentials);

        console.log(validatedFields)

        if (validatedFields.success) {
          const { email, password, signature } = validatedFields.data;

          if (email) {
            const existingUser = await findUserByEamil(email as string);

            if (!existingUser) return null;

            console.log(existingUser)

            return existingUser;
          }

          if (signature) {
            const existingUser = await findUserBySignature(
              signature as string
            );

            if (!existingUser) return null;

            return existingUser;
          }
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
