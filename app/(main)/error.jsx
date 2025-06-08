"use client";

import Link from "next/link";

export default function ErrorPage({
  statusCode = 404,
  message = "Page Not Found",
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">{statusCode}</h1>
      <p className="text-xl mb-6">{message}</p>
      <Link
        href="/"
        className="px-6 py-3 bg-lime-400 hover:bg-lime-700 transition rounded-full text-white font-medium"
      >
        Go back home
      </Link>
    </div>
  );
}
