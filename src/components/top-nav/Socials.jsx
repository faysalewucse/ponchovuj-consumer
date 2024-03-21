import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export const Socials = () => {
  return (
    <div className="flex items-center gap-x-4">
      <Link href="https://www.facebook.com" target="_blank">
        {" "}
        <FaFacebookF />
      </Link>
      <Link href="https://twitter.com/" target="_blank">
        {" "}
        <FaTwitter />
      </Link>
      <Link href="https://www.youtube.com/" target="_blank">
        {" "}
        <FaYoutube />
      </Link>
      <Link href="https://www.instagram.com" target="_blank">
        {" "}
        <FaInstagram />
      </Link>
      <Link href="https://www.tiktok.com" target="_blank">
        {" "}
        <FaTiktok />
      </Link>
    </div>
  );
};
