import nextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export default nextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  adapter: process.env.DB_ADDRESS,
  session: {
    jwt: true,
  },
  jwt: {
    secret: 'sfsdfsdfsdf',
  }
});
