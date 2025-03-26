import Image from "next/image";
import React from "react";

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
        <a href="#" className="flex items-center gap-x-2">
          <Image src="/globe.svg" alt="facebook" width={20} height={20} />
          Facebook
        </a>
        <a href="#" className="flex items-center gap-x-2">
          <Image src="/globe.svg" alt="twitter" width={20} height={20} />
          Twitter
        </a>
        <a href="#" className="flex items-center gap-x-2">
          <Image src="/globe.svg" alt="instagram" width={20} height={20} />
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Footer;
