import React from "react";
import CommonBanner from "../Common/CommonBanner";
import { svgIconBannerHome } from "@/assets/images";
import about from "../../assets/images/png/about.png";
import services from "../../assets/images/svg/Services.svg";
import Image from "next/image";
const AboutUs = () => {
  return (
    <div>
      <CommonBanner icon={svgIconBannerHome} path={["Aboutus"]} />
      <div className="container">
        <div className="flex justify-center flex-col items-center mt-10">
          <span className="text-black font-bold text-2xl ">About Zylax</span>
          <div className="text-[#475467] text-[14px] lg:w-[800px] min-w-[300px] text-center mt-4">
            Founded in 1991, Zylax Computers has been in the IT industry for
            over 30 years, as we have specialised technicians that can assist
            all customers with most of your computer problems and enquiries.
            Over the years, we have adapted our skills to ensure we are able to
            provide the best service for all our clients to match the complexity
            of new technology. As well as having numerous products for sale,
            Zylax Computers provides many IT services such as home networking,
            computer repair services, privacy configurations, network and
            workstation troubleshooting, and much more. 
          </div>
        </div>
        <div className="flex gap-5 lg:justify-center lg:flex-row  flex-col mt-10">
          <div>
            <Image src={about} alt="" />
          </div>
          <div>
            <span className="text-[#EB4227] font-semibold">Our History</span>
            <div className="font-bold text-[25px]">
              Gives You Quality Products at the Best Prices
            </div>
            <div className="lg:w-[700px]  text-[#475467]">
              Founded in 1991, Zylax Computers has been in the IT industry for
              over 30 years, as we have specialised technicians that can assist
              all customers with most of your computer problems and enquiries.
            </div>
            <div className="bg-[#ECECEC] lg:w-[800px] min-w-[200px] lg:h-[215px] rounded p-5 flex flex-col gap-3 ">
              <div className="flex gap-2">
                <button className="border-[#FFA395] border rounded bg-[#EB4227] text-white w-[105px] h-[40px] font-semibold">
                  Vision
                </button>
                <button className="border-[#ECECEC] bg-white font-semibold border w-[105px] h-[40px] rounded ">
                  Mission
                </button>
              </div>
              <div>
                Dictumst sapien litora quisque nisl habitant neque dictum
                fringilla. Iaculis condimentum lectus eros fringilla urna
                laoreet justo. Pharetra facilisis justo nulla sem hendrerit
                platea tortor amet mollis.
              </div>
              <div>
                Dictumst sapien litora quisque nisl habitant neque dictum
                fringilla. Iaculis condimentum lectus eros fringilla urna
                laoreet justo. Pharetra facilisis justo nulla sem hendrerit
                platea tortor amet mollis.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex  lg:justify-between lg:flex-row flex-col gap-5">
          <div className="w-[309px] h-[230px] border flex justify-center items-center flex-col gap-4 ">
            <Image src={services} alt="" />
            <div className="flex flex-col items-center">
              <span className="text-[#ECEEE5] font-extrabold text-[30px]">
                6006+
              </span>
              <span className="font-semibold ">PC Builds</span>
            </div>

            <span>TRUSTED AND PROVEN</span>
          </div>
          <div className="w-[309px] h-[230px] border flex justify-center items-center flex-col gap-4 ">
            <Image src={services} alt="" />
            <div className="flex flex-col items-center">
              <span className="text-[#ECEEE5] font-extrabold text-[30px]">
                6006+
              </span>
              <span className="font-semibold ">PC Builds</span>
            </div>

            <span>TRUSTED AND PROVEN</span>
          </div>
          <div className="w-[309px] h-[230px] border flex justify-center items-center flex-col gap-4 ">
            <Image src={services} alt="" />
            <div className="flex flex-col items-center">
              <span className="text-[#ECEEE5] font-extrabold text-[30px]">
                6006+
              </span>
              <span className="font-semibold ">PC Builds</span>
            </div>

            <span>TRUSTED AND PROVEN</span>
          </div>
          <div className="w-[309px] h-[230px] border flex justify-center items-center flex-col gap-4 ">
            <Image src={services} alt="" />
            <div className="flex flex-col items-center">
              <span className="text-[#ECEEE5] font-extrabold text-[30px]">
                6006+
              </span>
              <span className="font-semibold ">PC Builds</span>
            </div>

            <span>TRUSTED AND PROVEN</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
