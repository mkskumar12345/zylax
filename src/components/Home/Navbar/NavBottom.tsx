import React from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import Categories from "@/components/Popup/CategoriesPopup/Categories";

const NavBottom = () => {
  return (
    <div className="bg-primary">
      <div className="container  hidden lg:flex justify-evenly text-secondary py-2 font-semibold">
        <div className="relative group z-50">
          <div className="cursor-pointer flex items-center">
            Shop by Categories <ChevronDown />
          </div>
          <div className="absolute hidden p-5 w-[1000px] h-[500px] group-hover:flex flex-col bg-white text-primary shadow-lg  mt-2 rounded-md">
            <div className="flex gap-5">
              <div className="w-[200px] h-[400px]">
                <div className="border border-[#E5E6E8] w-[200px] h-[64px] flex justify-center items-center">
                  Computer Accessories <ChevronRight />
                </div>
                <div className="border border-[#E5E6E8] w-[200px] h-[64px] flex justify-center items-center">
                  Adapters <ChevronRight />
                </div>
                <div className="border border-[#E5E6E8] w-[200px] h-[64px] flex justify-center items-center">
                  Batteries <ChevronRight />
                </div>
                <div className="border border-[#E5E6E8] w-[200px] h-[64px] flex justify-center items-center">
                  Cables <ChevronRight />
                </div>
                <div className="border border-[#E5E6E8] w-[200px] h-[64px] flex justify-center items-center">
                  Laptop <ChevronRight />
                </div>
                <div className="border border-[#E5E6E8] w-[200px] h-[64px] flex justify-center items-center">
                  Cameras <ChevronRight />
                </div>
                <div className="border border-[#E5E6E8] w-[200px] h-[64px] flex justify-center items-center">
                  Lighting <ChevronRight />
                </div>
              </div>
              <div className=" w-[800px] h-[400px] flex flex-wrap gap-5">
                <div className="flex flex-col ">
                  <span>Computer Accessories</span>
                  <span className="text-black">Cables</span>
                  <span className="text-black">Consumables</span>
                  <span className="text-black">Gaming Products</span>
                  <span className="text-black">Point of Sale (Pos)</span>
                </div>
                <div className="flex flex-col ">
                  <span>Computer Accessories</span>
                  <span className="text-black">Cables</span>
                  <span className="text-black">Consumables</span>
                  <span className="text-black">Gaming Products</span>
                  <span className="text-black">Point of Sale (Pos)</span>
                </div>
                <div className="flex flex-col ">
                  <span>Computer Accessories</span>
                  <span className="text-black">Cables</span>
                  <span className="text-black">Consumables</span>
                  <span className="text-black">Gaming Products</span>
                  <span className="text-black">Point of Sale (Pos)</span>
                </div>
                <div className="flex flex-col ">
                  <span>Computer Accessories</span>
                  <span className="text-black">Cables</span>
                  <span className="text-black">Consumables</span>
                  <span className="text-black">Gaming Products</span>
                  <span className="text-black">Point of Sale (Pos)</span>
                </div>
                <div className="flex flex-col ">
                  <span>Computer Accessories</span>
                  <span className="text-black">Cables</span>
                  <span className="text-black">Consumables</span>
                  <span className="text-black">Gaming Products</span>
                  <span className="text-black">Point of Sale (Pos)</span>
                </div>
                <div className="flex flex-col ">
                  <span>Computer Accessories</span>
                  <span className="text-black">Cables</span>
                  <span className="text-black">Consumables</span>
                  <span className="text-black">Gaming Products</span>
                  <span className="text-black">Point of Sale (Pos)</span>
                </div>
                <div className="flex flex-col ">
                  <span>Computer Accessories</span>
                  <span className="text-black">Cables</span>
                  <span className="text-black">Consumables</span>
                  <span className="text-black">Gaming Products</span>
                  <span className="text-black">Point of Sale (Pos)</span>
                </div>
                <div className="flex flex-col ">
                  <span>Computer Accessories</span>
                  <span className="text-black">Cables</span>
                  <span className="text-black">Consumables</span>
                  <span className="text-black">Gaming Products</span>
                  <span className="text-black">Point of Sale (Pos)</span>
                </div>

                <div className="flex flex-col ">
                  <span>Computer Accessories</span>
                  <span className="text-black">Cables</span>
                  <span className="text-black">Consumables</span>
                  <span className="text-black">Gaming Products</span>
                  <span className="text-black">Point of Sale (Pos)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link href={"/"}>Home</Link>

        <Link href={"#"}>About </Link>

        <Link href={"#"}>About </Link>

        <div className="">
          <Categories />
        </div>

        <Link href={"#"}>Best Seller</Link>
        {/* <Link href={""}>Shop</Link> */}
        <Link href={"#"}>Blog</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/brands"}>Shop by Brands</Link>
      </div>
    </div>
  );
};

export default NavBottom;
