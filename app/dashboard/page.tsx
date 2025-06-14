"use client";

import { useSession } from "next-auth/react";
import React from "react";
const page = () => {
  const { data } = useSession();
  const user = data?.user;


  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col align-center gap-2">

          <p className="text-white">{user?.email}</p>
          {user?.image ? (
            <img src={user?.image} width={50} height={50} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default page;
