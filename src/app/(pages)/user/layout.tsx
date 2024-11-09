import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="container ">
      <div className="border my-10 min-h-[560px] border-[#E4E7E9] rounded-[6px] p-8 grid grid-cols-12 gap-8 ">
        <div className="col-span-3 ">
          <Sidebar />
        </div>

        <div className="col-span-8 bg-white">{children}</div>
      </div>
    </div>
  );
};

export default layout;
