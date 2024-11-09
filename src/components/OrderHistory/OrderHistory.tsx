import { ArrowRight } from "lucide-react";
import React from "react";

const OrderHistory = () => {
  return (
    <div>
      <span className="font-semibold text-[30px]">Order History</span>

      <div className="mt-5">
        <table>
          <thead>
            <tr className="h-[38px] bg-[#F2F4F5] border-[#E4E7E9] border">
              <th className="text-[#475156] font-medium w-[150px]">Order ID</th>
              <th className="text-[#475156] font-medium w-[200px]">Status</th>
              <th className="text-[#475156] font-medium w-[200px]">Date</th>
              <th className="text-[#475156] font-medium w-[250px]">Total</th>
              <th className="text-[#475156] font-medium w-[150px] text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-[44px]">
              <td className="text-center font-semibold">#96459761</td>
              <td className="text-center text-[#FA8232] font-semibold">
                IN PROGRESS
              </td>
              <td className="text-[#5F6C72] text-center">Dec 30, 2019 07:52</td>
              <td className="text-[#475156] text-center">$80 (5 Products)</td>
              <td className="">
                <div className="text-[#EB4227] font-semibold flex items-center gap-2">
                  View Details <ArrowRight size={15} />
                </div>
              </td>
            </tr>
            <tr className="h-[44px]">
              <td className="text-center font-semibold">#96459761</td>
              <td className="text-center text-[#2DB224] font-semibold">
                COMPLETED
              </td>
              <td className="text-[#5F6C72] text-center">Dec 30, 2019 07:52</td>
              <td className="text-[#475156] text-center">$80 (5 Products)</td>
              <td className="">
                <div className="text-[#EB4227] font-semibold flex items-center gap-2">
                  View Details <ArrowRight size={15} />
                </div>
              </td>
            </tr>
            <tr className="h-[44px]">
              <td className="text-center font-semibold">#96459761</td>
              <td className="text-center text-[#EE5858] font-semibold">
                CANCELED
              </td>
              <td className="text-[#5F6C72] text-center">Dec 30, 2019 07:52</td>
              <td className="text-[#475156] text-center">$80 (5 Products)</td>
              <td className="">
                <div className="text-[#EB4227] font-semibold flex items-center gap-2">
                  View Details <ArrowRight size={15} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
