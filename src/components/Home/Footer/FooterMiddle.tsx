import {
  pngIconLogo,
  svgIconFacebook,
  svgIconInstagram,
  svgIconPinterest,
  svgIconTwitter,
  svgIconYoutube,
} from "@/assets/images";
import allPagesRoutes from "@/constants/allPagesRoutes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterMiddle = () => {
  return (
    <div className=" bg-black">
      <div className="flex xl:flex-nowrap flex-wrap justify-between container pb-10">
        <div className="xl:basis-4/12 w-full md:basis-8/12 flex flex-col my-10 gap-6">
          <div className="">
            <Image src={pngIconLogo} alt="site logo" width={83} height={36} />
          </div>
          <div>
            <span className="text-sm font-regular">hotline 24/7</span>
            <h1 className="text-[#D30200] text-3xl font-bold">1300 099529</h1>
          </div>
          <div>
            <p className="md:w-[292px] text-sm font-regular text-white">
              13/4A Foundry Road, Seven Hills New South Wales 2147 Australia
            </p>
            <p className="text-sm font-regular text-white">
              sales@zylax.com.au
            </p>
          </div>
          <div className="flex gap-2">
            <Image src={svgIconTwitter} alt="twitter" />
            <a href="https://www.facebook.com/zylax">
              <Image src={svgIconFacebook} alt="twitter" />
            </a>
            <a href="https://www.instagram.com/zylaxcomp/">
              <Image src={svgIconInstagram} alt="instagram" />
            </a>
            <Image src={svgIconYoutube} alt="twitter" />
            <Image src={svgIconPinterest} alt="twitter" />
          </div>
        </div>
        <div className="xl:basis-2/12 clear-start md:basis-4/12 w-full basis-1/2 my-10  text-white">
          <h2 className="font-bold text-lg">INFORMATION</h2>
          <div className="flex flex-col gap-2 mt-8  font-regular text-sm">
            <Link href="#">Laptops</Link>
            <Link href="#">PC & Computers</Link>
            <Link href="#">Cell Phones</Link>
            <Link href="#">Tablets</Link>
            <Link href="#">Gaming & VR</Link>
            <Link href="#">Networks</Link>
            <Link href="#">Cameras</Link>
            <Link href="#">Sounds</Link>
            <Link href="#">Office</Link>
          </div>
        </div>
        <div className="xl:basis-2/12 clear-start w-full lg:basis-1/3 basis-1/2 my-10 text-white">
          <h2 className="font-bold text-lg">COMPANY</h2>
          <div className="flex flex-col gap-2 mt-8  font-regular text-sm">
            <Link href="#">About Swoo</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Career</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Site Map</Link>
            <Link href="#">Store Location</Link>
          </div>
        </div>
        <div className="xl:basis-2/12 clear-start w-full basis-1/2 my-10 lg:basis-1/3 text-white">
          <h2 className="font-bold text-lg">HELP CENTER</h2>
          <div className="flex flex-col gap-2 mt-8 font-regular text-sm">
            <Link href="#">Customer Services</Link>
            <Link href={allPagesRoutes.PRIVACY_POLICY}>Policy</Link>
            <Link href={allPagesRoutes.TERMS_AND_CONDITION}>
              Terms & Conditions
            </Link>
            <Link href="#">Trake Orders</Link>
            <Link href={allPagesRoutes.FAQS}>FAQs</Link>
            <Link href="#">My Account</Link>
            <Link href="#">Product Support</Link>
          </div>
        </div>
        <div className="xl:basis-2/12 clear-start w-full basis-1/2 my-10 lg:basis-1/3 text-white">
          <h2 className="font-bold text-lg">PARTNER</h2>
          <div className="flex flex-col gap-2 mt-8 font-regular text-sm">
            <Link href="#">Become Seller</Link>
            <Link href="#">Affilliate</Link>
            <Link href="#">Advertise</Link>
            <Link href="#">Partnership</Link>
            <Link href={allPagesRoutes.BUSINESS_IT_SUPPORT}>
              Business and It support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMiddle;
