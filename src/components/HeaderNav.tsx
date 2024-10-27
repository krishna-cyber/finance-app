"use client"
import React from "react";
import HeaderNavButton from "./HeaderNavButton";
import { usePathname } from "next/navigation";
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
    <nav className=" hidden lg:flex gap-4 px-14 ">
      {navItems.map((item) => (
          <HeaderNavButton label={item.title} href={item.link} isActive={pathname === item.link} />
      ))}
    </nav>
  );
};

export default HeaderNav;
