"use client"
import { useGetAccounts } from "@/services/queries/queries";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  const { data, isLoading } = useGetAccounts();
  console.log(data, isLoading);
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <UserButton />
      main page page.tsx for dashboard
      {}
    </main>
  );
}
