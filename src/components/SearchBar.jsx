// src/components/Embla/SearchBar.jsx
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


export default function SearchBar({ onFocus, onBlur }) {
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/searchresult");
    };

  return (
    <div className="bg-[#E7EBEF] rounded-md md:rounded-xl flex items-center gap-3 p-2 md:p-3 shadow-md">
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

      <div className="bg-white flex items-center gap-2 px-2 py-1 rounded-lg shadow-sm w-full max-w-xs">
        <IoSearch className="text-[#3A3A3A] lg:text-lg" />
        <input
          type="text"
          placeholder="Search with keyword"
          className="flex-1 outline-none border-none text-[#3A3A3A] placeholder-[#A0A0A0] text-sm"
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>

      <button
      onClick={handleSearch}
       className="bg-[#0E375F] text-white px-4 py-2 md:px-6 md:py-3 rounded-md text-sm lg:text-base cursor-pointer">
        Search
      </button>
    </div>
  );
}
