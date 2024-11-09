"use client";

import {
  svgIconSidebarChangePass,
  svgIconSidebarLogout,
  svgIconSidebarMyWishlist,
  svgIconSidebarOrderHistory,
  svgIconSidebarProfile,
} from "@/assets/images";
import heart from "../../assets/images/svg/Heart.svg";
import changepass from "../../assets/images/svg/changepassword.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname()?.split("/")[2];
  return (
    <div className="border border-[#E4E7E9]">
      <Link href="/user/my-profile">
        <div
          className={cn(
            "flex h-10 gap-2 px-6 items-center",
            pathname === "my-profile"
              ? "bg-[#EB4227] text-white"
              : "bg-white text-[#666666]"
          )}
        >
          <Image
            className={pathname === "my-profile" ? " " : "filter invert"}
            src={svgIconSidebarProfile}
            alt="sidebar-profile"
          />
          <span>My Profile</span>
        </div>
      </Link>
      <Link href="/user/my-orders">
        <div
          className={cn(
            "flex h-10 gap-2 px-6 items-center",
            pathname === "my-orders"
              ? "bg-[#EB4227] text-white"
              : "bg-white text-[#666666]"
          )}
        >
          <Image
            className={
              pathname === "my-orders" ? "filter invert brightness-0 " : ""
            }
            src={svgIconSidebarOrderHistory}
            alt="sidebar-order-history"
          />
          <span>Order History</span>
        </div>
      </Link>

      <Link href="/user/my-wishlist">
        <div
          className={cn(
            "flex h-10 gap-2 px-6 items-center",
            pathname === "my-wishlist"
              ? "bg-[#EB4227] text-white"
              : "bg-white text-[#666666]"
          )}
        >
          <Image
            className={
              pathname === "my-wishlist" ? "filter invert brightness-0 " : ""
            }
            src={heart}
            alt="sidebar-my-wishlist"
          />
          <span>My Wishlist</span>
        </div>
      </Link>
      <Link href="/user/change-password">
        <div
          className={cn(
            "flex h-10 px-6 gap-2 items-center",
            pathname === "change-password"
              ? "bg-[#EB4227] text-white"
              : "bg-white text-[#666666]"
          )}
        >
          <Image
            className={
              pathname === "change-password"
                ? "filter invert brightness-0 "
                : ""
            }
            src={changepass}
            alt="sidebar-change-pass"
          />
          <span>Change Password</span>
        </div>
      </Link>

      <div
        className="flex gap-2 h-10 px-6 items-center "
        onClick={() => {
          router.push("/");
        }}
      >
        <Image src={svgIconSidebarLogout} alt="sidebar-logout" />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
