"use client";

import React from "react";
import Navbar from "@/components/Home/Navbar/Navbar";
import Banner from "@/components/Home/Banner/Banner";
import Categories from "@/components/Home/Categories/Categories";
import DealsOfTheDay from "@/components/Home/DealsOfTheDay/DealsOfTheDay";
import BestSeller from "@/components/Home/BestSeller/BestSeller";
import PopularBrands from "@/components/Home/PopularBrands/PopularBrands";
import BestArrival from "@/components/Home/BestArrival/BestArrival";
import Testimonials from "@/components/Home/Testimonials/Testimonials";

const HomeComponent = ({ homePageDate }: { homePageDate: any }) => {
  return (
    <div>
      <Banner sliderData={homePageDate?.slider} />
      <Categories />
      <DealsOfTheDay dealOfTheDayData={homePageDate?.bestDeals} />
      <BestSeller bestSellerData={homePageDate?.bestSeller} />
      <PopularBrands popularBrandData={homePageDate?.popularBrands} />
      {/* <BestArrival /> */}
      <Testimonials />
      {/* <LatestNewsAndBlog /> */}
    </div>
  );
};

export default HomeComponent;
