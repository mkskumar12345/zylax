"use client";
import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import { svgIconBannerHome } from "@/assets/images";
import CommonBanner from "../Common/CommonBanner";
import brandsData from "../../Data/brands.json";
import { useGetBrandsListQuery } from "@/store/apiServices/brandApi";

const Brandlist = () => {
  const [selectedLetter, setSelectedLetter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBrands, setFilteredBrands] = useState(brandsData);
  const {
    data: brandsList,
    error,
    isLoading,
  } = useGetBrandsListQuery(undefined);

  // useEffect(() => {
  //   const filtered = brandsData.filter((brand) => {
  //     const matchesLetter =
  //       selectedLetter === "All" || brand.name.startsWith(selectedLetter);
  //     const matchesSearch = brand.name
  //       .toLowerCase()
  //       .includes(searchQuery.toLowerCase());

  //     return matchesLetter && matchesSearch;
  //   });
  //   setFilteredBrands(filtered);
  // }, [selectedLetter, searchQuery]);

  return (
    <>
      <CommonBanner icon={svgIconBannerHome} path={["brands"]} />

      <div className="p-10">
        <span className="text-2xl font-semibold">Brandlist</span>

        {/* Search Input */}
        <div className="flex items-center mt-5 border border-gray-300 rounded px-3 py-2 w-full max-w-md">
          <Search className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search brand here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Alphabet Filter */}
        <div className="flex items-center flex-wrap gap-2 mt-5">
          <div
            onClick={() => setSelectedLetter("All")}
            className={`border ${
              selectedLetter === "All" ? "border-[#006bb4]" : "border-gray-300"
            } text-[#006bb4] w-[90px] h-[40px] flex justify-center items-center rounded cursor-pointer`}
          >
            All Brands
          </div>
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split("").map((letter) => (
            <span
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`border ${
                selectedLetter === letter
                  ? "border-[#006bb4]"
                  : "border-gray-300"
              } w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded cursor-pointer`}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Filtered Brands Display */}
        <div className="mt-10 flex flex-wrap gap-10">
          {brandsList?.manufactures?.length > 0 ? (
            brandsList?.manufactures?.map((brand: any) => (
              <div
                key={brand.id}
                className="w-[315px] h-[170px] bg-white shadow-md rounded-2xl flex-col flex justify-center items-center"
              >
                <Image
                  src={`/${brand.manufacture_img}`}
                  alt={brand.name}
                  width={60}
                  height={60}
                />
                <span>{brand.name}</span>
                <span>{brand.totalP} product(s)</span>
              </div>
            ))
          ) : (
            <p>No brands match your search.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Brandlist;
