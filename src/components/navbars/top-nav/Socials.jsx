import Link from "next/link";
import { FaYoutube, FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Socials = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Link href="https://www.facebook.com" target="_blank">
        {" "}
        <FaFacebookSquare className="hover:text-primary transition-300" />
      </Link>
      <Link href="https://twitter.com/" target="_blank">
        {" "}
        <FaXTwitter className="hover:text-primary transition-300" />
      </Link>
      <Link href="https://www.youtube.com/" target="_blank">
        {" "}
        <FaYoutube className="hover:text-primary transition-300" />
      </Link>
      <Link href="https://www.instagram.com" target="_blank">
        {" "}
        <FaLinkedinIn className="hover:text-primary transition-300" />
      </Link>
    </div>
  );
};
