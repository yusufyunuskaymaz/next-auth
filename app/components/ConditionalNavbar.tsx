"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import { signOut, useSession } from "next-auth/react";
import { INavbar } from "../types/user";

export default function ConditionalNavbar() {
  const pathname = usePathname();

  const hideNavbarRoutes = ["/login", "/register"];

  if (hideNavbarRoutes.includes(pathname)) {
    return null;
  }

  const { data } = useSession();
  const user = data?.user as INavbar;

  const signOutApp = () => {
    signOut({ callbackUrl: "/login" });
  };

  return <Navbar user={user} signOut={() => signOutApp()} />;
}
