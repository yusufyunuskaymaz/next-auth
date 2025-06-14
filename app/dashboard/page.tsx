"use client";

import { useSession } from "next-auth/react";
import React from "react";
const page = () => {
  const { data } = useSession();
  const user = data?.user;

  return (
    <div className="bg-gray-900">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {!user ? (
          <span className="loading loading-spinner loading-xl"></span>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <p className="text-white">{user?.email}</p>
            {user?.image ? (
              <img src={user?.image} width={40} height={40} />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A9.956 9.956 0 0112 15c2.014 0 3.887.597 5.443 1.617M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
