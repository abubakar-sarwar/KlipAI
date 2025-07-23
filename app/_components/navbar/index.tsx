"use client";
import { IconMenu } from "@/app/_icons";
import { SITE_NAME } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "What is KlipAi", link: "/what-is-klipai" },
  { label: "Send KlapAI", link: "/send-klapai" },
  { label: "AI Agent", link: "/ai-agent" },
  { label: "Testimonials", link: "/testimonials" },
  { label: "Web3", link: "/web3" },
];

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState<boolean>(false);

  return (
    <div className="fixed top-4 lg:top-5 left-0 w-full z-30">
      <div className="container">
        <div className="rounded-15-73 bg-black">
          <nav className="flex_between p-4 max-w-[1071px] mx-auto">
            <Link href="/" aria-label={SITE_NAME} className="flex_center">
              <Image src="/logo.svg" unoptimized alt={SITE_NAME} width={99} height={30} />
            </Link>
            <ul className="max-lg:hidden flex items-center gap-[15.73px] max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:h-dvh max-lg:max-w-3/4 max-lg:bg-white text-white">
              {NAV_LINKS.map((item) => (
                <li key={item.link}>
                  <Link href={item.link}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <Link href="/login" className="hidden lg:block btn_primary">
              Login
            </Link>
            <button type="button" onClick={() => setMobileNav((prev) => !prev)} className="lg:hidden">
              <IconMenu />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
