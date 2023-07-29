import NextAuth from "next-auth";
import axios from "@/utils/axios";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const { email, password } = credentials;

        const LOGIN_URL = "/student/login";

        const response = await fetch(
          "http://passmark.eu-north-1.elasticbeanstalk.com/api/v1/student/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          }
        );

        const user = await response.json();
        console.log(response.status);
        console.log(user);

        if (response.ok && user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/Signin",
  },
};
export default NextAuth(authOptions);
