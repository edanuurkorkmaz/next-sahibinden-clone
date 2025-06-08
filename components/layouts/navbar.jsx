"use client";

import { Button } from "../ui/button";
import { ThemeToggle } from "../ui/toggle-theme";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/auth-provider";

export default function Navbar() {
  const router = useRouter();
  const { isAuthenticated, logout, login } = useAuth();

  return (
    <div className="flex justify-center items-stretch gap-4 bg-[#19BA1A] dark:bg-[#F97A00] ">
      <span className="text-white text-2xl font-bold">OWNERLY</span>
      <ul className="flex justify-center gap-4">
        <li>
          <Button className="cursor-pointer">
            <a href="/">Home</a>
          </Button>
        </li>
        <li className="flex">
          <Input type="text" placeholder="Search by word or store name" />
          <Button type="submit" variant="outline">
            Search
          </Button>
        </li>
        <li>
          <Button className="cursor-pointer">Contact</Button>
        </li>
      </ul>
      <ul>
        <li>
          <Button
            onClick={() => {
              if (isAuthenticated) {
                logout();
                router.replace("/");
              } else {
                login();
                router.push("/login");
              }
            }}
            className="cursor-pointer"
          >
            {isAuthenticated ? "Log out" : "Login/Sign Up"}
          </Button>
        </li>
      </ul>
      <ThemeToggle />
    </div>
  );
}
