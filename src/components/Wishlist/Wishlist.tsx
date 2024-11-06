import { CircleX, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";
import cpu from "../../assets/images/png/cpu.png";

const Wishlist = () => {
  return (
    <div className="">
      <div className="grid place-items-center mt-5">
        <div>
          <div className="font-bold  pl-2  text-left border-[#E4E7E9]  border-t border-l border-r  text-[30px]">
            wishlist
          </div>

          <table className=" border-[#E4E7E9] border mb-5 ">
            <thead>
              <tr className="bg-[#F2F4F5] h-[38px]">
                <th className="text-[#475156] font-medium text-left w-[500px] pl-3">
                  Products
                </th>
                <th className="text-[#475156] font-medium w-[200px]">Price</th>
                <th className="text-[#475156] font-medium w-[200px]">
                  Stock Status
                </th>
                <th className="text-[#475156] font-medium w-[200px] text-left">
                  Actions
                </th>
                <th className="w-[70px]"></th>
              </tr>
            </thead>
            <tbody className="h-[70px]">
              <tr>
                <td className="">
                  <div className="flex items-center gap-2 h-[70px]">
                    <Image src={cpu} alt="product" className="w-[50px] " />
                    <div>TIPASON – Gaming Desktop – AMD 3000G</div>
                  </div>
                </td>
                <td className="text-center">
                  <span className="text-[#929FA5] line-through">$1299</span>
                  &nbsp;
                  <span className="text-black">$999</span>
                </td>
                <td className="text-[#2DB224] font-semibold text-center">
                  IN STOCK
                </td>
                <td>
                  <button className="w-[174px] h-[48px] rounded bg-[#EB4227] uppercase text-white font-semibold flex justify-center items-center gap-2 ">
                    add to card <ShoppingCart size={16} />
                  </button>
                </td>
                <td>
                  <CircleX className="cursor-pointer" />
                </td>
              </tr>
              <tr>
                <td className="">
                  <div className="flex items-center gap-2 h-[70px]">
                    <Image src={cpu} alt="product" className="w-[50px] " />
                    <div>TIPASON – Gaming Desktop – AMD 3000G</div>
                  </div>
                </td>
                <td className="text-center">
                  <span className="text-[#929FA5] line-through">$1299</span>
                  &nbsp;
                  <span className="text-black">$999</span>
                </td>
                <td className="text-[#2DB224] font-semibold text-center">
                  IN STOCK
                </td>
                <td>
                  <button className="w-[174px] h-[48px] rounded bg-[#EB4227] uppercase text-white font-semibold flex justify-center items-center gap-2 ">
                    add to card <ShoppingCart size={16} />
                  </button>
                </td>
                <td>
                  <CircleX />
                </td>
              </tr>
              <tr>
                <td className="">
                  <div className="flex items-center gap-2 h-[70px]">
                    <Image src={cpu} alt="product" className="w-[50px] " />
                    <div>TIPASON – Gaming Desktop – AMD 3000G</div>
                  </div>
                </td>
                <td className="text-center">
                  <span className="text-[#929FA5] line-through">$1299</span>
                  &nbsp;
                  <span className="text-black">$999</span>
                </td>
                <td className="text-[#2DB224] font-semibold text-center">
                  IN STOCK
                </td>
                <td>
                  <button className="w-[174px] h-[48px] rounded bg-[#EB4227] uppercase text-white font-semibold flex justify-center items-center gap-2 ">
                    add to card <ShoppingCart size={16} />
                  </button>
                </td>
                <td>
                  <CircleX />
                </td>
              </tr>
              <tr>
                <td className="">
                  <div className="flex items-center gap-2 h-[70px]">
                    <Image src={cpu} alt="product" className="w-[50px] " />
                    <div>TIPASON – Gaming Desktop – AMD 3000G</div>
                  </div>
                </td>
                <td className="text-center">
                  <span className="text-[#929FA5] line-through">$1299</span>
                  &nbsp;
                  <span className="text-black">$999</span>
                </td>
                <td className="text-[#2DB224] font-semibold text-center">
                  IN STOCK
                </td>
                <td>
                  <button className="w-[174px] h-[48px] rounded bg-[#EB4227] uppercase text-white font-semibold flex justify-center items-center gap-2 ">
                    add to card <ShoppingCart size={16} />
                  </button>
                </td>
                <td>
                  <CircleX />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
