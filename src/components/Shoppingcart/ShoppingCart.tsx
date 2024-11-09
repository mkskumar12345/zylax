import { ArrowLeft, ArrowRight, CircleX, Minus, Plus } from "lucide-react";
import React from "react";
import Image from "next/image";
import cpu from "../../assets/images/png/cpu.png";
import Link from "next/link";
import CommonBanner from "../Common/CommonBanner";
import { svgIconBannerHome } from "@/assets/images";
const ShoppingCart = () => {
  return (
    <>
      <CommonBanner icon={svgIconBannerHome} path={["Cart"]} />
      <div className="flex lg:justify-center md:flex-row flex-col  lg:items-start gap-5 mt-5 mb-5">
        <div className="">
          <div className="text-[30px] border-[#E4E7E9] border-r border-l border-t font-bold  pl-3 h-[64px] flex justify-start items-center">
            Shopping Cart
          </div>

          <div className="border-[#E4E7E9] border-t border-b lg:border-l lg:border-r h-[38px]  bg-[#F2F4F5] flex items-center ">
            <div className="text-[#475156] font-medium w-[350px] pl-4">
              Products
            </div>
            <div className="text-[#475156] font-medium w-[100px] text-center">
              Price
            </div>
            <div className="text-[#475156] font-medium w-[200px] text-center">
              Quantity
            </div>
            <div className="text-[#475156] font-medium w-[150px] text-center">
              Sub-totals
            </div>
          </div>

          <div className="flex items-center  border-[#E4E7E9] lg:border-r lg:border-l border-b">
            <div className="flex items-center gap-2 h-[70px] pl-2 w-[350px]">
              <CircleX color="#929FA5" />
              <Image src={cpu} alt="product" className="w-[50px] " />
              <div className="text-sm">TIPASON – Gaming Desktop – AMD 3000G</div>
            </div>
            <span className="w-[100px] text-center">
              <span className="text-[#929FA5] line-through">
                &nbsp;<span className="">$199</span>
              </span>
              $70
            </span>
            <div className="lg:w-[200px] w-[80px]  flex justify-center">
              <div className="border border-[#E4E7E9] rounded w-[148px] h-[48px] flex justify-center items-center gap-4">
                <span className="cursor-pointer">
                  <Minus />
                </span>
                <span className="text-[18px]">23</span>
                <span className="cursor-pointer">
                  <Plus />
                </span>
              </div>
            </div>
            <span className="w-[150px] text-center">$70</span>
          </div>
          {/* <div className="flex  items-center border-r border-l border-b">
            <div className="flex items-center gap-2 h-[70px] pl-2 w-[350px]">
              <CircleX color="#EB4227" />
              <Image src={cpu} alt="product" className="w-[50px] " />
              <div>TIPASON – Gaming Desktop – AMD 3000G</div>
            </div>
            <span className="w-[100px] text-center">
              <span className="text-[#929FA5] line-through">
                &nbsp;<span className="">$199</span>
              </span>
              $70
            </span>
            <div className="w-[200px] flex justify-center">
              <div className="border border-[#E4E7E9] rounded w-[148px] h-[48px] flex justify-center items-center gap-4">
                <span className="cursor-pointer">
                  <Minus />
                </span>
                <span className="text-[18px]">23</span>
                <span className="cursor-pointer">
                  <Plus />
                </span>
              </div>
            </div>
            <span className="w-[150px] text-center">$70</span>
          </div> */}

          <div className="flex justify-between p-4  border-r border-l border-b">
            <button className="text-[#EB4227] border border-[#EB4227] font-bold lg:w-[200px] w-[120px] text-[10px] lg:text-[18px] h-[48px] flex justify-center items-center gap-2 ">
              <ArrowLeft />
              Continue Shopping
            </button>
            <button className="text-[#EB4227] border border-[#EB4227] font-bold lg:w-[149px] w-[80px] text-[10px] lg:text-[18px] h-[48px]  ">
              Update cart
            </button>
          </div>
        </div>
        <div className="lg:w-[400px] w-[350px]">
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
            <Link href={"/billingcard"}>
              <button className="bg-[#EB4227] text-white font-bold w-full  h-[56px] flex justify-center items-center gap-2 rounded uppercase">
                Proceed to Checkout <ArrowRight />
              </button>
            </Link>
          </div>
          <div className="border-[#E4E7E9] border mt-5 flex flex-col gap-5 p-5">
            <div className="text-[30px] font-bold border-b ">Coupon Code</div>
            <input
              type="email"
              className="w-full h-[44px] border-[#E4E7E9] border pl-4"
              placeholder="Email address"
            />
            <button className="bg-[#EB4227] text-white font-bold   h-[48px] w-[161px] rounded uppercase">
              Apply Coupon
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
