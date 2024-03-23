"use client";

import Image from "next/image";
import loginPageSvg from "@/assets/svg/login.svg";
import { siteName } from "@/constant";
import TextFieldWithLabel from "@/components/TextFieldWithLabel";
import { Checkbox, Label } from "keep-react";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SocialLoginButton from "@/components/buttons/SocialLoginButton";
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";

const LoginPage = () => {
  return (
    <div className="flex justify-center py-20">
      <Image
        className=""
        alt="avatar"
        src={loginPageSvg}
        width={500}
        height={500}
      />
      <div className="p-5 flex flex-col justify-center">
        <div className="">
          <h1 className="font-semibold text-3xl text-dark-1">
            Welcome to {siteName}
          </h1>
          <p className="mb-5">Please Sign in to your account</p>

          <div className="flex gap-5 my-5">
            <SocialLoginButton
              text={"Sign in with Google"}
              icon={<FcGoogle />}
            />
            <SocialLoginButton
              text={"Sign in with FB"}
              icon={<FaSquareFacebook />}
            />
          </div>
          <div className="mb-5 flex gap-5 items-center">
            <hr className="flex-1" />
            or sign in with
            <hr className="flex-1" />
          </div>
          <TextFieldWithLabel label={"Phone Number"} />
          <TextFieldWithLabel label={"Password"} />
          <div className="flex justify-between mb-10">
            <fieldset className="flex items-center gap-2">
              <Checkbox checked={false} id="checkbox" />
              <Label htmlFor="checkbox">Keep me logged in</Label>
            </fieldset>
            <p className="text-sm text-primary underline">Forgot Password?</p>
          </div>
          <PrimaryButton label={"SIGN IN"} loading={false} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
