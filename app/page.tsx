"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const { data } = useSession();

  if (data?.user) {
    redirect("/dashboard");
  } else {
    redirect("/login");
  }
}
