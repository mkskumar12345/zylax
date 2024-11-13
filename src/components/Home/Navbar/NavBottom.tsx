import React from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import Categories from "@/components/Popup/CategoriesPopup/Categories";

const NavBottom = () => {
  return (
    <div className="bg-primary">
      <div className="container  hidden lg:flex justify-evenly text-secondary py-2 font-semibold">
        <Link href={"/"}>Home</Link>
        <Link href={"#"}>About </Link>
        <div className="">
          <Categories />
        </div>

        <Link href={""}>Best Seller</Link>
        <Link href={""}>Shop</Link>
        <Link href={""}>Blog</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/brands"}>Shop by Brands</Link>
      </div>
    </div>
  );
};

export default NavBottom;
