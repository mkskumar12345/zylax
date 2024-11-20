"use client";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavSearch from "./NavSearch";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { svgIconSearch } from "@/assets/images";
import { Button } from "@/components/ui/button";
import {
  pngIconLogo,
  svgIconBag,
  svgIconPerson,
  svgIconSupport,
  svgIconTruck,
} from "@/assets/images";
import Link from "next/link";

import Signup from "@/components/Popup/Signup/Signup";
import Login from "@/components/Popup/Login/Login";
import allPagesRoutes from "@/constants/allPagesRoutes";
import { useSelector } from "react-redux";
import { selectCartItems } from "@/store/slices/cartSlice";

const NavMiddle = ({ authToken }: { authToken: string | undefined }) => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="flex flex-col gap-1">
      <div className="border-b border-b-[#F0F0F0]">
        <div className="md:container p-3 flex-wrap lg:flex-nowrap flex justify-center lg:justify-between items-center ">
          <p className="font-medium hidden md:block">
            Welcome to ZYLAX, One Stop Shop For All Your Gaming Needs!
          </p>
          <div className="h-8 md:gap-3 items-center justify-between md:justify-normal flex w-full lg:w-auto lg:justify-normal">
            <button className="flex gap-1 items-center h-full">
              <span>
                <Image title="Truck Order" src={svgIconTruck} alt="truck" />
              </span>
              <span className="font-semibold text-xs">Track Order</span>
            </button>
            <div className="flex items-center h-full">
              <span title="My Profile">
                <Link
                  href={allPagesRoutes.USER_PROFILE}
                  className="flex gap-1 items-center"
                >
                  <Image src={svgIconPerson} alt="person" />
                  {authToken && (
                    <span className="text-xs font-semibold">My Profile</span>
                  )}
                </Link>
              </span>
              {!authToken && (
                <>
                  <Login />/ <Signup />
                </>
              )}
            </div>
            <Sheet>
              <SheetTrigger className="w-6 lg:hidden block">
                <Menu />
              </SheetTrigger>
              <SheetContent
                side={"left"}
                className="bg-white flex flex-col justify-between "
              >
                <div>
                  <SheetHeader className="">
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col p-4">
                    {/* Search */}
                    <div className="flex flex-col items-start gap-4 ">
                      <div className="w-full">
                        <Input
                          className="border bg-secondary px-4 py-2 h-full rounded-full "
                          placeholder="Search For products,categories..."
                        />
                      </div>
                      {/* <Select>
                      <SelectTrigger className="border bg-secondary px-4 py-2 h-full rounded-full ">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Items 1</SelectItem>
                        <SelectItem value="2">items 2</SelectItem>
                        <SelectItem value="3">items 3</SelectItem>
                      </SelectContent>
                    </Select> */}
                      <Button
                        title="Search"
                        className="bg-black w-full text-white font-semibold rounded-full px-4 py-2"
                      >
                        <Image
                          src={svgIconSearch}
                          className="filter invert"
                          alt="search"
                        />
                        Search
                      </Button>
                    </div>

                    {/* Menu */}
                    <div className="flex flex-col mt-4 items-start text-black py-2 font-semibold">
                      <Link title="Home" href={allPagesRoutes.HOME}>
                        <SheetClose>
                          <h3>Home</h3>
                        </SheetClose>
                      </Link>
                      <Link
                        title="Shop By Categories"
                        href={allPagesRoutes.PRODUCTS}
                      >
                        <SheetClose>
                          <h3>Shop By Categories</h3>
                        </SheetClose>
                      </Link>
                      <Link title="Shop by Brands" href={allPagesRoutes.BRANDS}>
                        <SheetClose>
                          <h3>Shop by Brands</h3>{" "}
                        </SheetClose>
                      </Link>
                      {/* <Link href={"/#best-seller"}>
                        <SheetClose>
                          <h3>Best Seller</h3>
                        </SheetClose>
                      </Link> */}
                      <Link title="About us" href={allPagesRoutes.ABOUT_US}>
                        <SheetClose>
                          <h3>About Us</h3>
                        </SheetClose>
                      </Link>

                      {/* <h3>Blog</h3> */}
                      <Link title="Contact us" href={allPagesRoutes.CONTACT_US}>
                        <SheetClose>
                          <h3>Contact</h3>{" "}
                        </SheetClose>
                      </Link>
                    </div>
                  </div>
                </div>
                <SheetFooter>
                  <div className="flex gap-2">
                    <Image src={svgIconSupport} alt="support" />
                    <div className="flex flex-col gap-2">
                      <Link
                        href={"tel:+021345678910"}
                        className="text-xs leading-3"
                      >
                        (+021) 345 678 910
                      </Link>
                      <Link
                        href={"mailto:support@gmail.com"}
                        className="text-xs leading-3"
                      >
                        support@gmail.com
                      </Link>
                    </div>
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-2 md:container px-3 pb-2 lg:h-[49px]">
        <div className="grid md:grid-cols-3 w-full">
          <div className="col-span-1">
            <Link href={allPagesRoutes.HOME}>
              <Image
                src={pngIconLogo}
                title="Site Logo"
                alt="site logo"
                width={83}
                height={36}
              />
            </Link>
          </div>
          <div className="col-span-2 h-full hidden items-center lg:flex">
            <NavSearch />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="flex items-center gap-6">
            <Link href={allPagesRoutes.CART} title="Cart">
              <div className="flex gap-2">
                <span className="text-xs">$0</span>
                <div className="relative font-semibold">
                  <Image src={svgIconBag} alt="support" />
                  <div className="absolute text-[8px] flex justify-center items-center w-3 h-3 bg-primary text-secondary text-center rounded-full -top-1 -right-1">
                    <span>{cartItems?.length}</span>
                  </div>
                </div>
              </div>
            </Link>
            <div className="hidden sm:flex items-center gap-2">
              <Image src={svgIconSupport} alt="support" />
              <div className="flex flex-col gap-2" title="Contact us">
                <Link href={"tel:+021345678910"} className="text-xs leading-3">
                  (+021) 345 678 910
                </Link>
                <Link
                  href={"mailto:support@gmail.com"}
                  className="text-xs leading-3"
                >
                  support@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMiddle;
