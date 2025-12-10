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
        flex items-center gap-3 p-2
        ${
          showDetailsLayout
            ? "bg-[#E7EBEF] rounded-2xl shadow-sm lg:max-w-xl"
            : "bg-[#E7EBEF] rounded-md md:rounded-2xl shadow-md md:max-w-md lg:max-w-xl"
        }
      `}
    >
      {showDetailsLayout && (
        <div className="hidden md:flex items-center bg-white px-3 py-2 rounded-lg ">
          <input
            type="text"
            defaultValue={
              isMenuPage
              ? "Yenkemo Restaurant & Bar"
              : "Lagos, Nigeria"
            }
            readOnly
            className="outline-none bg-transparent text-gray-800 text-base md:text-sm"
          />
        </div>
      )}

      {showDetailsLayout && (
        <span className="hidden md:block w-[1px] h-8 bg-gray-400 opacity-50"></span>
      )}

      {!showDetailsLayout && (
        <>
          <div className="hidden lg:flex items-center gap-2">
            <p className="text-[#3A3A3A] text-sm">Category</p>
            <IoIosArrowDown />
          </div>
          <span className="hidden lg:block w-[1px] h-8 bg-[#3A3A3A] opacity-30"></span>
          <div className="hidden lg:flex items-center gap-2">
            <p className="text-[#3A3A3A] text-sm">Location</p>
            <IoIosArrowDown />
          </div>
          <span className="hidden lg:block w-[1px] h-8 bg-[#3A3A3A] opacity-30"></span>
        </>
      )}
      <div
        className={`
          flex flex-col w-full max-w-xs rounded-lg px-2 py-1
          ${
            showDetailsLayout
              ? "bg-white"
              : "bg-white shadow-sm"
          }
        `}
      >
        <div className="flex items-center gap-2">
          <IoSearch className="text-[#3A3A3A] lg:text-lg" />
          <input
            type="text"
            placeholder="Search with keyword"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 outline-none text-[#3A3A3A] placeholder-[#A0A0A0] text-base md:text-sm"
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>

      <button
        onClick={handleSearch}
        className="bg-primary text-white px-4 py-2 md:px-4 md:py-2 rounded-xl text-base cursor-pointer"
      >
        Search
      </button>
    </div>
  );
}
