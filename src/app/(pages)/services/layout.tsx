import CommonBanner from "@/components/Common/CommonBanner";
import ServiceSidebar from "@/components/ServiceSidebar/ServiceSidebar";

import React from "react";
// import { svgIconBannerHome } from "@/assets/images";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      {/* <CommonBanner
        icon={svgIconBannerHome}
        path={[{ title: "wishlist", href: "/user/my-wishlist" }]}
      /> */}
      <div className=" ">
        <div className=" min-h-[560px] rounded-[6px] sm:p-8 grid grid-cols-12 gap-8 ">
          <div className=" lg:col-span-3 col-span-12 ">
            <ServiceSidebar />
          </div>

          <div className="lg:col-span-9 col-span-12 bg-white">{children}</div>
        </div>
      </div>
    </>
  );
};

export default layout;
