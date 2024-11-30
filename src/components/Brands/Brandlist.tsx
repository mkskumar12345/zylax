"use client";
import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import { pngGBMicroAtx, svgIconBannerHome } from "@/assets/images";
import CommonBanner from "../Common/CommonBanner";
import { useGetBrandsListQuery } from "@/store/apiServices/brandApi";
import { useRouter } from "next/navigation";
import allPagesRoutes from "@/constants/allPagesRoutes";

interface Brand {
  id: string;
  name: string;
  manufacture_img: string;
  totalP: number;
  slug: string;
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

  useEffect(() => {
    if (brandsList?.manufactures) {
      let filtered = brandsList?.manufactures;

      if (selectedLetter) {
        filtered = filtered.filter((brand: { name: string }) =>
          brand.name.toLowerCase().startsWith(selectedLetter.toLowerCase())
        );
      }

      if (searchTerm) {
        filtered = filtered?.filter((brand: Brand) =>
          brand.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setFilteredBrands(filtered);
    }
  }, [brandsList?.manufactures, selectedLetter, searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
    setSearchTerm("");
  };

  return (
    <>
      <CommonBanner
        icon={svgIconBannerHome}
        path={[{ title: "Brands", href: "/brands" }]}
      />

      <div className="container mt-4 mb-4">
        <span className="text-2xl font-semibold">Brandlist</span>

        <div className="flex items-center mt-5 border border-gray-300 rounded px-3 py-2 w-full max-w-md">
          <Search className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search brand here..."
            onChange={(e) => handleSearchChange(e)}
            className="flex-grow outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        <div
          className="flex items-center flex-wrap gap-2 mt-5 p-5"
          style={{ boxShadow: "0 3px 10px 0 #eaeaea" }}
        >
          <div
            onClick={() => setSelectedLetter("")}
            className={`border ${
              selectedLetter === "All" ? "border-[#006bb4]" : "border-gray-300"
            } text-[#006bb4] w-[70px] h-[40px] flex justify-center font-semibold items-center rounded cursor-pointer`}
          >
            All
          </div>
          {Array.from({ length: 26 }, (_, i) =>
            String.fromCharCode(65 + i)
          ).map((letter) => (
            <span
              key={letter}
              onClick={() => handleLetterClick(letter)}
              className={`border ${
                selectedLetter === letter
                  ? "border-[#D30200] text-[#D30200]"
                  : "border-gray-300"
              } w-[40px] h-[40px] flex justify-center items-center text-[18px] font-semibold hover:text-[#D30200] rounded cursor-pointer`}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Filtered Brands Display */}
        <div className="mt-10 flex flex-wrap gap-10 justify-center ">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse cursor-pointer h-[170px] w-[310px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-gradient rounded flex-col flex justify-center items-center"
              >
                <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-gradient w-[100px] h-[100px] rounded mb-2"></div>
                <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 bg-[length:200%_100%] animate-gradient w-3/4 h-4 rounded mb-1"></div>
                <div className="bg-gradient-to-r  from-gray-100 via-gray-200 to-gray-300 bg-[length:200%_100%] animate-gradient w-1/2 h-4 rounded"></div>
              </div>
            ))
          ) : filteredBrands?.length > 0 ? (
            filteredBrands?.map((brand: Brand) => (
              <div
                onClick={() =>
                  router.push(`${allPagesRoutes?.PRODUCTS}?brand=${brand.slug}`)
                }
                key={brand.id}
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 2px 6px",
                }}
                className="group cursor-pointer h-[170px] w-[310px]  bg-white rounded flex-col flex justify-center items-center"
              >
                <Image
                  src={pngGBMicroAtx}
                  alt={brand.name}
                  width={100}
                  height={100}
                />
                <span className="font-semibold">{brand.name}</span>
                <span className="group-hover:text-[#D30200]">
                  {brand.totalP} product(s)
                </span>
              </div>
            ))
          ) : (
            <p className="text-center col-span-12">No brands in the list.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Brandlist;
