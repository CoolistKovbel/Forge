import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { findUserById } from "./app/lib/getUser";

export const { handlers, auth, signIn, signOut } = NextAuth({
  callbacks: {
    // TODO: START UP

    async jwt({ token, user }) {
      try {
        if (user) {
          const { ...restUser } = user;
          token.user = restUser;
        } else {
          if (token.sub) {
            console.log(token.sub)
            const existingUser = await findUserById(token.sub as string);

            if (existingUser) {
              const { password, ...restUser } = existingUser;
              token.user = restUser;
            } else {

              console.log("User not found for the given ID");
            }
          } else {
            console.log("Token does not have a subject (sub) field");
          }
        }

        return token;
      } catch (error) {
        console.error("Error in jwt callback:", error);
      }

      return token;
    },
    session({ session, token }) {
      session.user = token.user as AdapterUser;

      console.log(session);

      return session;
    },
  },
  session: { strategy: "jwt" },
  ...authConfig,
});
