import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const details = ["Terms-Of-Use", "Privacy-Policy", "About", "Blog", "FAQ"];
  return (
    <div className="mt-4 flexbox flex-col gap-y-2 bg-gray-900 p-4">
      <ul className="flex gap-x-3">
        {details.map((detail, index) => (
          <li className="text-xs sm:text-sm" key={index}>
            {detail}
          </li>
        ))}
      </ul>

      <div className="flexbox flex-col">
        <p className="text-sm text-center my-3">
          Moviemania is a movie browsing website where you can see the
          collection of old and lates movies collection.
        </p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MovieMania. All rights reserved.
        </p>
      </div>

      <div className="social flex gap-x-3">
        <Link
          href="https://www.facebook.com/"
          className="flex items-center gap-x-2"
        >
          <FaFacebook size={22} />
        </Link>
        <Link href="https://www.instagram.com/" className="flex items-center gap-x-2">
          <FaInstagram size={22} />
        </Link>
        <Link href="https://www.twitter.com/" className="flex items-center gap-x-2">
          <FaXTwitter size={22} />
        </Link>
        <Link href="https://github.com/Prabesh001" className="flex items-center gap-x-2">
          <FaGithub size={22} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
