"use client";

import { Button } from "@nextui-org/react";

const PrimaryButton = ({ label, loading, extraClass, size = "lg" }) => {
  return (
    <Button
      isLoading={loading}
      className={`bg-primary w-full rounded text-white ${extraClass}`}
      size={size}
    >
      {!loading ? label : "Please wait..."}
    </Button>
  );
};

export default PrimaryButton;
