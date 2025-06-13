"use client";

import { signIn } from "next-auth/react";

export default function Login() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col align-center gap-2 text-white">
        <button onClick={() => signIn("auth0",{callbackUrl:"/dashboard",redirect:true})}>Auth0 ile Giriş Yap</button>
      </div>
    </div>
  );
}