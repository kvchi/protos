import { Facebook, Instagram, twitter } from "../assets/images";

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

    <div className="flex flex-row gap-3 md:gap-8 lg:gap-24 text-start md:text-left w-full">
     
      <div className="">
        <h3 className="text-[#FFA500] text-[10px] md:text-lg font-semibold pb-3">
          Discovery
        </h3>
        <div className="text-white font-light space-y-2 text-[12px] md:text-base">
          <p>Articles</p>
          <p>Find a Business</p>
          <p>Categories</p>
          <p>Events</p>
        </div>
      </div>

      
      <div>
        <h3 className="text-[#FFA500] text-[12px] md:text-lg font-semibold pb-3">
          For Business
        </h3>
        <div className="text-white font-light space-y-2 text-[12px] md:text-base">
          <p>Protos for business</p>
          <p>Advertise what you own</p>
          <p>Business Blog</p>
        </div>
      </div>
      <div>
        <h3 className="text-[#FFA500] text-[12px] md:text-lg font-semibold pb-3">
          About Protos
        </h3>
        <div className="text-white font-light space-y-2 text-[12px] md:text-base">
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Help Center</p>
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
