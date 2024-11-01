import {
  pngIconLogo,
  svgIconFacebook,
  svgIconInstagram,
  svgIconPinterest,
  svgIconTwitter,
  svgIconYoutube,
} from "@/assets/images";
import Image from "next/image";
import React from "react";

const FooterMiddle = () => {
  return (
    <div className=" bg-black">
      <div className="flex container py-10">
        <div className="basis-4/12 flex flex-col gap-6">
          <div className="">
            <Image src={pngIconLogo} alt="site logo" width={83} height={36} />
          </div>
          <div>
            <span className="text-sm font-regular">hotline 24/7</span>
            <h1 className="text-[#D30200] text-3xl font-bold">1300 099529</h1>
          </div>
          <div>
            <p className="w-[292px] text-sm font-regular text-white">
              13/4A Foundry Road, Seven Hills New South Wales 2147 Australia
            </p>
            <p className="text-sm font-regular text-white">
              sales@zylax.com.au
            </p>
          </div>
          <div className="flex gap-2">
            <Image src={svgIconTwitter} alt="twitter" />
            <Image src={svgIconFacebook} alt="twitter" />
            <Image src={svgIconInstagram} alt="twitter" />
            <Image src={svgIconYoutube} alt="twitter" />
            <Image src={svgIconPinterest} alt="twitter" />
          </div>
        </div>
        <div className="basis-2/12 clear-start text-white">
          <h2 className="font-bold text-lg">INFORMATION</h2>
          <div className="flex flex-col gap-2 mt-8  font-regular text-sm">
            <div>Laptops</div>
            <div>PC & Computers</div>
            <div>Cell Phones</div>
            <div>Tablets</div>
            <div>Gaming & VR</div>
            <div>Networks</div>
            <div>Cameras</div>
            <div>Sounds</div>
            <div>Office</div>
          </div>
        </div>
        <div className="basis-2/12 clear-start text-white">
          <h2 className="font-bold text-lg">COMPANY</h2>
          <div className="flex flex-col gap-2 mt-8  font-regular text-sm">
            <div>About Swoo</div>
            <div>Contact</div>
            <div>Career</div>
            <div>Blog</div>
            <div>Site Map</div>
            <div>Store Location</div>
          </div>
        </div>
        <div className="basis-2/12 clear-start text-white">
          <h2 className="font-bold text-lg">HELP CENTER</h2>
          <div className="flex flex-col gap-2 mt-8 font-regular text-sm">
            <div>Customer Services</div>
            <div>Policy</div>
            <div>Terms & Conditions</div>
            <div>Trake Orders</div>
            <div>FAQs</div>
            <div>My Account</div>
            <div>Product Support</div>
          </div>
        </div>
        <div className="basis-2/12 clear-start text-white">
          <h2 className="font-bold text-lg">PARTNER</h2>
          <div className="flex flex-col gap-2 mt-8 font-regular text-sm">
            <div>Become Seller</div>
            <div>Affilliate</div>
            <div>Advertise</div>
            <div>Partnership</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMiddle;
