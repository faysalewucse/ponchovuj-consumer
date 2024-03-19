import { Input, Label } from "keep-react";

const TextFieldWithLabel = ({ label }) => {
  return (
    <fieldset className="mb-5">
      <Label className="font-semibold text-md" htmlFor="name">
        {label}
      </Label>
      <Input
        placeholder="Enter email"
        className="mt-2 ps-2 rounded-sm w-full shadow"
      />
    </fieldset>
  );
};

export default TextFieldWithLabel;
