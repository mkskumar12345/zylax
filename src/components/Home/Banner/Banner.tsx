import {
  pngHomeBannerBottom1,
  pngHomeBannerBottom2,
  pngHomeBannerCrousel1,
  pngHomeBannerRight1,
  pngHomeBannerRight2,
} from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-secondary py-8">
      <div className="grid grid-cols-3 gap-4 container ">
        <div className="col-span-2 flex flex-col gap-4">
          <div>
            <Image src={pngHomeBannerCrousel1} alt="crousel1" />
          </div>
          <div className="flex justify-between ">
            <div className="relative h-[119px] w-[336px]">
              <Image
                src={pngHomeBannerBottom1}
                alt="bottom1"
                className="w-full h-full"
              />
              <div className="absolute flex flex-col top-1/2 transform -translate-y-1/2 left-4">
                <p className=" font-semi-bold text-[15px] w-28">
                  Sono Playgo 5 from
                  <span className="text-primary">$569</span>
                </p>
                <Link className="font-regular text-xs  " href="#">
                  Discover Now
                </Link>
              </div>
            </div>
            <div className="relative h-[119px] w-[453px]">
              <Image
                src={pngHomeBannerBottom2}
                alt="bottom2"
                className="w-full h-full"
              />
              <div className="absolute flex flex-col top-1/2 left-8 transform -translate-y-1/2 text-secondary">
                <p className="font-regular text-[15px] w-[131px]">
                  Logitek Bluetooth
                  <br />
                  <span className="text-[#FFC107]">Keyboard</span>
                </p>
                <Link className="font-regular text-xs" href="#">
                  Discover Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-cols-1 flex flex-col gap-2 ">
          <Image src={pngHomeBannerRight1} alt="right1" />
          <Image src={pngHomeBannerRight2} alt="right2" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
