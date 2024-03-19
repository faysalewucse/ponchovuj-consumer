import Brand from "@/components/Brand";
import PrimaryButton from "@/components/PrimaryButton";
import TextFieldWithLabel from "@/components/TextFieldWithLabel";
import { Checkbox, Label } from "keep-react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary/10">
      <div className="shadow p-10 w-[500px] bg-white">
        <Brand />
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
  );
};

export default LoginPage;
