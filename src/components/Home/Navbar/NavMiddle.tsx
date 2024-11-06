"use client";

import {
  Sheet,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  pngIconLogo,
  svgIconBag,
  svgIconPerson,
  svgIconSupport,
  svgIconTruck,
} from "@/assets/images";
import Link from "next/link";

const NavMiddle = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="  border-b border-b-[#F0F0F0]">
        <div className="md:container  p-3 flex-wrap lg:flex-nowrap  flex justify-center lg:justify-between items-center ">
          <p className="font-medium hidden md:block">
            Welcome to ZYLAX, One Stop Shop For All Your Gaming Needs!
          </p>
          <div className=" h-8  md:gap-3 items-center justify-between md:justify-normal flex  w-full lg:w-auto lg:justify-normal">
            <button className="flex gap-1 items-center h-full">
              <span>
                <Image src={svgIconTruck} alt="truck" />
              </span>
              <span className="font-semibold text-xs">Truck Order</span>
            </button>
            <button className="flex gap-1 items-center h-full">
              <span>
                <Image src={svgIconPerson} alt="person" />
              </span>
              <span className="font-semibold text-xs">Signin/Register</span>
            </button>
            <Sheet>
              <SheetTrigger className="w-6 lg:hidden block">
                <Menu />
              </SheetTrigger>
              <SheetContent side={"left"} className="bg-white">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col p-4">
                  {/* Search */}
                  <div className="flex flex-col items-start gap-4 ">
                    <div className="w-full">
                      <Input
                        className="border   bg-secondary px-4 py-2 h-full rounded-full "
                        placeholder="Search anything"
                      />
                    </div>
                    <Select>
                      <SelectTrigger className="border bg-secondary px-4 py-2 h-full rounded-full ">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Items 1</SelectItem>
                        <SelectItem value="2">items 2</SelectItem>
                        <SelectItem value="3">items 3</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="bg-black w-full text-white font-semibold rounded-full px-4 py-2">
                      <Image
                        src={svgIconSearch}
                        className="filter invert"
                        alt="search"
                      />
                      Search
                    </Button>
                  </div>

                  {/* Menu */}
                  <div className="flex flex-col items-start  text-black  py-2 font-semibold">
                    <h3>Home</h3>
                    <h3>About </h3>
                    <h3>List Categories</h3>
                    <h3>Best Seller</h3>
                    <h3>Shop</h3>
                    <h3>Blog</h3>
                    <h3>Contact</h3>
                  </div>
                </div>
                <SheetFooter>
                  <div className="flex items-center gap-2">
                    <Image src={svgIconSupport} alt="support" />
                    <div>
                      <p className="text-xs leading-3">(+021) 345 678 910</p>
                      <p className="text-xs leading-3">support@gmail.com</p>
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
            <Link href={"/"}>
              <Image src={pngIconLogo} alt="site logo" width={83} height={36} />
            </Link>
          </div>
          <div className="col-span-2 h-full hidden  items-center lg:flex">
            <NavSearch />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <div className="relative font-semibold ">
                <span className="text-xs">$0</span>
                <div className="absolute text-[6px] w-2 h-2 bg-primary text-secondary text-center rounded-full -top-1 -right-1">
                  <span>0</span>
                </div>
              </div>
              <Image src={svgIconBag} alt="support" />
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Image src={svgIconSupport} alt="support" />
              <div>
                <p className="text-xs leading-3">(+021) 345 678 910</p>
                <p className="text-xs leading-3">support@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMiddle;
