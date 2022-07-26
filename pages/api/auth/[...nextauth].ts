import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from './../../../lib/prisma'

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      profile(profile){
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          username: profile.login,
          email: profile.email,
          image: profile.avatar_url
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile){
        return {
          id: profile.sub.toString(),
          name: profile.name,
          username: profile.email,
          email: profile.email,
          image: profile.picture
        }
      }
    })
  ],
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
        username: user.username
      }
    })
  } 
})