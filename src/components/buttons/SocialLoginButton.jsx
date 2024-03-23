import { Button } from "@nextui-org/react";

const SocialLoginButton = ({ text, icon }) => {
  return (
    <Button variant="light" radius="sm" startContent={icon} className="border">
      {text}
    </Button>
  );
};

export default SocialLoginButton;
