import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-[#E7EBEF]  w-full">
      <div className="flex items-center justify-between px-6 sm:px-10 lg:px-20 py-6 ">
        <Link to="/" className="text-[#0E375F] text-xl sm:text-2xl font-semibold">
          Protos
        </Link>

        <div className="flex items-center gap-4 sm:gap-6 py-2">
          <Link to="/login" className="border-2 rounded-xl border-[#0E375F] px-3 sm:px-4 py-1.5 sm:py-2">
            <button className="text-[#0E375F] text-sm sm:text-base font-normal cursor-pointer">
              Log in
            </button>
          </Link>
          <Link to="/signup" className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0E375F] rounded-xl hidden md:block">
            <button className="text-white text-sm sm:text-base font-normal cursor-pointer">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
