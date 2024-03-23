"use client";
import Brand from "./Brand";
import { TextWithIcon } from "./navbars/top-nav/TextWithIcon";
import Container from "./shared/Container";
import { footerLinks } from "@/constant";
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";
import { Socials } from "./navbars/top-nav/Socials";
import Link from "next/link";
import { Input } from "keep-react";
import PrimaryButton from "./PrimaryButton";

const Footer = () => {
  return (
    <footer className="bg-primary2">
      <Container className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_2fr]  gap-10 p-10 md:px-0 md:py-10">
        <div className="flex flex-col gap-y-2 md:gap-y-4">
          <Brand className="text-white" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

          <TextWithIcon
            text={"3B, Sector 1, Address, City"}
            icon={<IoLocationOutline />}
          />
          <TextWithIcon text={"+01234-6783"} icon={<FiPhoneCall />} />
          <TextWithIcon text={"ponchovuj@gmail.com"} icon={<TfiEmail />} />
          <Socials />
        </div>
        {footerLinks.map((footerItem) => (
          <div
            key={footerItem.header}
            className="flex flex-col  gap-y-2 md:gap-y-4"
          >
            <h2 className="font-semibold">{footerItem.header}</h2>
            {footerItem.links.map((link) => (
              <Link key={link.title} href={link.url}>
                {link.title}
              </Link>
            ))}
          </div>
        ))}
        <div className="flex flex-col gap-y-2 md:gap-y-4 col-span-2 md:col-span-1">
          <h2 className="font-semibold">Newsletter</h2>
          <p>
            Subscribe to our newsletter and receive our latest email and update.
          </p>
          <div className="flex">
            <Input
              type="email"
              placeholder="email@example.com"
              style={{ borderRadius: 0, outline: 0, width: "100%" }}
            />
            <PrimaryButton
              label={"Subscribe"}
              extraClass={"rounded-none w-30"}
              size="xs"
            />
          </div>
          <p className="font-semibold">We Accept</p>
          {/* TODO: Add payment methods. */}
        </div>
      </Container>
      <hr className="border-gray-300" />
      <Container className="flex flex-col md:flex-row justify-between text-sm text-center p-5 md:px-0 md:py-5">
        <p>
          Copyright <span className="font-semibold"> ©PONCHOVUJ</span> All Right
          Reserved.
        </p>
        <ul className="flex justify-center gap-3">
          <li className="hover:text-primary transition-300">Privacy Policy</li>
          <li className="hover:text-primary transition-300">Refund Policy</li>
          <li className="hover:text-primary transition-300">
            Terms of Service
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
