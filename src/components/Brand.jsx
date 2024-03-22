import brandPng from "@/assets/brand.png";
import Image from "next/image";

const Brand = ({ className }) => {
  const combinedClassName = `text-3xl text-center font-bold text-black ${className}`;

  return (
    <div className={combinedClassName}>
      <Image width={80} src={brandPng} alt="brand-logo" />
    </div>
  );
};

export default Brand;
