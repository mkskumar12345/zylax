import { ArrowLeft, ArrowRight, CircleX, Minus, Plus } from "lucide-react";
import React from "react";
import Image from "next/image";
import cpu from "../../assets/images/png/cpu.png";
import CommonBanner from "../Common/CommonBanner";
import { svgIconBannerHome } from "@/assets/images";
const ShoppingCart = () => {
  return (
    <>
      <CommonBanner icon={svgIconBannerHome} path={[{ title: "Shopping Cart", href: "/cart" }]} />

      <div className="flex lg:justify-center lg:flex-row flex-col  gap-5 mt-5 mb-5">
        <div>
          <div className="overflow-x-auto">
            <div className="text-[30px] w-[800px] font-bold border-[#E4E7E9] border-l border-r border-t pl-3 h-[64px] flex justify-start items-center">
              Shopping Cart
            </div>
            <table className="border-[#E4E7E9] border w-[800px] ">
              <thead>
                <tr className="bg-[#F2F4F5] h-[38px]">
                  <th className="text-[#475156] font-medium text-left pl-3">
                    Products
                  </th>
                  <th className="text-[#475156] font-medium">Price</th>
                  <th className="text-[#475156] font-medium">Quantity</th>
                  <th className="text-[#475156] font-medium">Sub-Total</th>
                </tr>
              </thead>
              <tbody className="h-[70px]">
                <tr>
                  <td>
                    <div className="flex items-center gap-2 h-[70px] pl-2">
                      <CircleX color="#929FA5" />
                      <Image src={cpu} alt="product" className="w-[50px] " />
                      <div>TIPASON – Gaming Desktop – AMD 3000G</div>
                    </div>
                  </td>
                  <td className="text-center">
                    <span className="text-[#929FA5] line-through">
                      &nbsp;<span className="">$199</span>
                    </span>
                    $70
                  </td>
                  <td className="flex justify-center items-center h-[70px]">
                    <div className="border border-[#E4E7E9] rounded w-[148px] h-[48px] flex justify-center items-center gap-4">
                      <span className="cursor-pointer">
                        <Minus />
                      </span>
                      <span className="text-[18px]">23</span>
                      <span className="cursor-pointer">
                        <Plus />
                      </span>
                    </div>
                  </td>
                  <td className="text-center">$70</td>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center gap-2 h-[70px] pl-2">
                      <CircleX color="#EE5858" />
                      <Image src={cpu} alt="product" className="w-[50px] " />
                      <div>TIPASON – Gaming Desktop – AMD 3000G</div>
                    </div>
                  </td>
                  <td className="text-center">
                    <span className="text-[#929FA5] line-through">
                      &nbsp;<span className="">$199</span>
                    </span>
                    $70
                  </td>
                  <td className="flex justify-center items-center h-[70px]">
                    <div className="border border-[#E4E7E9] rounded w-[148px] h-[48px] flex justify-center items-center gap-4">
                      <span className="cursor-pointer">
                        <Minus />
                      </span>
                      <span className="text-[18px]">23</span>
                      <span className="cursor-pointer">
                        <Plus />
                      </span>
                    </div>
                  </td>
                  <td className="text-center">$70</td>
                </tr>
              </tbody>
            </table>
            <div className="w-[800px] border-[#E4E7E9] border-l border-r border-b  flex justify-between p-4  ">
              <button className="text-[#EB4227] border border-[#EB4227] font-bold w-[200px] h-[48px] flex justify-center items-center gap-2 ">
                {" "}
                <ArrowLeft />
                Continue Shopping
              </button>
              <button className="text-[#EB4227] border border-[#EB4227] font-bold w-[149px] h-[48px]  ">
                Update cart
              </button>
            </div>
          </div>
        </div>
        <div className="w-[400px]">
          <div className="border-[#E4E7E9] border p-5 flex flex-col gap-2">
            <span className="text-[30px] font-bold">Cart Total</span>

            <div className="flex justify-between">
              <span className="text-[#5F6C72]">Sub-total</span>
              <span className="text-black font-semibold">$320</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#5F6C72]">Shipping</span>
              <span className="text-black font-semibold">Free</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#5F6C72]">Discount</span>
              <span className="text-black font-semibold">$32</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#5F6C72]">Tax</span>
              <span className="text-black font-semibold">$32.00</span>
            </div>
            <hr />

            <div className="flex justify-between">
              <span className="text-[#5F6C72]">Total</span>
              <span className="font-semibold text-[20px]">$3223 USD</span>
            </div>

            <button className="bg-[#EB4227] text-white font-bold  h-[56px] flex justify-center items-center gap-2 rounded uppercase">
              Proceed to Checkout <ArrowRight />
            </button>
          </div>
          <div className="border-[#E4E7E9] border mt-5 flex flex-col gap-5 p-5">
            <div className="text-[30px] font-bold border-b ">Coupon Code</div>
            <input
              type="email"
              className="w-full h-[44px] border-[#E4E7E9] border pl-4"
              placeholder="Email address"
            />
            <button className="bg-[#EB4227] text-white font-bold  h-[48px] w-[161px] rounded uppercase">
              Apply Coupon
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
