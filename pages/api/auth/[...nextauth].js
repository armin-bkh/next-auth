import nextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export default nextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});
