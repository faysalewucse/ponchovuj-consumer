"use client";

import { Button } from "@nextui-org/react";

const PrimaryButton = ({
  label,
  loading,
  extraClass,
  onClick,
  size = "lg",
}) => {
  return (
    <Button
      isLoading={loading}
      className={`bg-primary w-full rounded text-white ${extraClass}`}
      size={size}
      onPress={onClick}
    >
      {!loading ? label : "Please wait..."}
    </Button>
  );
};

export default PrimaryButton;
