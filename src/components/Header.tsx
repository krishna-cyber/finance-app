import React from "react";
import LogoBrand from "./LogoBrand";
import HeaderNav from "./HeaderNav";
import WelcomeMsg from "./WelcomeMsg";

const Header = () => {
  return (
    <header className=" bg-gradient-to-b from-blue-950 to-blue-400 flex flex-col gap-6 py-8 pb-32 lg:px-16">
      <div className=" flex items-center h-auto ">
        <LogoBrand />
        <HeaderNav />
      </div>
      <WelcomeMsg/>
    </header>
  );
};

export default Header;
