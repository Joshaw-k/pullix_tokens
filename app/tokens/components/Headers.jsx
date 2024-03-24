import React from "react";
import Announcement from "./Announcement";
import Image from "next/image";
import Link from "next/link";

const Headers = () => {
  return (
    <div>
      <Announcement />
      <div className="px-5 mt-2 md:mt-6">
        <div className="flex justify-between items-center">
          <Link href="/tokens">
            <Image
              src="/ic_logo.svg"
              alt="pullix_logo"
              width={100}
              height={100}
            />
          </Link>
          <Image
            src="/ic_menu.svg"
            alt="hamburger"
            width={50}
            height={50}
            className="scale-50 lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Headers;
