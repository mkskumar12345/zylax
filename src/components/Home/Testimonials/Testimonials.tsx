import {
  pngTestimonialAd,
  pngTestimonialBanner,
  svgIcon5Star,
  svgIcon5StarWhite,
} from "@/assets/images";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div>
      <div className="relative bg-cover bg-center bg-[url('/testimonial-bg-img.png')] bg-black/90 bg-blend-darken">
        <div className="container pb-40 pt-16 flex gap-2">
          <div className="mr-16 max-w-[184px] text-white flex flex-col gap-2 py-4 ">
            <p className="font-semibold leading-4">Testimonials</p>
            <h1 className="font-semibold text-[32px] leading-8">
              What our Clients say
            </h1>
            <p className="font-medium text-sm ">
              Lorem ipsum dolor sit amet adipiscing elit amet tellus adipiscing
              accumsan.
            </p>
          </div>
          <div className="basis-1/3 bg-[#FF1E1C] rounded-t-xl text-white">
            <div className="p-4 ">
              <h2 className="font-semibold text-xl">What others thought of</h2>
              <p className="mt-2 font-medium text-sm ">
                Sed id cursus cras viverra vivamus orci. Neque vitae, tellus
                lacus aliquet amet id vitae pharetra posuere fermentum in diam
                volutpat velit tellus.
              </p>
            </div>
            <div className="bg-[#E50B09] p-4">
              <div className="flex items-center gap-2">
                <div className="image rounded-full w-8 h-8 bg-white"></div>
                <p className="flex flex-col ">
                  <span className="font-semibold text-sm">John William </span>
                  <span className="text-sm font-regular">
                    Manager at Furniti
                  </span>
                </p>
                <div className="ml-auto mr-4">
                  <Image src={svgIcon5StarWhite} alt="5star" />
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/3 bg-[#ffffff] rounded-t-xl text-[#000000]">
            <div className="p-4 ">
              <h2 className="font-semibold text-xl">What others thought of</h2>
              <p className="mt-2 font-medium text-sm ">
                Sed id cursus cras viverra vivamus orci. Neque vitae, tellus
                lacus aliquet amet id vitae pharetra posuere fermentum in diam
                volutpat velit tellus.
              </p>
            </div>
            <div className="bg-[#D9D9D9] p-4">
              <div className="flex items-center gap-2">
                <div className="image rounded-full w-8 h-8 bg-white"></div>
                <p className="flex flex-col ">
                  <span className="font-semibold text-sm">John William </span>
                  <span className="text-sm font-regular">
                    Manager at Furniti
                  </span>
                </p>
                <div className="ml-auto mr-4">
                  <Image src={svgIcon5Star} alt="5star" />
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/3 bg-[#ffffff] rounded-t-xl text-[#000000]">
            <div className="p-4 ">
              <h2 className="font-semibold text-xl">What others thought of</h2>
              <p className="mt-2 font-medium text-sm ">
                Sed id cursus cras viverra vivamus orci. Neque vitae, tellus
                lacus aliquet amet id vitae pharetra posuere fermentum in diam
                volutpat velit tellus.
              </p>
            </div>
            <div className="bg-[#D9D9D9] p-4">
              <div className="flex items-center gap-2">
                <div className="image rounded-full w-8 h-8 bg-white"></div>
                <p className="flex flex-col ">
                  <span className="font-semibold text-sm">John William </span>
                  <span className="text-sm font-regular">
                    Manager at Furniti
                  </span>
                </p>
                <div className="ml-auto mr-4">
                  <Image src={svgIcon5Star} alt="5star" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" container  ">
        <div className="relative h-[328px]">
          <div className=" h-full p-8 rounded-xl gap-10 bg-white flex absolute -top-24  ">
            <div className="basis-7/12 h-full ">
              <Image
                src={pngTestimonialBanner}
                alt="Testimonial Banner"
                className="max-h-full rounded-t-xl max-w-[698px]"
              />
            </div>
            <div className="basis-5/12 h-full flex  items-center">
              <div className="flex flex-col gap-4 items-start">
                <button className="font-semibold rounded-t-[10px] px-4 bg-[#D30200]">
                  About Us
                </button>
                <h1 className="font-semibold text-[32px] leading-8 text-black">
                  About ZYLAX
                </h1>
                <p className="font-regular text-sm ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in
                  eget facilisi ut. Turpis nisi tempus porttitor nunc interdum.
                  Elit a auctor eget auctor. Massa facilisi nunc ornare quis
                  congue amet arcu. tincidunt amet libero ultricies purus eu
                  Tortor habitan
                </p>
                <Button
                  variant={"outline"}
                  className="rounded-t-xl font-semibold leading-4 pt-2 px-4 border-[#D30200] text-[#D30200] "
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative transform -translate-y-1/2">
          <Image src={pngTestimonialAd} alt="Testimonial Ad" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
