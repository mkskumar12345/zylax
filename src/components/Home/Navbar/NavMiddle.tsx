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
import { ArrowLeft, ArrowRight, Menu, MoveRight } from "lucide-react";
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
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "@/store/slices/cartSlice";
import { TOGGLE } from "@/store/slices/popupSlice";
import { popupTypes } from "@/components/Popup/popupTypes";
import { RootState } from "@/store/store";

const NavMiddle = ({ authToken }: { authToken: string | undefined }) => {
  const dispatch = useDispatch();
  const isPopupOpen = useSelector((state: RootState) => state.popups.ISOPEN);
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
                  <div className="flex flex-col p-2 px-0">
                    {/* Search */}
                    {/* <div className="flex flex-col items-start gap-4 ">
                      <div className="w-full">
                        <Input
                          className="border bg-secondary px-4 py-2 h-full rounded "
                          placeholder="Search For products,categories..."
                        />
                      </div>
                      <Button
                        title="Search"
                        className="bg-black w-full text-white font-semibold rounded px-4 py-2"
                      >
                        <Image
                          src={svgIconSearch}
                          className="filter invert"
                          alt="search"
                        />
                        Search
                      </Button>
                    </div> */}

                    {/* Menu */}
                    <div className="flex flex-col  items-start text-black py-2 font-semibold">
                      <div className="flex flex-col gap-1 w-full ">
                        <Link
                          title="Home"
                          href={allPagesRoutes.HOME}
                          className="p-1 bg-[#f6f6f6]"
                        >
                          <SheetClose>
                            <h3>Home</h3>
                          </SheetClose>
                        </Link>
                        <h3
                          className="flex gap-2 hover:bg-[#e6e6e6] hover:text-primary p-1 px-2 bg-[#f6f6f6]"
                          onClick={() =>
                            dispatch(
                              TOGGLE(
                                isPopupOpen === popupTypes.CLOSE
                                  ? popupTypes.CATEGORIES
                                  : popupTypes.CLOSE
                              )
                            )
                          }
                        >
                          Shop <MoveRight />
                        </h3>
                        <Link
                          className="p-1 px-2 hover:bg-[#e6e6e6] hover:text-primary bg-[#f6f6f6]"
                          title="Shop By Categories"
                          href={allPagesRoutes.PRODUCTS}
                        >
                          <SheetClose>
                            <h3>Products</h3>
                          </SheetClose>
                        </Link>
                        <Link
                          className="p-1 px-2 hover:bg-[#e6e6e6] hover:text-primary bg-[#f6f6f6]"
                          title="Shop by Brands"
                          href={allPagesRoutes.BRANDS}
                        >
                          <SheetClose>
                            <h3>Shop by Brands</h3>{" "}
                          </SheetClose>
                        </Link>

                        <Link
                          className="p-1 px-2 hover:bg-[#e6e6e6] hover:text-primary bg-[#f6f6f6]"
                          title="About us"
                          href={allPagesRoutes.ABOUT_US}
                        >
                          <SheetClose>
                            <h3>About Us</h3>
                          </SheetClose>
                        </Link>

                        <Link
                          className="p-1 px-2 hover:bg-[#e6e6e6] hover:text-primary bg-[#f6f6f6]"
                          title="Contact us"
                          href={allPagesRoutes.CONTACT_US}
                        >
                          <SheetClose>
                            <h3>Contact</h3>{" "}
                          </SheetClose>
                        </Link>
                      </div>
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

      <div className="flex justify-between gap-2 pb-1 md:container px-3  lg:h-[50px]">
        <div className="grid md:grid-cols-6 w-full items-center">
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
          <div className="col-span-5 h-full hidden items-center lg:flex">
            <NavSearch />
          </div>
        </div>
        <div className="w-[300px] flex justify-end">
          <div className="flex items-center gap-6">
            <Link href={allPagesRoutes.CART} title="Cart">
              <div className="flex gap-2">
                {/* <span className="text-xs">$0</span> */}
                <div className="relative font-semibold">
                  <Image
                    src={svgIconBag}
                    alt="support"
                    className="w-[24px] h-[24px]"
                  />
                  <div className="absolute text-[10px] flex justify-center items-center w-4 h-4 bg-primary text-secondary text-center rounded-full -top-1 -right-1">
                    <span>{cartItems?.length || 0}</span>
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
