"use client";
import React from "react";

const NavTop = () => {
  return (
    <div className="bg-primary text-secondary  ">
      <div className="container flex justify-around items-center h-10  ">
        <div>
          <p className="font-semibold text-xs">
            FREE delivery & 40% Discount for next 3 orders! Place your 1st order
            in.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-medium text-xs">Until the end of the sale:</p>
          <div className="flex gap-2 items-center">
            <h1 className="font-bold text-lg">47</h1>
            <span className="font-regular text-xs">days</span>
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="font-bold text-lg">06</h1>
            <span className="font-regular text-xs">hours</span>
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="font-bold text-lg">57</h1>
            <span className="font-regular text-xs">minutes</span>
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="font-bold text-lg">08</h1>
            <span className="font-regular text-xs">sec.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
