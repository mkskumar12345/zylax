import {
  pngBestSellerCpu,
  pngGBMicroAtx,
  svgIcon1Star,
  svgIcon5Star,
  svgIconBestArivalHeart,
  svgIconCardHeart,
} from "@/assets/images";
import { useGetProductsQuery } from "@/store/apiServices/productsApi";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const BestArrival = () => {
  const { data: products, isLoading } = useGetProductsQuery({
    page: 1,
    items_per_page: 10,
  });
  return (
    <div className="md:container px-3">
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl ml-4">Best Arrivals</h1>
        <button className="flex gap-2 font-semibold text-sm items-center border-[#E5E7EB] border bg-white mx-1 p-1 px-3 rounded">
          <span className=""> View All</span>
          <span>
            <MoveRight />
          </span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-12 md:grid-col-4  lg:grid-cols-4 xl:grid-cols-5  mt-8 w-full gap-8  ">
        {products?.data?.length > 0 ? (
          products?.data?.map((product: any) => (
            <div
              key={`best-arrival-${product?.id}`}
              className="bg-white  card w-full border border-[#99999999] rounded-xl"
            >
              <div className=" leading-4 text-center  font-semibold text-lg  flex items-center p-4 ">
                {product?.name}
              </div>
              <div className="flex gap-2 justify-center">
                <Image src={svgIcon5Star} className="h-3" alt="5star" />
                <span className="font-regular text-xs">(3)</span>
              </div>
              <div className="flex justify-center items-center">
                <Image src={pngGBMicroAtx} alt="" className="w-36 h-36 " />
              </div>
              <div className="flex items-center justify-between p-4 ">
                <h2 className="text-[#EB4227] font-semibold text-lg">
                  ${product?.ex_gst_price}
                </h2>
                <h2 className="line-through font-semibold text-[13px] text-[#666666]">
                  $159.00
                </h2>
                <div className="py-1 px-2 rounded-[10px] bg-[#EB4227] text-white text-xs">
                  45% OFF
                </div>
              </div>
              <div className="flex justify-between p-4 items-center">
                <div className="font-medium text-xs gap-2 flex items-center">
                  <span className="text-black">1,897</span>
                  <span className="text-[#666666]">Purchases</span>
                </div>
                <div>
                  <Image src={svgIconBestArivalHeart} alt="" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Loading</p>
        )}
      </div>
    </div>
  );
};

export default BestArrival;
