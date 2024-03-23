import brandPng from "@/assets/brand.png";
import Image from "next/image";
import Link from "next/link";

const Brand = ({ className }) => {
  const combinedClassName = `text-3xl text-center font-bold text-black ${className}`;

  return (
    <div className={combinedClassName}>
      <Link href={"/"}>
        <Image width={80} src={brandPng} alt="brand-logo" />
      </Link>
    </div>
  );
};

export default Brand;
