import { useContext, useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RegistrationContext } from "../context/RegistrationContext";
import { ChevronDown, LogOut, LayoutDashboard, Truck } from "lucide-react";

export default function AuthButton({ signupText = "Sign up" }) {
  const { formData, token, logout } = useContext(RegistrationContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = !!token;
  const pathname = location.pathname;
  const isBusinessPage = pathname.startsWith("/business") ||
  pathname.startsWith("/dashboard/businessDashboard");
  const signupLink = isBusinessPage ? "/signup" : "/userSignup";

  // close dropdown if you click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (
    ["/signup", "/signin", "/userSignup","/userSignin", "/verifyEmail", "/confirmationEmail"].includes(
      pathname
    )
  ) {
    return null;
  }

  const dashboardLink = isBusinessPage ? "/dashboard/businessDashboard" : "/dashboard";

const dashboardText = isBusinessPage
  ? "Go to Business Dashboard"
  : "Go to User Dashboard";

const switchAccountLink = isBusinessPage ? "/home" : "/business";

const switchAccountText = isBusinessPage
  ? "Switch to User Account"
  : "Switch to Business Account";


  return (
    <div>
      {isLoggedIn ? (
        <div className="relative " ref={dropdownRef}>
          {/* Avatar and Name */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center bg-white rounded-xl px-4 py-2 shadow hover:bg-gray-50 transition"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-bold uppercase">
              {formData.first_name?.[0]}
              {formData.last_name?.[0]}
            </div>
            <p className="ml-3 text-primary font-medium flex items-center ">
              <span className="hidden md:block">Hi,&nbsp;</span>
              <span className="font-semibold text-accent hidden md:block">
                {formData.first_name} {formData.last_name}
              </span>
              <ChevronDown
                className={`ml-2 w-4 h-4 transition-transform duration-200 block ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </p>
          </button>

          {/* Dropdown */}
          {isOpen && (
            <div className="absolute right-0 mt-1 w-56 bg-white  rounded-md shadow-lg py-2 z-50">
               <Link
                to={dashboardLink}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 text-primary border-b"
                onClick={() => setIsOpen(false)}
              >
                <LayoutDashboard className="w-4 h-4" />
                <p className="text-sm">{dashboardText}</p>
              </Link>
             <Link
                to={switchAccountLink}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 text-primary border-b"
                onClick={() => setIsOpen(false)}
              >
                <Truck className="w-4 h-4" />
                <p className="text-sm">{switchAccountText}</p>
              </Link>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                  navigate("/");
                }}
                className="flex w-full items-center gap-3 px-4 py-3 hover:bg-gray-100 text-red-500 transition"
              >
                <LogOut className="w-4 h-4" />
                Log out
              </button>
            </div>
          )}
        </div>
      ) : (
        // Not logged in
        <div className="flex items-center gap-4 sm:gap-6 py-2">
          <Link
            to="/userSignin"
            className="border-2 rounded-xl border-primary px-3 sm:px-4 py-1.5 sm:py-2"
          >
            <button className="text-primary text-sm sm:text-base font-normal cursor-pointer">
              Log in
            </button>
          </Link>
          <Link
            to={signupLink}
            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary rounded-xl hidden md:block"
          >
            <button className="text-white text-sm sm:text-base font-normal cursor-pointer">
              {signupText}
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
