import React, { useState, useEffect } from "react";
import { Frame2 } from "../assets/images";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { PiWarningCircleLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Email() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleChange = (e) => {
    setEmail(e.target.value);
    localStorage.setItem("email", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    navigate("/tel");
  };

  const handleBack = () => {
    navigate(-1);
  };


  return (
    <main className="bg-gray-100 py-10 px-8 lg:px-30">
      <BsArrowLeft className="w-10 h-10 mb-10 cursor-pointer" 
              onClick={handleBack}  />
      <div className="flex gap-10 ">
        <div className=" lg:w-[40%]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0E375F] lg:w-[90%] w-[85%] leading-snug">
            Continue with Protos Business account sign up
          </h2>
          <p className="lg:text-xl font-medium w-[80%] lg:w-full mt-10">
            Your Business email address
          </p>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={handleChange}
              className="border-2 rounded-md  w-[85%] border-gray-300 mt-6 p-2"
              placeholder="Yemkemo@gmail.com"
              required
            />
            <div className="flex items-center gap-1 text-gray-400">
              <PiWarningCircleLight className="w-10 h-10 mt-4 " />
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
        <div className="hidden lg:block">
          <img src={Frame2} alt="" className="mt-[-70px] mb-30" />
        </div>
      </div>
    </main>
  );
}
