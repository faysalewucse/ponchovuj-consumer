"use client";

import { Input } from "@nextui-org/react";
import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";

const TextFieldWithLabel = ({
  label,
  placeholder,
  passwordField = false,
  numberField = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      size="lg"
      radius="none"
      labelPlacement="outside"
      label={label}
      placeholder={placeholder}
      color="default"
      className="border rounded-sm"
      endContent={
        passwordField && (
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <IoMdEye className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <IoMdEyeOff className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        )
      }
      type={
        passwordField && !isVisible
          ? "password"
          : numberField
          ? "number"
          : "text"
      }
    />
  );
};

export default TextFieldWithLabel;
