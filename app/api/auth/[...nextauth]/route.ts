import { jwtDecode } from "jwt-decode";
import NextAuth, { Session } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

const handler = NextAuth({
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER,
      authorization: {
        params: {
          prompt: "login",
          scope: "openid email profile",
        },
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 30 * 24 * 60 * 60,
  },

  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
   async jwt({ token, account, user }) {
  if (account && account.id_token) {

    const idToken = account.id_token;
    const decode_jwt = jwtDecode(idToken) as any

    const roles = decode_jwt["https://localhost:3000/roles"] || [];
    token.role = roles[0] || "user";
    token.accessToken = account.access_token;
    token.userId = user?.id;
  }
  return token;
},

    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user.id = token.userId;
      session.user.role = token.role;
      return session;
    },

    async redirect({ url, baseUrl }) {

      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return `${baseUrl}/dashboard`;
    },
  },
});

export default handler;

export { handler as GET, handler as POST };
