import React from "react";

const ProductsShimmer = () => {
  return (
    <div className="bg-white card w-full border border-[#99999999] rounded-xl animate-pulse">
      <div className="leading-4 text-center font-semibold text-lg flex items-center p-4 bg-gray-200 h-6 w-full mx-auto rounded-t-xl"></div>
      <div className="flex gap-2 justify-center mt-2">
        <div className="h-3 w-10 bg-gray-200 rounded"></div>
        <div className="h-3 w-5 bg-gray-200 rounded"></div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <div className="w-36 h-36 bg-gray-200 rounded"></div>
      </div>
      <div className="flex items-center justify-between p-4">
        <div className="bg-gray-200 h-6 w-1/3 rounded"></div>
        <div className="bg-gray-200 h-4 w-1/4 rounded"></div>
        <div className="bg-gray-200 h-6 w-1/5 rounded"></div>
      </div>
      <div className="flex justify-between p-4 items-center">
        <div className="flex items-center gap-2">
          <div className="bg-gray-200 h-4 w-10 rounded"></div>
          <div className="bg-gray-200 h-4 w-16 rounded"></div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-gray-200 h-8 w-10 "></div>
          <div className="bg-gray-200 h-6 w-6 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductsShimmer;
