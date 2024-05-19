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
import Link from "next/link";

const SignUpPage = () => {
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
          <p className="mb-5">Please fill up the form to signup</p>
          <div className="flex flex-col gap-5">
            <TextFieldWithLabel
              label={"Full Name"}
              placeholder={"Enter Full Name"}
            />
            <TextFieldWithLabel
              label={"Email"}
              placeholder={"Enter your valid email address"}
              type="email"
            />
            <TextFieldWithLabel
              label={"Password"}
              placeholder={"Enter password"}
              type="password"
            />
            <TextFieldWithLabel
              label={"Confirm Password"}
              placeholder={"Confirm password"}
              type="password"
            />
          </div>

          <PrimaryButton
            label={"SIGN IN"}
            loading={false}
            extraClass={"mt-10 mb-5"}
          />
          <div className="mb-5 flex gap-5 items-center">
            <hr className="flex-1" />
            or sign in with
            <hr className="flex-1" />
          </div>
          <div className="flex justify-center gap-5 my-5">
            <SocialLoginButton
              text={"Sign in with Google"}
              icon={<FcGoogle />}
            />
            <SocialLoginButton
              text={"Sign in with FB"}
              icon={<FaSquareFacebook />}
            />
          </div>
          <p className="text-center">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary font-medium cursor-pointer"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
