"use client";
import { svgIconBannerHome } from "@/assets/images";
import CommonBanner from "@/components/Common/CommonBanner";
import React, { useState } from "react";
import {
  pngProductDetailsMain,
  pngProductDetails1,
  pngProductDetails2,
  pngProductDetails3,
} from "@/assets/images";
import Image from "next/image";
import { cn } from "@/lib/utils";
const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState({
    img: pngProductDetailsMain,
    id: 1,
  });

  const allImages = [
    { img: pngProductDetailsMain, id: 1 },
    { img: pngProductDetails1, id: 2 },
    { img: pngProductDetails2, id: 3 },
    { img: pngProductDetails3, id: 4 },
    { img: pngProductDetails2, id: 5 },
    { img: pngProductDetails3, id: 6 },
  ];
  return (
    <div>
      <CommonBanner
        icon={svgIconBannerHome}
        path={["Categories", "Product Details"]}
      />
      <div className="px-3 my-8 md:container">
        <div className="grid grid-cols-2">
          <div className="">
            <div className="mb-4 w-[616px] h-[464px] flex justify-center items-center border border-[#cccccc] rounded-[5px] overflow-hidden m-auto">
              <Image src={selectedImage?.img} alt="product-details" />
            </div>
            <div className="flex justify-center gap-1">
              {allImages?.map((item) => (
                <div
                  key={item.id}
                  className={cn(
                    "w-[88px] h-[88px] flex justify-center items-center cursor-pointer border",
                    item.id == selectedImage?.id
                      ? "border-[#EB4227] "
                      : "border-[#CCCCCC] "
                  )}
                  onClick={() => setSelectedImage(item)}
                >
                  <Image src={item?.img} alt="product-details" />
                </div>
              ))}
            </div>
          </div>
          <div className=" ">daf</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
