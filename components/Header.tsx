import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { Social } from "../typings";
import HeaderCat from "./HeaderCat";
import { LightBulbIcon } from "@heroicons/react/24/solid";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center gap-1"
      >
        <HeaderCat />

        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0.5, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center gap-4"
      >
        <Link href="/think-with-me">
          <div className="flex items-center gap-1.5 cursor-pointer group">
            <LightBulbIcon className="h-5 w-5 text-gray-400 group-hover:text-dukeBlue transition-colors" />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400 group-hover:text-dukeBlue transition-colors">
              Think With Me
            </p>
          </div>
        </Link>

        <Link href="/#contact">
          <div className="flex flex-row items-center text-gray-300 cursor-pointer">
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="grey"
              bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
              Get in touch
            </p>
          </div>
        </Link>
      </motion.div>
    </header>
  );
}
