import CommonBanner from "@/components/Common/CommonBanner";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";
import { svgIconBannerHome } from "@/assets/images";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <CommonBanner icon={svgIconBannerHome} path={["wishlist"]} />
      <div className="container ">
        <div className="border my-10 min-h-[560px]  border-[#E4E7E9] rounded-[6px] p-8 grid grid-cols-12 gap-8 ">
          <div className=" lg:col-span-3 col-span-12 ">
            <Sidebar />
          </div>

          <div className="lg:col-span-9 col-span-12 bg-white">{children}</div>
        </div>
      </div>
    </>
  );
};

export default layout;
