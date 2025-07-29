import React from "react";

export default function Footer() {
  return (
    <div className="">
      <div className="bg-[#0E375F] w-full md:flex items-start gap-24 pt-30 px-15">
        <div className="min-w-[150px]">
          <h2 className="text-white text-3xl font-bold">Protos</h2>
        </div>
        <div className="flex gap-25 pb-15">
          <div>
            <h3 className="text-[#FFA500] text-lg font-semibold">Discovery</h3>
            <div className="text-white font-light space-y-3">
              <p>Articles</p>
              <p>Find a Business</p>
              <p>Categories</p>
              <p>Events</p>
            </div>
          </div>

          <div>
            <h3 className="text-[#FFA500] text-lg font-semibold">
              For Business
            </h3>
            <div className="text-white font-light space-y-3">
              <p>Protos for business</p>
              <p>Advertise what you own</p>
              <p>Business Blog</p>
            </div>
          </div>
          <div>
            <h3 className="text-[#FFA500] text-lg font-semibold">
              About Protos
            </h3>
            <div className="text-white font-light space-y-3">
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Help Center</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0E375F] pl-40 pt-8">
        <p className="text-white text-sm">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <span className="text-[#FFA500]">Protos.</span> All rights reserved. |
          Privacy Policy | Terms of Service
        </p>
      </div>
    </div>
  );
}
