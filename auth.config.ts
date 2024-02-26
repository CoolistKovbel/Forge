import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { UserSignInFormSchema } from "./app/madlib/schema";
import { findUserByEamil, findUserByMetaAddress, findUserBySignature } from "./app/madlib/getUser";

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
            const existingUser = await findUserByMetaAddress(
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
