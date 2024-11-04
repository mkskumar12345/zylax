import { pngContactBanner } from "@/assets/images";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative">
      <Image src={pngContactBanner} alt="contact-banner" />
      <div className="absolute text-white top-1/4 container">
        <h1 className="font-semibold text-2xl leading-6 md:text-4xl md:leading-9 lg:text-5xl lg:leading-[48px] xl:text-[64px] xl:leading-[64px] ">
          Contact
        </h1>
        <li className="leading-4">Home/Contact</li>
      </div>
    </div>
  );
};

export default Banner;
