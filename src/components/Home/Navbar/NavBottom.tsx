"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import allPagesRoutes from "@/constants/allPagesRoutes";

const NavBottom = ({ authToken }: { authToken: string | undefined }) => {
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

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
  };

  const closeServices = (e: MouseEvent) => {
    if (
      servicesRef.current &&
      !servicesRef.current.contains(e.target as Node)
    ) {
      setIsServicesOpen(false);
    }
  };

  const handleLinkClick = () => {
    setIsServicesOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", closeServices);
    return () => {
      document.removeEventListener("click", closeServices);
    };
  }, []);
  return (
    <div className="bg-primary">
      <div className="container  hidden lg:flex justify-evenly text-secondary py-2 font-semibold">
        <Link href={allPagesRoutes.HOME} title="Home">
          Home
        </Link>

        <div className="relative z-50" ref={dropdownRef}>
          <div
            className="cursor-pointer flex items-center"
            onClick={toggleDropdown}
          >
            Shop by Categories <ChevronDown className="ml-1" size={18} />
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
        <div className="relative" ref={servicesRef}>
          <button
            onClick={toggleServices}
            className="dropdown-toggle flex items-center"
          >
            Services <ChevronDown className="ml-1" size={18} />
          </button>
          {isServicesOpen && (
            <div className="absolute mt-2 w-56 bg-white border border-gray-200 shadow-md rounded-md z-10">
              <Link
                href={allPagesRoutes.BUSINESS_IT_SUPPORT}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-black hover:text-[#D30200] hover:bg-slate-100"
              >
                Business IT support
              </Link>
              <Link
                href={allPagesRoutes.CLOUD_STORAGE_AND_BACKUP}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-black hover:text-[#D30200] hover:bg-slate-100"
              >
                Cloud Storage and Backup
              </Link>
              <Link
                href={allPagesRoutes.EMAIL_SUPPORT_AND_BACKUP}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-black hover:text-[#D30200] hover:bg-slate-100"
              >
                Email Ssupport And Services
              </Link>
              <Link
                href={allPagesRoutes.computer_repairs}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-black hover:text-[#D30200] hover:bg-slate-100"
              >
                Computer Repairs
              </Link>
              <Link
                href={allPagesRoutes.Laptop_Repairs_Sydney}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-black hover:text-[#D30200] hover:bg-slate-100"
              >
                Laptop Repairs Sydney
              </Link>
              <Link
                href={allPagesRoutes.Mobile_Repairs}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-black hover:text-[#D30200] hover:bg-slate-100"
              >
                Mobile Repairs
              </Link>
              <Link
                href={allPagesRoutes.tablet_repairs}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-black hover:text-[#D30200] hover:bg-slate-100"
              >
                Tablet Repairs
              </Link>
              <Link
                href={allPagesRoutes.Macbook_repairs}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-black hover:text-[#D30200] hover:bg-slate-100"
              >
                Macbook Repairs
              </Link>
            </div>
          )}
        </div>
        <Link href={allPagesRoutes?.PRODUCTS} title="products">
          Products
        </Link>
        <Link href={allPagesRoutes.BRANDS} title="shop by brands">
          Shop by Brands
        </Link>
        <Link href={"/#best-seller"} title="best seller">
          Best Seller
        </Link>
        {/* <Link href={"#"}>Blog</Link> */}
        <Link href={allPagesRoutes.ABOUT_US} title="about us">
          About Us
        </Link>

        <Link href={allPagesRoutes?.CONTACT_US} title="Contact us">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default NavBottom;
