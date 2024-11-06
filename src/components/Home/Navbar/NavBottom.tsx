import Link from "next/link";
import React from "react";

const NavBottom = () => {
  return (
    <div className="bg-primary">
      <div className="container  hidden lg:flex justify-evenly text-secondary py-2 font-semibold">
        <Link href={"/"}>Home</Link>
        <Link href={""}>About </Link>
        <Link href={"/categories"}>List Categories</Link>
        <Link href={""}>Best Seller</Link>
        <Link href={""}>Shop</Link>
        <Link href={""}>Blog</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </div>
  );
};

export default NavBottom;
