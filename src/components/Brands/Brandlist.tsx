"use client";
import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import { pngGBMicroAtx, svgIconBannerHome } from "@/assets/images";
import CommonBanner from "../Common/CommonBanner";
import brandsData from "../../Data/brands.json";
import { useGetBrandsListQuery } from "@/store/apiServices/brandApi";
import { useRouter } from "next/navigation";

interface Brand {
  id: string;
  name: string;
  manufacture_img: string;
  totalP: number;
}

const Brandlist = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("");
  const [filteredBrands, setFilteredBrands] = useState<Brand[]>([]);
  const {
    data: brandsList,
    error,
    isLoading,
  } = useGetBrandsListQuery(undefined);

  // Filtering logic
  useEffect(() => {
    if (brandsList?.manufactures) {
      let filtered = brandsList?.manufactures;

      // Filter by selected letter
      if (selectedLetter) {
        filtered = filtered.filter((brand: { name: string }) =>
          brand.name.toLowerCase().startsWith(selectedLetter.toLowerCase())
        );
      }

      // Filter by search term
      if (searchTerm) {
        filtered = filtered?.filter((brand: Brand) =>
          brand.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setFilteredBrands(filtered);
    }
  }, [brandsList?.manufactures, selectedLetter, searchTerm]);

  // Handlers for search input and letter selection
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
    setSearchTerm(""); // Clear the search input when a letter is selected
  };

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
            onChange={(e) => handleSearchChange(e)}
            className="flex-grow outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Alphabet Filter */}
        <div className="flex items-center flex-wrap gap-2 mt-5">
          <div
            onClick={() => setSelectedLetter("")}
            className={`border ${
              selectedLetter === "All" ? "border-[#006bb4]" : "border-gray-300"
            } text-[#006bb4] w-[90px] h-[40px] flex justify-center items-center rounded cursor-pointer`}
          >
            All Brands
          </div>
          {Array.from({ length: 26 }, (_, i) =>
            String.fromCharCode(65 + i)
          ).map((letter) => (
            <span
              key={letter}
              onClick={() => handleLetterClick(letter)}
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
          {filteredBrands?.length > 0 ? (
            filteredBrands?.map((brand: Brand) => (
              <div
                onClick={() => router.push(`/products?brand=${brand.id}`)}
                key={brand.id}
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
                className="w-[315px] cursor-pointer h-[170px] bg-white rounded-2xl flex-col flex justify-center items-center"
              >
                <Image
                  src={pngGBMicroAtx}
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
