import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const authOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "email", type: "text ", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const { email, password, role } = credentials;

        const endpoint = role === "student" ? "/student/login" : "/agent/login";

        const response = await fetch(`${baseUrl}${endpoint}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const user = await response.json();

        if (response.ok && user) {
          return user;
        } else {
          const errorData = await response.json();
          const errorMessage = errorData?.error || "Authentication failed";
          console.log(errorMessage);

          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      return {
        ...token,
        ...user,
      };
    },
    async session({ session, token, user }) {
      session.user = token;
      return session;
    },
  },

  pages: {
    signIn: "/auth/Signin",
    error: "/auth/error",
    signOut: "/auth/Signin",
  },
};
export default NextAuth(authOptions);
