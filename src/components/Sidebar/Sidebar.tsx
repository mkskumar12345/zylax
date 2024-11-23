"use client";

import {
  svgIconSidebarChangePass,
  svgIconSidebarLogout,
  svgIconSidebarMyWishlist,
  svgIconSidebarOrderHistory,
  svgIconSidebarProfile,
} from "@/assets/images";
import allPagesRoutes from "@/constants/allPagesRoutes";
import heart from "../../assets/images/svg/Heart.svg";
import changepass from "../../assets/images/svg/changepassword.svg";
import orderhistory from "../../assets/images/svg/orderhistory.svg";
import user from "../../assets/images/svg/User.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { UserRound } from "lucide-react";
import { clearCookies } from "@/serverActions/cookies";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname()?.split("/")[2];

  return (
    <>
      <div className="border border-[#E4E7E9] max-w-[300px] w-full ">
        <Link href={allPagesRoutes.USER_PROFILE}>
          <div
            className={cn(
              "flex h-10 gap-2 px-6 items-center",
              pathname === "my-profile"
                ? "bg-[#D30200] text-white"
                : "bg-white text-[#666666]"
            )}
          >
            {/* <Image
              className={pathname === "my-profile" ? " " : "filter invert"}
              src={user}
              alt="sidebar-profile"
            /> */}
            <UserRound
              className={pathname === "my-profile" ? " " : "filter invert"}
            />
            <span>My Profile</span>
          </div>
        </Link>
        <Link href={allPagesRoutes.MY_ORDERS}>
          <div
            className={cn(
              "flex h-10 gap-2 px-6 items-center",
              pathname === "my-orders"
                ? "bg-[#D30200] text-white"
                : "bg-white text-[#666666]"
            )}
          >
            <Image
              className={
                pathname === "my-orders" ? "filter invert brightness-0 " : ""
              }
              src={orderhistory}
              alt="sidebar-order-history"
            />
            <span>Order History</span>
          </div>
        </Link>

        <Link href={allPagesRoutes.MY_WISHLIST}>
          <div
            className={cn(
              "flex h-10 gap-2 px-6 items-center",
              pathname === "my-wishlist"
                ? "bg-[#D30200] text-white"
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
        <Link href={allPagesRoutes.CHANGE_PASSWORD}>
          <div
            className={cn(
              "flex h-10 px-6 gap-2 items-center",
              pathname === "change-password"
                ? "bg-[#D30200] text-white"
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
          className="flex gap-2 h-10 px-6 cursor-pointer items-center "
          onClick={() => {
            clearCookies();
            router.refresh();
          }}
        >
          <Image src={svgIconSidebarLogout} alt="sidebar-logout" />
          <span>Logout</span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
