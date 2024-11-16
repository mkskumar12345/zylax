"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

// import Categories from "@/components/Popup/CategoriesPopup/Categories";

const NavBottom = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="bg-primary">
      <div className="container  hidden lg:flex justify-evenly text-secondary py-2 font-semibold">
        <Link href={"/"}>Home</Link>

        {/* <div className="relative group z-50">
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
        </div> */}
        <div className="relative z-50" ref={dropdownRef}>
          <div
            className="cursor-pointer flex items-center"
            onClick={toggleDropdown}
          >
            Shop by Categories <ChevronDown className="ml-2" size={18} />
          </div>

          {isOpen && (
            <div className="absolute p-5 w-[1000px] h-[500px] flex flex-col bg-white text-primary shadow-lg mt-2 rounded-md">
              <div className="flex gap-5">
                {/* Sidebar Categories */}
                <div className="w-[200px] h-[400px]">
                  <div className="border border-[#E5E6E8] w-[200px] h-[64px] flex justify-between items-center px-4">
                    <span>Computer Accessories</span>
                    <ChevronRight size={16} />
                  </div>
                  <div className="border border-[#E5E6E8] w-[200px] h-[64px] flex justify-between items-center px-4">
                    <span>Adapters</span>
                    <ChevronRight size={16} />
                  </div>
                  <div className="border border-[#E5E6E8] w-[200px] h-[64px] flex justify-between items-center px-4">
                    <span>Batteries</span>
                    <ChevronRight size={16} />
                  </div>
                  <div className="border border-[#E5E6E8] w-[200px] h-[64px] flex justify-between items-center px-4">
                    <span>Cables</span>
                    <ChevronRight size={16} />
                  </div>
                  <div className="border border-[#E5E6E8] w-[200px] h-[64px] flex justify-between items-center px-4">
                    <span>Laptop</span>
                    <ChevronRight size={16} />
                  </div>
                  <div className="border border-[#E5E6E8] w-[200px] h-[64px] flex justify-between items-center px-4">
                    <span>Cameras</span>
                    <ChevronRight size={16} />
                  </div>
                  <div className="border border-[#E5E6E8] w-[200px] h-[64px] flex justify-between items-center px-4">
                    <span>Lighting</span>
                    <ChevronRight size={16} />
                  </div>
                </div>

                {/* Dropdown Content */}
                <div className="w-[800px] h-[400px] flex flex-wrap gap-5">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <div key={index} className="flex flex-col">
                      <span>Computer Accessories</span>
                      <span className="text-black">Cables</span>
                      <span className="text-black">Consumables</span>
                      <span className="text-black">Gaming Products</span>
                      <span className="text-black">Point of Sale (Pos)</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <Link href={"/brands"}>Shop by Brands</Link>

        <Link href={"#"}>Best Seller</Link>
        {/* <Link href={""}>Shop</Link> */}
        <Link href={"#"}>Blog</Link>
        <Link href={"/aboutus"}>About </Link>

        <Link href={"/contact"}>Contact</Link>
      </div>
    </div>
  );
};

export default NavBottom;
