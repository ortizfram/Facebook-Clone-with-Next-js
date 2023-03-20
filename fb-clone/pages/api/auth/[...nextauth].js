import NextAuth from "next-auth"
// change GithubProvider for Goggl, and /github for google
import GoggleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [

    GoggleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)