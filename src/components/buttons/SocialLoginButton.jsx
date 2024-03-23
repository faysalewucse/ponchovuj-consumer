import { Button } from "keep-react";
import { TextWithIcon } from "../navbars/top-nav/TextWithIcon";

const SocialLoginButton = ({ text, icon }) => {
  return (
    <Button variant="outline" className="hover:shadow hover:shadow-primary/25">
      <TextWithIcon text={text} icon={icon} />
    </Button>
  );
};

export default SocialLoginButton;
