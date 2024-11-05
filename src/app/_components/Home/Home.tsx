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
import LatestNewsAndBlog from "@/components/Home/LatestNewsAndBlog/LatestNewsAndBlog";
import Footer from "@/components/Home/Footer/Footer";


const HomeComponent = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <DealsOfTheDay />
      <BestSeller />
      <PopularBrands />
      <BestArrival />
      <Testimonials />
      <LatestNewsAndBlog />

    </div>
  );
};

export default HomeComponent;
