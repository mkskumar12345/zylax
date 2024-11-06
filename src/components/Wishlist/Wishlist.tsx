import React from "react";

const Wishlist = () => {
  return (
    <div>
      wishlist
      <table className="table-auto">
        <thead>
          <tr className="bg-[#F2F4F5]">
            <th className="text-[#475156] font-thin">Products</th>
            <th className="text-[#475156] font-thin">Price</th>
            <th className="text-[#475156] font-thin">Stock Status</th>
            <th className="text-[#475156] font-thin">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Wishlist;
