"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";

const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();
  return (
    <div className=" space-y-2 mt-10 text-slate-200 flex flex-col self-start ">
      <h2 className=" text-2xl lg:text-4xl font-medium  ">
        Welcome back {isLoaded ? user?.fullName : null} 👋
      </h2>
      <p className=" text-sm lg:text-base">This is your finance dashboard report.</p>
    </div>
  );
};

export default WelcomeMsg;
