"use client";
import React from "react";
import CommonBanner from "../Common/CommonBanner";
import { svgIconBannerHome } from "@/assets/images";
import about from "../../assets/images/png/about.png";
import services from "../../assets/images/svg/Services.svg";
import Image from "next/image";
import about2 from "../../assets/images/png/about2.png";
import videoabout from "../../assets/images/png/video-about.png";
import logoipsum from "../../assets/images/png/logoipsum.png";
import backgroundabout from "../../assets/images/png/backgroundabout.png";
import secureicon from "../../assets/images/svg/secure-icon .svg";
import calendericon from "../../assets/images/svg/calendar-icon.svg";
import originalproduct from "../../assets/images/svg/original-product.svg";
import getfreedelivery from "../../assets/images/svg/getfreedelivery.svg";
const AboutUs = () => {
  return (
    <>
      <div>
        <CommonBanner
          icon={svgIconBannerHome}
          path={[{ title: "About Us", href: "/aboutus" }]}
        />

        <div className="container">
          <div className="flex justify-center flex-col items-center mt-10">
            <span className="text-black font-bold text-2xl ">About Zylax</span>
            <div className="text-[#475467] text-[14px] lg:w-[800px] min-w-[300px] text-center mt-4">
              Founded in 1991, Zylax Computers has been in the IT industry for
              over 30 years, as we have specialised technicians that can assist
              all customers with most of your computer problems and enquiries.
              Over the years, we have adapted our skills to ensure we are able
              to provide the best service for all our clients to match the
              complexity of new technology. As well as having numerous products
              for sale, Zylax Computers provides many IT services such as home
              networking, computer repair services, privacy configurations,
              network and workstation troubleshooting, and much more. 
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
                over 30 years, as we have specialised technicians that can
                assist all customers with most of your computer problems and
                enquiries.
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

          <div className="mt-20 pb-20 flex  lg:justify-between lg:flex-row flex-col gap-5">
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
            <div className="w-[309px] h-[230px] bg-[#EB4227] border flex justify-center items-center flex-col gap-4 ">
              <Image src={services} alt="" />
              <div className="flex flex-col items-center">
                <span className="text-[#ECEEE5] font-extrabold text-[30px]">
                  6006+
                </span>
                <span className="font-semibold text-white ">PC Builds</span>
              </div>

              <span className="text-white">TRUSTED AND PROVEN</span>
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

          <div className="flex gap-6 lg:justify-center flex-col lg:flex-row">
            <div className="relative lg:w-[800px] min-w-[350px]">
              <Image src={about2} alt="" className="w-[585px] min-w-[200px]" />
              <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-[440px] h-[249px] bg-black rounded-xl p-7 flex flex-col gap-2">
                <span className="text-white font-semibold text-[25px]">
                  We love what we do
                </span>
                <div className="text-white text-[14px]">
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.
                </div>
                <div className="text-white text-[14px]">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Lorem ipsum
                  dolor sit amet conse ctetur adipisicing elit. Lorem ipsum
                  dolor sit amet conse ctetur adipisicing elit, sed do eiusmod.
                </div>
              </div>
            </div>
            <div className="h-[364px] lg:w-[450px] min-w-[200px]   flex justify-center items-center">
              <div className="flex flex-col gap-2">
                <span className="font-bold text-[30px]">
                  We are here for you
                </span>
                <div className="text-[14px]">
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.
                </div>
                <div className="text-[14px]">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Lorem ipsum
                  dolor sit amet conse ctetur adipisicing elit. Lorem ipsum
                  dolor sit amet conse ctetur adipisicing elit, sed do eiusmod.
                </div>
                <div className="text-[14px]">
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-10 gap-5 justify-center flex-col lg:flex-row  ">
            <div className="lg:w-[800px] min-w-[350px]">
              <div className="font-bold text-[30px]">It's about you...</div>
              <div>
                <ul className="list-disc flex flex-col gap-2 mt-4 font-medium">
                  <li>
                    We strive to provide you with award winning customer
                    service.
                  </li>
                  <li>
                    We always keep an eye on our competitors to ensure you get
                    the lowest prices everyday.
                  </li>
                  <li>
                    You get full manufacturer Warranty on all hardware
                    components.
                  </li>
                  <li>
                    Our Team Members are Friendly, Enthusiastic & Knowledgable.
                  </li>
                  <li>We speak your language, not computer jargon.</li>
                  <li>
                    Our computers are fully customisable and personally hand
                    built for you.
                  </li>
                  <li>We personally service and take care of your computer.</li>
                  <li>
                    Our company is 100% Australian and privately owned and
                    operated.
                  </li>
                  <li>You are our number one priority!</li>
                </ul>
              </div>
            </div>

            <div className="lg:w-[450px]  min-w-[100px]">
              <Image src={videoabout} alt="" />
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <div>
              <Image src={logoipsum} alt="" />
            </div>
            <div>
              <Image src={logoipsum} alt="" />
            </div>
            <div>
              <Image src={logoipsum} alt="" />
            </div>
            <div>
              <Image src={logoipsum} alt="" />
            </div>
            <div>
              <Image src={logoipsum} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-[#D30200] mt-10 h-[200px]  flex lg:justify-around lg:flex-row flex-col justify-center items-center ">
          <div className="font-bold lg:text-[30px] text-white lg:w-[500px] text-center">
            Need To Computer & Laptop Sale & Repair Services
          </div>
          <div className="lg:w-[500px] flex justify-end">
            <button className="w-[144px] h-[50px] rounded bg-[#FFFFFF]">
              Contact Us
            </button>
          </div>
        </div>

        <div className="text-center mt-10 font-bold text-[30px]">
          What Our Client Say
        </div>
        <div className="text-center font-medium lg:text-[18px]">
          Lorem ipsum dolor sit amet conse ctetur adipisicing elit
        </div>
        <div className="mt-10 mb-10 flex lg:justify-around flex-col justify-center items-center gap-5 lg:flex-row">
          <div className="flex items-center gap-2">
            <div className="bg-[#EB4227] w-[60px] h-[60px] rounded-full flex justify-center items-center">
              <Image src={secureicon} alt="secureicon" />
            </div>
            <div className="w-[180px] flex flex-col">
              <span className="text-[18px] font-semibold">
                100% Secure Payment
              </span>
              <span className="text-[12px]">
                Your payments are secure with our private security network.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#EB4227] w-[60px] h-[60px] rounded-full flex justify-center items-center">
              <Image src={originalproduct} alt="" />
            </div>
            <div className="w-[180px] flex flex-col">
              <span className="text-[18px] font-semibold">
                Original Product
              </span>
              <span className="text-[12px]">
                100% Original product that covered warranty by the vendor.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#EB4227] w-[60px] h-[60px] rounded-full flex justify-center items-center">
              <Image src={calendericon} alt="calendericon" />
            </div>
            <div className="w-[180px] flex flex-col">
              <span className="text-[18px] font-semibold">
                10 Days Warranty
              </span>
              <span className="text-[12px]">
                You have the right to return your orders within 10 days.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#EB4227] w-[60px] h-[60px] rounded-full flex justify-center items-center">
              <Image src={getfreedelivery} alt="getfreedelivery" />
            </div>
            <div className="w-[180px] flex flex-col">
              <span className="text-[18px] font-semibold">
                Get Free Delivery
              </span>
              <span className="text-[12px]">
                Enjoy Free shipping on all orders
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
