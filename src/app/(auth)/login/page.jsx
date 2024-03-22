"use client";

import Image from "next/image";
import loginPageSvg from "@/assets/svg/login.svg";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { siteName } from "@/constant";
// import SocialLoginButton from "./_components/SocialLoginButton";
import Brand from "@/components/Brand";

const LoginPage = () => {
  return (
    <div className="flex bg-primary/5 h-screen">
      <div className="relative hidden lg:w-2/3 p-5 lg:flex items-center justify-center">
        <div className="absolute top-5 left-5">
          <Brand />
        </div>
        <Image
          className=""
          alt="avatar"
          src={loginPageSvg}
          width={500}
          height={500}
        />
      </div>
      <div className="flex-1 bg-white p-5 flex flex-col justify-center items-center">
        <div className="">
          <h1 className="font-semibold text-3xl text-dark-1">
            Welcome to {siteName}
          </h1>
          <p className="mb-5">Please Sign in to your account</p>

          <div className="flex gap-5 my-5">
            {/* <SocialLoginButton
              icon={<FcGoogle />}
              label="Google Login"
              onClick={() => {}}
            />
            <SocialLoginButton
              icon={<FaFacebook />}
              label="Facebook Login"
              onClick={() => {}}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
