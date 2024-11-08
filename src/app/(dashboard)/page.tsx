"use client";
import { getSessionToken, useGetAccounts } from "@/services/queries/queries";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Session } from "inspector/promises";
import { useEffect, useState } from "react";

export default function Home() {
  const { getToken } = useAuth();

  const [token, setToken] = useState("");
  const { data, isLoading } = useGetAccounts(token);
  console.log(data, isLoading);
  useEffect(() => {
    getToken().then((token) => {
      if (token) {
        setToken(token);
      }
    });
  }, []);
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <UserButton />
      main page page.tsx for dashboard
      {}
    </main>
  );
}
