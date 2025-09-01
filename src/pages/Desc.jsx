import { useState, useEffect } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { PiWarningCircleLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { Frame2 } from "../assets/images";

export default function Desc() {
    const navigate = useNavigate();
    const [Desc, setDesc] = useState("");

    useEffect(() => {
        const savedDesc = localStorage.getItem("desc");
        if (savedDesc) {
          setDesc(savedDesc);
        }
    }, []);

    const handleChnage = (e) => {
        setDesc(e.target.value);
        localStorage.setItem("desc", e.target.value);}

    const handleSubmit = (e) => {
    e.preventDefault();
    if (!Desc.trim()) return; 
    navigate("/businessInfo"); 
    };
  
    const handleBack = () => {
      navigate(-1);
    
};

  return (
     <main className="bg-gray-100 py-10 px-8 lg:px-30">
          <BsArrowLeft className="w-10 h-10 mb-10 cursor-pointer" 
        onClick={handleBack}  />
          <div className="flex gap-30">
            <div className="lg:w-[35%]">
              <h2 className="text-3xl font-bold text-[#0E375F]">
                Continue with Protos <br /> Business account sign up
              </h2>
              <p className="lg:text-xl font-medium w-[80%] lg:w-full mt-10">
                Your business description
              </p>
    
              <form onSubmit={handleSubmit}>
                <textarea
                  type="text"
                  value={Desc}
                  onChange={handleChnage}
                  className="border-2 rounded-md w-[100%] border-gray-300 mt-6 p-2 h-30  resize-none"
                  placeholder="Enter Your Business name"
                  required
                />
    
                <div className="flex items-center gap-1 text-gray-400">
                  <PiWarningCircleLight className="w-10 h-10 mt-4" />
                  <p className="text-xs leading-tight pt-4">
                    Something about your business, this can be changed later in your dashboard
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
              <img src={Frame2} alt="" className="mt-[-60px] mb-30" />
            </div>
          </div>
        </main>
  )
}
