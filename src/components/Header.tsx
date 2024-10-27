import React from "react";
import LogoBrand from "./LogoBrand";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <header className=" bg-gradient-to-b from-blue-950 to-blue-400  px-4 py-8 pb-32 lg:px-16">
      <div className=" flex items-center ">
        <LogoBrand />
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
