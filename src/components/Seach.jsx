import React from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import rectangle133 from "../assets/images/rectangle133.png";

export default function Search() {
  return (
    <main className="w-full lg:w-[80%] mx-auto flex flex-col">
      {/* SEARCH BAR */}
      <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full px-4 md:px-8 lg:px-10 rounded-lg py-5 md:py-10 gap-4">
        {/* LEFT SEARCH AREA */}
        <div className="flex flex-row items-start lg:items-center bg-[#F3F6F9] rounded-lg overflow-hidden shadow-sm p-3 lg:p-2 lg:ml-12 gap-3">
          {/* Location input */}
          <input
            type="text"
            placeholder="Lagos, Nigeria"
            className="hidden md:block px-4 py-2 bg-white outline-none text-gray-800 rounded-lg "
          />

          {/* Divider */}
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

            <button className="bg-[#0E375F] text-white px-5 py-2 font-semibold hover:bg-[#102f4e] transition-all rounded-lg w-auto">
              Search
            </button>
          </div>
        </div>

        {/* RIGHT SORT */}
        <div className="flex items-center gap-3 justify-end lg:justify-start w-full lg:w-auto px-2">
          <p className="font-semibold text-gray-800 text-sm sm:text-base">
            Sort:
          </p>
          <div className="flex items-center lg:justify-between border rounded-md px-3 py-2 text-gray-700 shadow-sm cursor-pointer text-sm sm:text-base w-[30%] sm:w-auto">
            <span>Distance</span>
            <RiArrowDropDownLine className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="px-4 md:px-8 lg:px-10">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-[#0E375F]">
            Restaurants
          </h2>
          <p className="text-sm md:text-base">
            Here are restaurants in{" "}
            <span className="text-[#ffa500] font-semibold underline underline-offset-4">
              Lagos
            </span>
          </p>
        </div>

        {/* RESTAURANT CARD */}
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="flex flex-col lg:flex-row border border-gray-200 p-4 md:p-5 rounded-lg my-6 md:my-8 w-full shadow-sm hover:shadow-md transition-all bg-white"
          >
            {/* LEFT IMAGE */}
            <div className="w-full lg:w-56">
              <img
                src={rectangle133}
                alt="restaurant"
                className="w-full lg:w-56 object-cover rounded-md"
              />
            </div>

            {/* RIGHT DETAILS */}
            <div className="mt-3 lg:mt-0 lg:ml-5 flex-1 lg:border-r border-gray-200">
              <h1 className="text-lg font-bold text-[#ffa500]">
                Yemkemo Restaurant & Bar
              </h1>

              {/* RATINGS AND COMMENTS */}
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

              {/* ADDRESS */}
              <div className="flex items-start gap-2 text-gray-600 mt-2 text-sm">
                <FiMapPin className="text-red-500 mt-0.5" />
                <p>
                  365 Ikari Village, Ikeja, Lagos state, Nigeria.{" "}
                  <span className="text-red-400 font-medium cursor-pointer hover:underline">
                    (Direction)
                  </span>
                </p>
              </div>

              {/* TAGS */}
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
                    className="px-3 py-1 border border-[#0E375F] rounded-full text-[#0E375F] text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT INFO SECTION */}
            <div className="mt-4 lg:mt-0 lg:ml-5 w-full lg:w-[35%] flex flex-col justify-between">
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold">Information:</span> Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
                <span className="text-[#ffa500] ml-1 font-medium cursor-pointer hover:underline">
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
    </main>
  );
}
