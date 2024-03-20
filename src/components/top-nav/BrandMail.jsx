import { MdOutlineMailOutline } from "react-icons/md";

export const BrandMail = () => {
  return (
    <div className="flex items-center gap-x-2 text-sm cursor-pointer">
      {" "}
      <MdOutlineMailOutline color="red" />
      <p>example@example.com</p>
    </div>
  );
};
