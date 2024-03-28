"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Benefits = () => {
  return (
    <div className="my-28 px-3">
      <motion.div
        animate={{ y: [-50, 0] }}
        transition={{ duration: 6, repeat: "Infinity" }}
      >
        <Image
          src="/ic_token_3d.png"
          width={60}
          height={60}
          className="mx-auto lg:scale-125 mb-5"
        />
      </motion.div>
      <div className="grid gap-y-4 mt-3">
        <h2 className="text-center text-white text-3xl font-bold lg:text-5xl">
          Benefits of PLX Token
        </h2>
        <p className="text-[#909AAB] text-center text-xs font-medium lg:text-base">
          Pullix Token holders benefit from an elevated user experience while
          utilizing the Pullix platform.
        </p>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-3 xl:gap-y-12 gap-x-3 gap-y-6 mt-6 lg:mt-24">
        <div className="grid gap-y-3 text-white text-center">
          <Image
            width={50}
            height={50}
            src="/ic_benefits_1.svg"
            alt=""
            className="mx-auto xl:scale-125"
          />
          <h3 className="font-semibold text-xl xl:text-2xl">
            Discounted Trading Fees
          </h3>
          <p className="text-sm">Reduce your trading costs with PLX.</p>
        </div>
        <div className="grid gap-y-3 text-white text-center">
          <Image
            width={50}
            height={50}
            src="/ic_benefits_2.svg"
            alt=""
            className="mx-auto xl:scale-125"
          />
          <h3 className="font-semibold text-xl xl:text-2xl">
            Exclusive VIP Benefits
          </h3>
          <p className="text-sm">
            Unlock custom-tailored trading conditions for VIPs.
          </p>
        </div>
        <div className="grid gap-y-3 text-white text-center">
          <Image
            width={50}
            height={50}
            src="/ic_benefits_3.svg"
            alt=""
            className="mx-auto xl:scale-125"
          />
          <h3 className="font-semibold text-xl xl:text-2xl">Cashback</h3>
          <p className="text-sm">
            Receive higher cashback on your trading activity.
          </p>
        </div>
        <div className="grid gap-y-3 text-white text-center">
          <Image
            width={50}
            height={50}
            src="/ic_benefits_4.svg"
            alt=""
            className="mx-auto xl:scale-125"
          />
          <h3 className="font-semibold text-xl xl:text-2xl">Rewards</h3>
          <p className="text-sm">Receive airdrops and exclusive bonuses.</p>
        </div>
        <div className="grid gap-y-3 text-white text-center">
          <Image
            width={50}
            height={50}
            src="/ic_benefits_5.svg"
            alt=""
            className="mx-auto xl:scale-125"
          />
          <h3 className="font-semibold text-xl xl:text-2xl">Staking</h3>
          <p className="text-sm">
            Stake your PLX tokens and receive a fixed APR.
          </p>
        </div>
        <div className="grid gap-y-3 text-white text-center">
          <Image
            width={50}
            height={50}
            src="/ic_benefits_6.svg"
            alt=""
            className="mx-auto xl:scale-125"
          />
          <h3 className="font-semibold text-xl xl:text-2xl">Governance</h3>
          <p className="text-sm">
            Stake PLX and vote on key Pullix developments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
