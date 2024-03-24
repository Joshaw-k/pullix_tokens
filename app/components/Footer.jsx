import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-10 lg:mt-20 px-5 mb-2">
      <Image src="/ic_logo.svg" alt="pullix_logo" width={150} height={150} />
      <div className="text-white mt-10">
        <h4>Socials</h4>
        <div className="grid grid-cols-4 w-72 mt-6">
          <Image width={25} height={25} src="/ic_x.svg" alt="" />
          <Image width={25} height={25} src="/tc_telegram.svg" alt="" />
          <Image width={25} height={25} src="/ic_discord.svg" alt="" />
          <Image width={25} height={25} src="/ic_instagram.svg" alt="" />
        </div>
      </div>
      <div className="text-white mt-10 grid gap-y-8 sm:grid-cols-3">
        <div className="grid gap-y-3">
          <h5 className="font-semibold">Markets</h5>
          <div className="text-sm">
            <p>Forex</p>
            <p>Cryptocurrencies</p>
            <p>Indices</p>
            <p>Commodities</p>
          </div>
        </div>
        <div className="grid gap-y-3">
          <h5 className="font-semibold">Platform</h5>
          <div className="text-sm">
            <p>Web-Trader Pro</p>
            <p>MT5 (coming soon)</p>
          </div>
        </div>
        <div className="grid gap-y-3">
          <h5 className="font-semibold">Promotions</h5>
          <div className="text-sm">
            <p>25% Welcome Bonus</p>
            <p>Rewards Hubs</p>
            <p>Referral Program</p>
          </div>
        </div>
        <div className="grid gap-y-3">
          <h5 className="font-semibold">PLX Token</h5>
          <div className="text-sm">
            <p>Staking</p>
            <p>Claim</p>
            <p>Presale Dashboard</p>
          </div>
        </div>
        <div className="grid gap-y-3">
          <h5 className="font-semibold">Company</h5>
          <div className="text-sm">
            <p>About Us</p>
            <p>Help Center</p>
            <p>Complaints</p>
            <p>Contacts</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
      <p className="text-center text-[#909AAB] text-sm mt-8 font-semibold">
        2024 Pullix.io. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
