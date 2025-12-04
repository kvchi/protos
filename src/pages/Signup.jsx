import React from "react";
import { hand } from "../assets/images";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <main className="bg-gray-200">
      <div className="flex items-center px-4 lg:px-28 gap-10 pb-30">
        <div className="w-full lg:w-[40%] mt-10">
          <h2 className="text-xl md:text-3xl font-bold text-[#0E375F]">
            Hi there, Welcome to Protos business account sign up
          </h2>
          <p className="text-xl font-semibold w-[70%] mt-10">
            Let's help you get your business the recognition it needs
          </p>
          <div className="mt-8  bg-primary py-3 px-4 rounded-lg text-white w-fit mx-15 lg:mx-25 mb-20">
            <Link to={"/signup1"} className="flex  items-center gap-20">
              Continue <BsArrowRight />
            </Link>
          </div>
        </div>
        <div className="place-items-center hidden lg:grid relative">
          <img src={hand} alt="" />
        </div>
      </div>
    </main>
  );
}
