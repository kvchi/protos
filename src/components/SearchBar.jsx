import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

export default function SearchBar({ onFocus, onBlur, forceDetailsLayout = false }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

 const showDetailsLayout = forceDetailsLayout || pathname === "/searchDetails" || pathname === "/menu" 
const isMenuPage = pathname === "/menu";



  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setError("Enter a keyword.");
      return;
    }
    setError("");
    navigate("/searchresult");
  };

  return (
    <div
      className={`
        flex items-center gap-2 sm:gap-3 p-2 sm:p-3
        ${
          showDetailsLayout
            ? "bg-[#E7EBEF] rounded-2xl shadow-sm lg:max-w-xl"
            : "bg-[#E7EBEF] rounded-lg sm:rounded-xl md:rounded-2xl shadow-md w-full min-w-0"
        }
      `}
    >
      {showDetailsLayout && (
        <div className="hidden md:flex items-center bg-white px-3 py-2 rounded-lg min-w-0 flex-1">
          <input
            type="text"
            defaultValue={
              isMenuPage
              ? "Yenkemo Restaurant & Bar"
              : "Lagos, Nigeria"
            }
            readOnly
            className="outline-none bg-transparent text-gray-800 text-base md:text-sm w-full min-w-0"
          />
        </div>
      )}

      {showDetailsLayout && (
        <span className="hidden md:block w-[1px] h-8 bg-gray-400 opacity-50 shrink-0" aria-hidden="true" />
      )}

      {!showDetailsLayout && (
        <>
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <p className="text-[#3A3A3A] text-sm whitespace-nowrap">Category</p>
            <IoIosArrowDown />
          </div>
          <span className="hidden lg:block w-[1px] h-8 bg-[#3A3A3A] opacity-30 shrink-0" aria-hidden="true" />
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <p className="text-[#3A3A3A] text-sm whitespace-nowrap">Location</p>
            <IoIosArrowDown />
          </div>
          <span className="hidden lg:block w-[1px] h-8 bg-[#3A3A3A] opacity-30 shrink-0" aria-hidden="true" />
        </>
      )}
      <div
        className={`
          flex flex-col flex-1 min-w-0 rounded-lg px-2 py-1 sm:px-3 sm:py-1.5
          ${
            showDetailsLayout
              ? "bg-white"
              : "bg-white shadow-sm"
          }
        `}
      >
        <div className="flex items-center gap-2 min-w-0">
          <IoSearch className="text-[#3A3A3A] lg:text-lg shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
          <input
            type="text"
            placeholder="Search with keyword"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 min-w-0 outline-none text-[#3A3A3A] placeholder-[#A0A0A0] text-sm sm:text-base"
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>

      <button
        onClick={handleSearch}
        className="bg-primary text-white px-4 py-2.5 sm:px-5 sm:py-2 rounded-lg sm:rounded-xl text-sm sm:text-base cursor-pointer shrink-0"
      >
        Search
      </button>
    </div>
  );
}
