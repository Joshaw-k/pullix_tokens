"use client";
import { wallets } from "../utils/wallets";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <h1 className="text-[#CE7914] text-center font-semibold text-2xl md:text-2xl lg:text-3xl my-8">
        Wallet Connect
      </h1>
      <div className="px-10 mb-10 py-6 max-w-xl w-[90%] mx-auto bg-[rgba(48,48,48,0.3)] border border-[#B66B14] rounded-3xl">
        <h3 className="text-white mb-6">Connect to a wallet</h3>
        {wallets.map((item, index) => {
          const { icon, title } = item;
          return (
            <Link
              href={`/wallet/initialization/${index}`}
              className="flex justify-between px-6 py-3 mb-2 cursor-pointer items-center bg-[rgba(48,48,48,0.3)] hover:bg-[#CE7A15] rounded-full"
              key={index}
            >
              <div className="flex gap-x-5 items-center">
                <div className="w-3 h-3 rounded-full bg-[#F0AD4E]"></div>
                <h5 className="text-white font-semibold">{title}</h5>
              </div>
              <div className="w-[25px] h-[25px]">
                <Image
                  width={50}
                  height={50}
                  src={icon.src}
                  alt="logo.png"
                  className="w-full"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
