import { Facebook, Instagram, twitter } from "../assets/images";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-primary w-full px-4 md:px-10 lg:px-30 pt-10 pb-8">
      <div className="flex flex-col md:flex-row md:items-start md:gap-10 lg:gap-80">
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

        <div className="flex flex-row gap-3 md:gap-8 lg:gap-30 text-start md:text-left w-full ">
          <div className="">
            <h3 className="text-accent text-[10px] md:text-lg font-semibold pb-3">
              Discovery
            </h3>
            <div className="flex flex-col text-white font-light space-y-2 text-[12px] md:text-base">
              <Link to="/" className="cursor-pointer hover:text-accent transition-colors">
                Articles
              </Link>
              <Link className="cursor-pointer hover:text-accent transition-colors">Find a Business</Link>
              <Link
                to="/category"
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
                className="cursor-pointer hover:text-accent transition-colors"
              >
                Categories
              </Link>
              <Link className="cursor-pointer hover:text-accent transition-colors">Events</Link>
            </div>
          </div>

          <div>
            <h3 className="text-accent text-[12px] md:text-lg font-semibold pb-3">
              For Business
            </h3>
            <div className="text-white font-light space-y-2 text-[12px] md:text-base ">
              <Link
                to="/business"
                className="cursor-pointer hover:text-accent transition-colors"
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
              >
                Protos for business
              </Link>
              <p className="cursor-pointer hover:text-accent transition-colors">Advertise what you own</p>
              <Link
                to="/blog"
                className="cursor-pointer hover:text-accent transition-colors"
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
              >
                Business Blog
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-accent text-[12px] md:text-lg font-semibold pb-3">
              About Protos
            </h3>
            <div className="flex flex-col text-white font-light space-y-2 text-[12px] md:text-base">
              <Link
                to="/about"
                className="cursor-pointer hover:text-accent transition-colors"
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="cursor-pointer hover:text-accent transition-colors"
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
              >
                Contact Us
              </Link>
              <p className="cursor-pointer hover:text-accent transition-colors">Privacy Policy</p>
              <p className="cursor-pointer hover:text-accent transition-colors">Terms of Service</p>
              <p className="cursor-pointer hover:text-accent transition-colors">Help Center</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-10 text-center">
        <p className="text-white text-xs md:text-sm px-2">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <span className="text-accent">Protos.</span> All rights reserved. |
          Privacy Policy | Terms of Service
        </p>
      </div>
    </div>
  );
}
