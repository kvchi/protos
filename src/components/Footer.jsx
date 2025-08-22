import { Facebook, Instagram, twitter } from "../assets/images";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#0E375F] w-full px-4 md:px-10 lg:px-30 pt-10 pb-8">
  <div className="flex flex-col md:flex-row md:items-start md:gap-10 lg:gap-24">
    
    <div className="mb-8 md:mb-0 md:min-w-[150px] flex md:flex-col md:items-start items-center justify-between">
      <h2 className="text-white text-2xl md:text-3xl font-bold text-start md:text-left cursor-pointer">
        Protos
      </h2>
      <div className=" flex gap-2 pt-0 md:pt-2">
        <img src={twitter} alt="" />
        <img src={Facebook} alt="" />
        <img src={Instagram} alt="" />
      </div>
    </div>

    <div className="flex flex-row gap-3 md:gap-8 lg:gap-24 text-start md:text-left w-full ">
     
      <div className="">
        <h3 className="text-[#FFA500] text-[10px] md:text-lg font-semibold pb-3">
          Discovery
        </h3>
        <div className="flex flex-col text-white font-light space-y-2 text-[12px] md:text-base">
          <Link to="/" className="cursor-pointer">Articles</Link>
          <Link className="cursor-pointer">Find a Business</Link>
          <Link to="/category" className="cursor-pointer">Categories</Link>
          <Link className="cursor-pointer">Events</Link>
        </div>
      </div>

      
      <div>
        <h3 className="text-[#FFA500] text-[12px] md:text-lg font-semibold pb-3">
          For Business
        </h3>
        <div className="text-white font-light space-y-2 text-[12px] md:text-base ">
          <p className="cursor-pointer">Protos for business</p>
          <p className="cursor-pointer">Advertise what you own</p>
          <p className="cursor-pointer">Business Blog</p>
        </div>
      </div>
      <div>
        <h3 className="text-[#FFA500] text-[12px] md:text-lg font-semibold pb-3">
          About Protos
        </h3>
        <div className="flex flex-col text-white font-light space-y-2 text-[12px] md:text-base">
          <Link to="/about" className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>About Us</Link>
          <Link to="/contact" className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>Contact Us</Link>
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
          <p className="cursor-pointer">Help Center</p>
        </div>
      </div>
    </div>
  </div>

  {/* Footer */}
  <div className="pt-10 text-center">
    <p className="text-white text-xs md:text-sm px-2">
      Copyright &copy; {new Date().getFullYear()}{" "}
      <span className="text-[#FFA500]">Protos.</span> All rights reserved. |
      Privacy Policy | Terms of Service
    </p>
  </div>
</div>

  );
}
