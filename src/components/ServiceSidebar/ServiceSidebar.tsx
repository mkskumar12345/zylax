"use client";
import allPagesRoutes from "@/constants/allPagesRoutes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ServiceSidebar = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="border border-[#E4E7E9] max-w-[300px] w-full ">
        <Link href={allPagesRoutes.BUSINESS_IT_SUPPORT}>
          <div
            className={`flex h-10 gap-2 px-6 items-center font-semibold cursor-pointer border-b border-white ${
              pathname === allPagesRoutes.BUSINESS_IT_SUPPORT
                ? "bg-white text-[#D30200]"
                : "bg-[#D30200] text-white hover:bg-white hover:text-black"
            }`}
          >
            <span> Business It Services</span>
          </div>
        </Link>
        <Link href={allPagesRoutes.CLOUD_STORAGE_AND_BACKUP}>
          <div
            className={`flex h-10 gap-2 px-6 items-center font-semibold cursor-pointer border-b border-white ${
              pathname === allPagesRoutes.CLOUD_STORAGE_AND_BACKUP
                ? "bg-white text-[#D30200]"
                : "bg-[#D30200] text-white hover:bg-white hover:text-black"
            }`}
          >
            <span>Cloud storage and backup</span>
          </div>
        </Link>
        <Link href={allPagesRoutes.EMAIL_SUPPORT_AND_BACKUP}>
          <div
            className={`flex h-10 gap-2 px-6 items-center font-semibold cursor-pointer border-b border-white ${
              pathname === allPagesRoutes.EMAIL_SUPPORT_AND_BACKUP
                ? "bg-white text-[#D30200]"
                : "bg-[#D30200] text-white hover:bg-white hover:text-black"
            }`}
          >
            <span>Email Support and Services</span>
          </div>
        </Link>
        <Link href={allPagesRoutes.computer_repairs}>
          <div
            className={`flex h-10 gap-2 px-6 items-center font-semibold cursor-pointer border-b border-white ${
              pathname === allPagesRoutes.computer_repairs
                ? "bg-white text-[#D30200]"
                : "bg-[#D30200] text-white hover:bg-white hover:text-black"
            }`}
          >
            <span>Computer Repairs</span>
          </div>
        </Link>
        <Link href={allPagesRoutes.Laptop_Repairs_Sydney}>
          <div
            className={`flex h-10 gap-2 px-6 items-center font-semibold cursor-pointer border-b border-white ${
              pathname === allPagesRoutes.Laptop_Repairs_Sydney
                ? "bg-white text-[#D30200]"
                : "bg-[#D30200] text-white hover:bg-white hover:text-black"
            }`}
          >
            <span>Laptop Repairs Sdyney</span>
          </div>
        </Link>
        <Link href={allPagesRoutes.Mobile_Repairs}>
          <div
            className={`flex h-10 gap-2 px-6 items-center font-semibold cursor-pointer border-b border-white ${
              pathname === allPagesRoutes.Mobile_Repairs
                ? "bg-white text-[#D30200]"
                : "bg-[#D30200] text-white hover:bg-white hover:text-black"
            }`}
          >
            <span>Mobile Repairs</span>
          </div>
        </Link>
        <Link href={allPagesRoutes.tablet_repairs}>
          <div
            className={`flex h-10 gap-2 px-6 items-center font-semibold cursor-pointer border-b border-white ${
              pathname === allPagesRoutes.tablet_repairs
                ? "bg-white text-[#D30200]"
                : "bg-[#D30200] text-white hover:bg-white hover:text-black"
            }`}
          >
            <span>Tablet Repairs</span>
          </div>
        </Link>
        <Link href={allPagesRoutes.Macbook_repairs}>
          <div
            className={`flex h-10 gap-2 px-6 items-center font-semibold cursor-pointer border-b border-white ${
              pathname === allPagesRoutes.Macbook_repairs
                ? "bg-white text-[#D30200]"
                : "bg-[#D30200] text-white hover:bg-white hover:text-black"
            }`}
          >
            <span>Macbook Repairs</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServiceSidebar;
