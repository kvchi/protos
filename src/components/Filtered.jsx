import React from "react";
import { IoFunnelOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Filtered() {
  return (
    <main className="hidden lg:block pl-14 pr-12 py-20 border-r-2 border-b-2 border-gray-200 mb-10 w-[30%]">
      <div className="flex items-center gap-5">
        <h2 className="text-lg font-semibold text-[#0E375F]">Filter</h2>
        <IoFunnelOutline className="w-6 h-6 text-[#0E375F]" />
      </div>
      <div className="flex items-center pt-5 gap-5">
        <p className="text-lg font-semibold ">Price</p>
        <div className="flex items-center gap-3 border p-2 rounded-xl shadow-lg">
          <p>NGN - Naira</p>
          <RiArrowDropDownLine className="w-6 h-6" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-12">
        <p className="border p-2 rounded-lg shadow-lg">30k - below</p>
        <p className="border p-2 rounded-lg shadow-lg">30k - 100k</p>
        <p className="border p-2 rounded-lg shadow-lg">100k - 500k</p>
        <p className="border p-2 rounded-lg shadow-lg">500k - 1m</p>
        <p className="border p-2 rounded-lg shadow-lg">1m - above</p>
      </div>
      <div>
        <div className="flex items-center justify-center gap-25 pt-8">
          <h2 className="text-lg font-semibold pr-14">Category</h2>
          <p className="text-[#5C7B1E] -mr-5">See all</p>
        </div>
        <div className="mt-5 flex flex-col gap-3">
          <p className="w-fit border p-2 rounded-lg shadow-lg ">
            Asian Restaurant
          </p>
          <p className="w-fit border p-2 rounded-lg shadow-lg ">
            Chinese Restaurant
          </p>
          <p className="w-fit border p-2 rounded-lg shadow-lg ">Fast Food</p>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center gap-30 pt-8">
          <h2 className="text-lg font-semibold pr-14">Features</h2>
          <p className="text-[#5C7B1E] -mr-5">See all</p>
        </div>
        <div className="space-y-2 mt-4">
          <div className="flex gap-3 items-center">
            <input type="checkbox" name="dog" id="" />
            <p>Order online</p>
          </div>
          <div className="flex  gap-3 items-center">
            <input type="checkbox" name="dog" id="" />
            <p>Kid friendly</p>
          </div>
          <div className="flex gap-3 items-center">
            <input type="checkbox" name="dog" id="" />
            <p>Dog allowed</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center gap-30 pt-8">
          <h2 className="text-lg font-semibold">Neighborhood</h2>
          <p className="text-[#5C7B1E] -mr-5">See all</p>
        </div>
        <div className="space-y-2 mt-4">
          <div className="flex gap-3 items-center">
            <input type="checkbox" name="dog" id="" />
            <p>Agege</p>
          </div>
          <div className="flex  gap-3 items-center">
            <input type="checkbox" name="dog" id="" />
            <p>Victoria Island</p>
          </div>
          <div className="flex gap-3 items-center">
            <input type="checkbox" name="dog" id="" />
            <p>Agege</p>
          </div>
          <div className="flex gap-3 items-center">
            <input type="checkbox" name="dog" id="" />
            <p>Lekki</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center gap-30 pt-8">
          <h2 className="text-lg font-semibold">Menu Search</h2>
          <p className="text-[#5C7B1E] -mr-5">See all</p>
        </div>
        <div className="space-y-2 mt-4">
          <div className="flex gap-3 items-center">
            <input type="checkbox" name="catfish" id="" />
            <p>Catfish</p>
          </div>
          <div className="flex  gap-3 items-center">
            <input type="checkbox" name="brazil" id="" />
            <p>Brazilian pork</p>
          </div>
          <div className="flex gap-3 items-center">
            <input type="checkbox" name="dog" id="" />
            <p>China fufu</p>
          </div>
          <div className="flex gap-3 items-center">
            <input type="checkbox" name="dog" id="" />
            <p>English amala</p>
          </div>
        </div>
      </div>
    </main>
  );
}
