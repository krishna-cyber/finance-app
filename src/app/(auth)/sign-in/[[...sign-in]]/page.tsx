import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import { Spin } from "antd";
import Image from "next/image";
import logo from "../../../../assets/logo.svg"

export default function Page() {
  return (
    <div className=" min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className=" lg:flex h-full flex-col justify-center p-4 ">
        <h2 className=" text-2xl font-semibold text-center">Welcome Back</h2>
        <p className=" text-slate-400 text-center text-base">
          Login or create new account to access your dashboard
        </p>
        <div className=" mt-2 flex justify-center items-center">
          <ClerkLoaded>
            <SignIn path="/sign-in" />
          </ClerkLoaded>
          <ClerkLoading>
            <Spin size={"large"} />
          </ClerkLoading>
        </div>
      </div>
      <div className=" bg-blue-200 h-full hidden lg:flex justify-center items-center">
      <Image src={logo} alt="logo" width={150} height={150} />
      </div>
    </div>
  );
}
