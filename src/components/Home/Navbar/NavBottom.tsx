import React from "react";
import Link from "next/link";

const NavBottom = () => {
  return (
    <div className="bg-primary">
      <div className="container  hidden lg:flex justify-evenly text-secondary py-2 font-semibold">
        <h3>Home</h3>
        <h3>About </h3>
        <h3>List Categories</h3>
        <h3>Best Seller</h3>
        <h3>Shop</h3>
        <h3>Blog</h3>
        <h3>Contact</h3>
        <Link href={"/brands"}>
          <h3>Shop by Brands</h3>
        </Link>
      </div>
    </div>
  );
};

export default NavBottom;
