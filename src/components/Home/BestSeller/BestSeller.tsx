import {
  pngBestSellerCpu,
  pngBestSellerGamingPc,
  pngBestSellerPc,
  pngBestSellerProcessor,
  pngHomeBannerRight1,
  pngHomeBannerRight2,
  svgIcon1Star,
  svgIconCardHeart,
  svgIconLeftArrow,
  svgIconRightArrow,
} from "@/assets/images";
import Image from "next/image";
import React from "react";

const BestSeller = () => {
  return (
    <div className="bg-secondary py-16">
      <div className="flex xl:flex-nowrap gap-6 md:container mx-3 justify-between flex-wrap">
        <div className="xl:basis-4/12   w-full">
          <div className="flex flex-col gap-4 mb-4">
            <p className="text-[#666666] text-xs font-medium">
              amazon award-winning monitor
            </p>
            <h1 className="font-bold text-3xl">
              ViewSonic VX2758A-2K-PRO-3 27{" "}
              <span className="font-medium text-3xl ">Inch 240Hz...</span>
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium w-24 text-[#666666]">
                Starting at Price
              </span>
              <span className="text-[#009900] font-bold text-[26px]">
                $1,590
              </span>
            </div>
          </div>
          <div className="h-[291px] w-full ">
            <Image
              src={pngBestSellerGamingPc}
              className="h-full max-w-full"
              alt="best-seller-monitor"
            />
          </div>
        </div>
        <div className="xl:basis-6/12 lg:basis-12/12 w-full">
          <div className="mt-4">
            <div className="flex justify-between">
              <h1 className="font-bold text-3xl">Best Sellers</h1>
              <div className="flex gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white  ">
                  <Image src={svgIconLeftArrow} alt="" />
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white  ">
                  <Image src={svgIconRightArrow} alt="" />
                </span>
              </div>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap gap-4 mt-12">
              <div className="bg-white card w-full border border-[#99999999] rounded-xl">
                <div className="flex p-4 justify-between items-center">
                  <span className="border-[#D30200] text-xs font-medium text-[#D30200] border-2 rounded-full py-2 px-4 ">
                    0% Installment
                  </span>
                  <span>
                    <Image src={svgIconCardHeart} alt="" />
                  </span>
                </div>
                <div className="flex justify-center items-center">
                  <Image src={pngBestSellerCpu} alt="" className="w-36 h-36 " />
                </div>
                <div className="h-20 bg-gradient-to-b font-semibold text-lg leading-4 flex items-center p-4 from-white from-5% via-[#a1a1a1] via-50% to-white  to-95%">
                  IPASON - Gaming Desktop - AMD 3000G
                </div>
                <div className="flex gap-2 px-4">
                  <span className="flex gap-2">
                    <Image src={svgIcon1Star} alt="star" />
                    <Image src={svgIcon1Star} alt="star" />
                    <Image src={svgIcon1Star} alt="star" />
                    <Image src={svgIcon1Star} alt="star" />
                    <Image src={svgIcon1Star} alt="star" />
                  </span>
                  <span className="font-regular text-[13px]">(2)</span>
                </div>
                <h2 className="px-4 mt-2 font-medium text-xl mb-4">
                  $325.00 - $410.00
                </h2>
              </div>
              <div className="bg-white card w-full border border-[#99999999] rounded-xl">
                <div className="flex p-4 justify-between items-center">
                  <span className="uppercase text-xs bg-[#009900] font-medium text-[#ffffff] rounded-full py-2 px-6">
                    top rated
                  </span>
                  <span>
                    <Image src={svgIconCardHeart} alt="" />
                  </span>
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src={pngBestSellerProcessor}
                    alt=""
                    className="w-36 h-36 "
                  />
                </div>
                <div className="h-20 bg-gradient-to-b font-semibold text-lg leading-4 flex items-center p-4 from-white from-5% via-[#a1a1a1] via-50% to-white  to-95%">
                  IPASON - Gaming Desktop - AMD 3000G
                </div>
                <div className="flex gap-2 px-4">
                  <span className="flex gap-2">
                    <Image src={svgIcon1Star} alt="star" />
                    <Image src={svgIcon1Star} alt="star" />
                    <Image src={svgIcon1Star} alt="star" />
                    <Image src={svgIcon1Star} alt="star" />
                    <Image src={svgIcon1Star} alt="star" />
                  </span>
                  <span className="font-regular text-[13px]">(2)</span>
                </div>
                <h2 className="px-4 mt-2 font-medium text-xl mb-4">
                  $325.00 - $410.00
                </h2>
              </div>
              <div className="bg-white card w-full border border-[#99999999] rounded-xl">
                <div className="flex p-4 justify-between items-center">
                  <span className=" text-xs bg-[#41C2F2] font-medium text-[#ffffff] rounded-full py-2 px-6">
                    NEW
                  </span>
                  <span>
                    <Image src={svgIconCardHeart} alt="" />
                  </span>
                </div>
                <div className="flex justify-center items-center">
                  <Image src={pngBestSellerPc} alt="" className="w-36 h-36 " />
                </div>
                <div className="h-20 bg-gradient-to-b font-semibold text-lg leading-4 flex items-center p-4 from-white from-5% via-[#a1a1a1] via-50% to-white  to-95%">
                  IPASON - Gaming Desktop - AMD 3000G
                </div>
                <div className="flex gap-2 px-4">
                  <span className="flex gap-2">
                    <Image src={svgIcon1Star} alt="star" />
                    <Image src={svgIcon1Star} alt="star" />
                    <Image src={svgIcon1Star} alt="star" />
                    <Image src={svgIcon1Star} alt="star" />
                    <Image src={svgIcon1Star} alt="star" />
                  </span>
                  <span className="font-regular text-[13px]">(2)</span>
                </div>
                <h2 className="px-4 mt-2 font-medium text-xl mb-4">
                  $325.00 - $410.00
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
