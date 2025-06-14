"use client";

import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();

  return (
    <div className="h-[95vh] bg-gray-900">
      <div className="h-full flex justify-center">
        <div className="flex justify-center text-center flex-col gap-2 items-center">
          <h1 className="text-8xl">401</h1>
          <h2 className="text-2xl">
            You don't have permission to view this page!
          </h2>
          <button onClick={() => router.back()} className="btn btn-dash">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
