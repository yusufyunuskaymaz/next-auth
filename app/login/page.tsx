"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <div className="flex flex-col align-center gap-2 text-white">
    //     <button  onClick={() => signIn("auth0",{callbackUrl:"/dashboard",redirect:true})}>Auth0 ile Giriş Ya2p</button>
    //   </div>
    // </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full mx-4">
        <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-2xl p-8 space-y-8">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 bg-gradient-to-r bg-blue-500 rounded-full flex items-center justify-center mb-4">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Welcome</h2>
            <p className="text-gray-400 text-sm">Please sign in to continue</p>
          </div>

          <div className="space-y-6">
            <button
              onClick={() =>
                signIn("auth0", { callbackUrl: "/dashboard", redirect: true })
              }
              className="w-full bg-gradient-to-r bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center justify-center space-x-2">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span>Sign in with Auth0</span>
              </div>
            </button>
          </div>

          <div className="text-center pt-4 border-t border-gray-700">
            <p className="text-gray-400 text-xs">
              By signing in, you agree to our{" "}
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
