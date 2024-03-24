import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="grid gap-y-3 mt-12 lg:mt-28">
      <h2 className="text-3xl lg:text-5xl text-white font-semibold text-center px-3">
        PLX The Pullix <span className="text-[#CE7914]">Utility Token</span>
      </h2>
      <p className="text-[#909AAB] text-center text-sm px-3 lg:my-6">
        The Pullix Token offers diverse utilities, encompassing staking rewards,
        fee reductions, and participation in Pullix DAO governance.
      </p>
      <div className="grid gap-y-8 mt-8">
        <div className="grid lg:grid-cols-3 w-72 lg:w-[900px] mx-auto gap-y-6 lg:gap-x-4">
          <Link
            href="https://app.uniswap.org/swap?outputCurrency=0x1cc7047e15825f639e0752eb1b89e4225f5327f2&chain=ethereum"
            className="bg-gradient-to-r from-[#CE7A15] to-[#E2A864] p-4 rounded-lg flex justify-center items-center gap-x-3"
          >
            <p className="text-white text-center font-semibold">
              Buy PLX on Uniswap
            </p>
            <Image width={35} height={35} src="/ic_uniswap.png" alt="uniswap" />
          </Link>
          <Link
            href="https://www.bitmart.com/trade/en-US?symbol=PLX_USDT"
            className="bg-gradient-to-r from-[#CE7A15] to-[#E2A864] p-4 rounded-lg flex justify-center items-center gap-x-3"
          >
            <p className="text-white text-center font-semibold">
              Buy PLX on BitMark
            </p>
            <Image width={35} height={35} src="/ic_bitmart.png" alt="uniswap" />
          </Link>
          <Link
            href="#"
            className="bg-gradient-to-r from-[#CE7A15] to-[#E2A864] p-4 rounded-lg flex justify-center items-center gap-x-3"
          >
            <p className="text-white text-center font-semibold">
              Buy PLX on MEXC (Soon)
            </p>
            <Image width={35} height={35} src="/ic_mexc.png" alt="uniswap" />
          </Link>
        </div>
        <div className="grid lg:grid-cols-3 w-72 lg:w-[900px] mx-auto gap-y-6 lg:gap-x-4">
          <Link
            href="/wallet/connectWallet/"
            className="border border-[#B66B14] p-4 rounded-lg flex justify-center items-center gap-x-3 hover:text-white hover:bg-[#B66B14] cursor-pointer"
          >
            <p className="text-white text-center font-semibold">Staking</p>
          </Link>
          <Link
            href="/wallet/connectWallet/"
            className="border border-[#B66B14] p-4 rounded-lg flex justify-center items-center gap-x-3 hover:text-white hover:bg-[#B66B14] cursor-pointer"
          >
            <p className="text-white text-center font-semibold">
              Claim Presale Tokens
            </p>
          </Link>
          <Link
            href="/wallet/connectWallet/"
            className="border border-[#B66B14] p-4 rounded-lg flex justify-center items-center gap-x-3 hover:text-white hover:bg-[#B66B14] cursor-pointer"
          >
            <p className="text-white text-center font-semibold">View Chart</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
