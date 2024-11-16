import { CircleX, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";
import cpu from "../../assets/images/png/cpu.png";
import { svgIconBannerHome } from "@/assets/images";
import CommonBanner from "../Common/CommonBanner";
const Wishlist = () => {
  return (
    <>
      {/* <CommonBanner icon={svgIconBannerHome} path={["wishlist"]} /> */}
      <div className="">
        <div className="grid place-items-center">
          <div className="w-full ">
            <div className="font-bold  pl-2  text-left border-[#E4E7E9]  border-t lg:border-l lg:border-r  text-[30px]">
              My Wishlist
            </div>
            <div className="min-w-full max-w-full overflow-x-auto ">
              <table className=" lg:border-[#E4E7E9] w-full lg:border mb-5 ">
                <thead className="w-full">
                  <tr className="bg-[#F2F4F5] h-[38px]">
                    <th className="text-[#475156] font-medium text-left w-[500px] pl-3">
                      Products
                    </th>
                    <th className="text-[#475156] font-medium w-[200px] text-center">
                      Price
                    </th>

                    <th className="text-[#475156] font-medium w-[200px] text-left">
                      Actions
                    </th>
                    <th className="w-[70px]"></th>
                  </tr>
                </thead>
                <tbody className="h-[70px]">
                  <tr>
                    <td className="">
                      <div className="flex items-center gap-2 h-[70px]">
                        <Image src={cpu} alt="product" className="w-[50px] " />
                        <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg ">
                          TIPASON – Gaming Desktop – AMD 3000G
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <span className="text-black">$999</span>
                    </td>

                    <td>
                      <button className="lg:w-[174px] lg:h-[48px] w-[100px] h-[30px] text-[12px] rounded bg-[#EB4227] uppercase text-white font-semibold flex justify-center items-center gap-2 ">
                        add to cart <ShoppingCart size={16} />
                      </button>
                    </td>
                    <td>
                      <CircleX className="cursor-pointer" />
                    </td>
                  </tr>
                  <tr>
                    <td className="">
                      <div className="flex items-center gap-2 h-[70px]">
                        <Image src={cpu} alt="product" className="w-[50px] " />
                        <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg ">
                          TIPASON – Gaming Desktop – AMD 3000G
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <span className="text-black">$999</span>
                    </td>

                    <td>
                      <button className="lg:w-[174px] lg:h-[48px] w-[100px] h-[30px] text-[12px]  rounded bg-[#EB4227] uppercase text-white font-semibold flex justify-center items-center gap-2 ">
                        add to cart <ShoppingCart size={16} />
                      </button>
                    </td>
                    <td>
                      <CircleX className="cursor-pointer" />
                    </td>
                  </tr>
                  <tr>
                    <td className="">
                      <div className="flex items-center gap-2 lg:h-[70px] h-[100px]">
                        <Image src={cpu} alt="product" className="w-[50px] " />
                        <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg ">
                          TIPASON – Gaming Desktop – AMD 3000G
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <span className="text-black">$999</span>
                    </td>

                    <td>
                      <button className="lg:w-[174px] lg:h-[48px] w-[100px] h-[30px] text-[12px] rounded bg-[#EB4227] uppercase text-white font-semibold flex justify-center items-center gap-2 ">
                        add to cart <ShoppingCart size={16} />
                      </button>
                    </td>
                    <td>
                      <CircleX className="cursor-pointer" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
