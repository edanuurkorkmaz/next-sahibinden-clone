"use client";

import { strapi } from "@/lib/strapi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Sign up to a new account</CardTitle>
            <CardDescription>
              Enter your email below to sign up to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Username</Label>
                <Input
                  id="username"
                  type="username"
                  name="username"
                  placeholder="mister_mustache"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" name="password" type="password" required />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
            <Button variant="outline" className="w-full">
              Sign up with Google
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
