declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: {
      role?: string | unknown;
      id?: string | unknown;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}

export {};