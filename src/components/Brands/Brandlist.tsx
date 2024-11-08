"use client";
import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import { svgIconBannerHome } from "@/assets/images";
import CommonBanner from "../Common/CommonBanner";
import brandsData from "../../Data/brands.json";

const Brandlist = () => {
  const [selectedLetter, setSelectedLetter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBrands, setFilteredBrands] = useState(brandsData);

  useEffect(() => {
    const filtered = brandsData.filter((brand) => {
      const matchesLetter =
        selectedLetter === "All" || brand.name.startsWith(selectedLetter);
      const matchesSearch = brand.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesLetter && matchesSearch;
    });
    setFilteredBrands(filtered);
  }, [selectedLetter, searchQuery]);

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
          {filteredBrands.length > 0 ? (
            filteredBrands.map((brand, index) => (
              <div
                key={index}
                className="w-[315px] h-[170px] bg-white shadow-2xl rounded-2xl flex-col flex justify-center items-center"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={60}
                  height={60}
                />
                <span>{brand.name}</span>
                <span>{brand.products} product(s)</span>
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
