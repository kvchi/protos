import { FiSearch } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoFunnelOutline } from "react-icons/io5";
import Filtered from "./Filtered";
import SearchRestaurantList from "./SearchRestaurantList";
import { useState } from "react";

const SORT_OPTIONS = [
  { value: "distance", label: "Distance" },
  { value: "rating", label: "Rating" },
  { value: "name", label: "Name A–Z" },
  { value: "reviews", label: "Most reviews" },
];

export default function Search() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState("distance");

  
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

          <div className="flex items-center gap-2 ml-auto lg:ml-0 relative">
            <p className="font-semibold text-gray-800 text-sm sm:text-base">
              Sort:
            </p>
            <div
              role="button"
              tabIndex={0}
              onClick={() => setSortOpen((o) => !o)}
              onKeyDown={(e) => e.key === "Enter" && setSortOpen((o) => !o)}
              className="flex items-center justify-between border rounded-md px-3 py-2 text-gray-700 shadow-sm cursor-pointer text-sm sm:text-base w-[70%] sm:w-auto min-w-[8rem] bg-white hover:bg-gray-50"
            >
              <span>
                {SORT_OPTIONS.find((o) => o.value === sortBy)?.label ?? "Distance"}
              </span>
              <RiArrowDropDownLine
                className={`w-6 h-6 text-gray-600 transition-transform ${sortOpen ? "rotate-180" : ""}`}
              />
            </div>
            {sortOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  aria-hidden
                  onClick={() => setSortOpen(false)}
                />
                <ul
                  className="absolute right-0 top-full mt-1 z-20 py-1 w-full min-w-[10rem] bg-white border rounded-md shadow-lg text-sm"
                  role="listbox"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <li
                      key={opt.value}
                      role="option"
                      aria-selected={sortBy === opt.value}
                      onClick={() => {
                        setSortBy(opt.value);
                        setSortOpen(false);
                      }}
                      className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                        sortBy === opt.value ? "bg-primary/10 text-primary font-medium" : "text-gray-700"
                      }`}
                    >
                      {opt.label}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </section>

      <SearchRestaurantList locationName="Lagos" />
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
