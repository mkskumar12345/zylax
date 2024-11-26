"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import allPagesRoutes from "@/constants/allPagesRoutes";
import categoriesList from "@/assets/json/navigation.json";

const NavBottom = ({ authToken }: { authToken: string | undefined }) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState<any>(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const fetchNavigation = async () => {
    const data = categoriesList; // TODO : Fetch navigation menu from api
    const newNav = [];
    for (let category of data) {
      if (category.parent_id == 0) {
        newNav.push({ ...category, child: categoriesList.filter((item: any) => item.parent_id === category.id) })
      }
    }
    setCategories(newNav);
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

    fetchNavigation();
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("click", closeServices);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("click", closeServices);
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
            <div className="absolute p-5 w-[1200px] flex flex-col bg-white text-primary shadow-lg mt-2 rounded-md">
              <div className="grid grid-cols-4 gap-2">
                {categories && categories.map((item: any, indax: any) => {
                  return (
                    <div className="flex">
                      <img src="https://imagecdn.jw.com.au/media/snowdog/menu/node/l/a/laptops-tablets-menu.png" alt="image" className="w-[50px] h-[50px] pr-2" />
                      <div className="flex flex-col">
                        <span className="text-2xl font-semibold">{item.name}</span>
                        <span className="text-sm text-gray-400 line-clamp-2" contentEditable='true' dangerouslySetInnerHTML={{ __html: item.description }}></span>
                      </div>
                    </div>
                  );
                })}
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
                Email Support And Services
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
