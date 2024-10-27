import { Button, ConfigProvider } from "antd";
import React from "react";
type Props = {
  label: string;
  href: string;
  isActive: Boolean;
};

const HeaderNavButton = ({ label, href, isActive }: Props) => {
  return (
    <>
  
  
        <button className={isActive?`px-2 py-1 rounded-md text-slate-200 bg-blue-500/60 hover:bg-blue-600/40`:`px-2 py-1 rounded-md text-slate-200 hover:bg-blue-600/40`}>
          {label}
        </button>
 
    </>
  );
};

export default HeaderNavButton;