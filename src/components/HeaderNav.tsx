"use client"
import React from "react";
import HeaderNavButton from "./HeaderNavButton";
import { usePathname } from "next/navigation";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { LoaderCircle } from 'lucide-react';
const navItems = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/transactions",
    title: "Transactions",
  },
  {
    link: "/accounts",
    title: "Accounts",
  },
  {
    link: "/categories",
    title: "Categories",
  },
  {
    link: "/settings",
    title: "Settings",
  },
];

const HeaderNav = () => {
  const pathname = usePathname();
  return (
    <nav className=" hidden w-full lg:flex px-14 justify-end ">
      <div className="mx-auto flex gap-4">

      {navItems.map((item) => (
          <HeaderNavButton key={item.link} label={item.title} href={item.link} isActive={pathname === item.link} />
      ))}
      </div>
      <ClerkLoaded>

      <UserButton />
      </ClerkLoaded>
      <ClerkLoading>
      <LoaderCircle strokeWidth={1.5} className=" animate-spin text-white" />
      </ClerkLoading>
    </nav>
  );
};

export default HeaderNav;
