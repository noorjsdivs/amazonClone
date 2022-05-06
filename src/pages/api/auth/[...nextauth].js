import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      key: process.env.key,
      clientId:
        "517916459344-5pv31gmhhp5kp5a0uddkk2hkgvmkll26.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // GithubProvider({
    //   key: process.env.key,
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    // ...add more providers here
  ],
});
