import { ArrowRight } from "lucide-react";
import React from "react";
import orders from "./orders.json";

const OrderHistory = () => {
  return (
    <div className="">
      <span className="font-bold text-[30px] ">Order History</span>

      <div className="mt-5 w-full min-w-full overflow-x-auto">
        <table className=" w-full ">
          <thead>
            <tr className="h-[38px] bg-[#F2F4F5] border-[#E4E7E9] border">
              <th className="text-[#475156] min-w-36 font-medium w-[150px]">
                Order ID
              </th>
              <th className="text-[#475156] min-w-36 font-medium w-[200px]">
                Status
              </th>
              <th className="text-[#475156] min-w-36  font-medium w-[200px]">
                Date
              </th>
              <th className="text-[#475156] min-w-36 font-medium w-[250px]">
                Total
              </th>
              <th className="text-[#475156] min-w-36 font-medium w-[150px] text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="h-[44px]">
                <td className="text-center font-semibold">{order.orderId}</td>
                <td className={`text-center font-semibold ${order.status === "IN PROGRESS" ? "text-[#FA8232]" : order.status === "COMPLETED" ? "text-[#2DB224]" : "text-[#EE5858]"}`}>
                  {order.status}
                </td>
                <td className="text-[#5F6C72] text-center">{order.date}</td>
                <td className="text-[#475156] text-center">{order.total}</td>
                <td className="">
                  <div className="text-[#EB4227] font-semibold flex items-center gap-2">
                    View Details <ArrowRight size={15} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
