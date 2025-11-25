import React from "react";

export default function NotFound404() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl text-center p-10 rounded-none">
        <svg width="110" height="110" viewBox="0 0 96 96" fill="none" className="mx-auto mb-6" aria-hidden>
          <rect width="96" height="96" rx="18" fill="#F3F4F6" />
          <path d="M30 36h36v4H30zM30 48h36v4H30z" fill="#E5E7EB" />
          <circle cx="68" cy="24" r="6" fill="#A78BFA" />
          <path d="M28 66c6-6 20-6 26 0" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <h1 className="text-4xl font-semibold text-gray-800">Page not found</h1>
        <p className="mt-2 text-base text-gray-500">Sorry, we can't find that page.</p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => (window.location.href = "/")}
            className="px-5 py-2 text-sm font-medium border border-gray-300 rounded-md"
          >
            Home
          </button>

          <button
            onClick={() => window.history.back()}
            className="px-5 py-2 text-sm font-medium rounded-md bg-indigo-600 text-white"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}