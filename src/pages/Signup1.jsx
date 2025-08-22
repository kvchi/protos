import React, { useState } from "react";
import { Frame } from "../assets/images";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { PiWarningCircleLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [businessName, setBusinessName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!businessName.trim()) return; 
    navigate("/email"); 
  };

  return (
    <main className="bg-gray-100 py-10 px-8 lg:px-30">
      <BsArrowLeft className="w-10 h-10 mb-10" />
      <div className="flex gap-10">
        <div className="lg:w-[40%]">
          <h2 className="text-3xl font-bold text-[#0E375F]">
            First Step, Create business name
          </h2>
          <p className="lg:text-xl font-medium w-[80%] lg:w-full mt-10">
            Let's get started with your business name
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="border-2 rounded-md w-[85%] border-gray-300 mt-6 p-2"
              placeholder="Enter Your Business name"
              required
            />

            <div className="flex items-center gap-1 text-gray-400">
              <PiWarningCircleLight className="w-10 h-10 mt-4" />
              <p className="text-xs leading-tight pt-4">
                Your business name would be used to create a listing for you
              </p>
            </div>

            <button
              type="submit"
              className="mt-8 bg-[#0E375F] py-3 px-4 rounded-lg text-white flex items-center gap-20 w-fit mx-15 lg:mx-25 mb-20 cursor-pointer"
            >
              Continue <BsArrowRight />
            </button>
          </form>
        </div>

        <div className="hidden md:block">
          <img src={Frame} alt="" className="mt-[-120px] mb-30" />
        </div>
      </div>
    </main>
  );
}
