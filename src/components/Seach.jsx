// import React, { useState } from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import Rectangle133 from "../assets/images/Rectangle133.png";
import { IoFunnelOutline } from "react-icons/io5";
import Filtered from "./Filtered";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  
  return (
    <main className="w-full lg:w-[80%] mx-auto flex flex-col">
      <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full px-4 md:px-8 lg:px-10 rounded-lg py-5 md:py-10 gap-4">
        <div className="flex flex-row items-start lg:items-center bg-secondary rounded-lg overflow-hidden shadow-sm p-3 lg:p-2 lg:ml-12 gap-3">
          <input
            type="text"
            placeholder="Lagos, Nigeria"
            className="hidden md:block px-4 py-2 bg-white outline-none text-gray-800 rounded-lg "
          />

          <div className="hidden lg:block h-6 w-[1px] bg-gray-600 mx-2" />

          <div className="flex flex-row items-center gap-3 w-full lg:w-auto">
            <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-sm flex-1">
              <FiSearch className="text-gray-500 w-5 h-5 mx-2" />
              <input
                type="text"
                placeholder="Search with keyword"
                className="px-2 py-2 bg-transparent outline-none text-gray-700 w-full sm:w-60"
              />
            </div>

            <button className="bg-primary text-white px-5 py-2 font-semibold hover:bg-[#102f4e] transition-all rounded-lg w-auto">
              Search
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 justify-end lg:justify-start w-full lg:w-auto px-2 relative">
        
          <div
            className="absolute left-0 flex items-center gap-2 cursor-pointer lg:hidden"
            onClick={()=>{setIsFilterOpen(true)}}
          >
            <h2 className="text-base font-semibold text-primary">Filter</h2>
            <IoFunnelOutline className="w-6 h-6 text-primary" />
          </div>

          <div className="flex items-center gap-2 ml-auto lg:ml-0">
            <p className="font-semibold text-gray-800 text-sm sm:text-base">
              Sort:
            </p>
            <div className="flex items-center border rounded-md px-3 py-2 text-gray-700 shadow-sm cursor-pointer text-sm sm:text-base w-[70%] sm:w-auto">
              <span>Distance</span>
              <RiArrowDropDownLine className="w-6 h-6 text-gray-600" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-10">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-primary">
            Restaurants
          </h2>
          <p className="text-sm md:text-base">
            Here are restaurants in{" "}
            <span className="text-accent font-semibold underline underline-offset-4">
              Lagos
            </span>
          </p>
        </div>

        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="flex flex-col lg:flex-row border border-gray-200 p-4 md:p-5 rounded-lg my-6 md:my-8 w-full shadow-sm hover:shadow-md transition-all bg-white"
          >
            <div className="w-full lg:w-56">
              <img
                src={Rectangle133}
                alt="restaurant"
                className="w-full lg:w-56 object-cover rounded-md cursor-pointer"
                onClick={()=> navigate("/searchDetails")}
              />
            </div>

            <div className="mt-3 lg:mt-0 lg:ml-5 flex-1 lg:border-r border-gray-200">
              <h1 className="text-lg font-bold text-accent">
                Yemkemo Restaurant & Bar
              </h1>

              <div className="flex flex-wrap items-center gap-3 mt-2 text-sm">
                <div className="flex items-center text-green-600 font-semibold">
                  <AiFillStar className="text-[#28a745] mr-1" /> 4.5 (122
                  ratings)
                </div>
                <div className="flex items-center text-gray-500">
                  <FaRegCommentDots className="text-red-400 mr-1" /> 2444
                  Comments
                </div>
              </div>

              <div className="flex items-start gap-2 text-gray-600 mt-2 text-sm">
                <FiMapPin className="text-red-500 mt-0.5" />
                <p>
                  365 Ikari Village, Ikeja, Lagos state, Nigeria.{" "}
                  <span
                  onClick={() => navigate("/map")} className="text-red-400 font-medium cursor-pointer hover:underline">
                    (Direction)
                  </span>
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {[
                  "Restaurant",
                  "Grills",
                  "Sushi",
                  "Japanese",
                  "Breakfast & brunch",
                  "Vegetable Salad",
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 border border-primary rounded-full text-primary text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 lg:mt-0 lg:ml-5 w-full lg:w-[35%] flex flex-col justify-between">
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold">Information:</span> Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
                <span className="text-accent ml-1 font-medium cursor-pointer hover:underline">
                  Read more
                </span>
              </p>
              <button className="self-end text-[#e63946] font-semibold hover:underline mt-3">
                Visit website
              </button>
            </div>
          </div>
        ))}
      </section>
       <div className="lg:hidden">
        <Filtered 
        isOpen={isFilterOpen}
        onOpen={() => setIsFilterOpen(true)}
        onClose={() => setIsFilterOpen(false)}
      /> 
       </div>
    </main>
  );
}
