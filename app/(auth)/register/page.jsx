"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { strapi } from "@/lib/strapi";

export default function Page() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);
    try {
      await strapi.register(formData);
      router.refresh();
      router.push("/");
    } catch (e) {
      console.log(e);
      setError(e.error.message);
    }
  };
  return (
    <div>
      {error && <small className="text-red-500">{error}</small>}
      <form onSubmit={handleRegister}>
        <input type="text" name="username" placeholder="Username" /> <br />
        <input type="text" name="email" placeholder="E-mail" /> <br />
        <input type="password" name="password" placeholder="Password" /> <br />
        <button className="border px-3 py-2 rounded-md">Register</button>
      </form>
    </div>
  );
}
