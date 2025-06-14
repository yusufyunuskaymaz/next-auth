"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import { signOut, useSession } from "next-auth/react";

export default function ConditionalNavbar() {
  const pathname = usePathname();

  const hideNavbarRoutes = ["/login", "/register"];

  if (hideNavbarRoutes.includes(pathname)) {
    return null;
  }

  const { data } = useSession();
  const user = data?.user;

  const signOutApp = () => {
    signOut({ callbackUrl: "/login" });
  };

  return <Navbar user={user} signOut={() => signOutApp()} />;
}
