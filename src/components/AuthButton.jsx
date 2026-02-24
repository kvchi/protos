import { useContext, useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RegistrationContext } from "../context/RegistrationContext";
import { useSwitchAccount } from "../context/SwitchAccountContext";
import { ChevronDown, LogOut, LayoutDashboard } from "lucide-react";

const SWITCH_LOADING_DURATION_MS = 2500;

export default function AuthButton({ signupText = "Sign up" }) {
  const { formData, token, logout } = useContext(RegistrationContext);
  const { setShowSwitchLoading } = useSwitchAccount();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  const isLoggedIn = !!token;

  /* ---------------- DASHBOARD DETECTION ---------------- */
  const isOnBusinessDashboard = pathname.startsWith("/dashboard/businessDashboard");
  const isOnUserDashboard = pathname === "/dashboard";

  let dashboardLink = {
    label: "Go to User Dashboard",
    path: "/dashboard",
  };

  if (isOnUserDashboard) {
    dashboardLink = {
      label: "Go to Business Dashboard",
      path: "/dashboard/businessDashboard",
    };
  } else if (isOnBusinessDashboard) {
    dashboardLink = {
      label: "Go to User Dashboard",
      path: "/dashboard",
    };
  }

  const signupLink = pathname.startsWith("/business") ? "/signup" : "/userSignup";

  /* ---------------- CLOSE DROPDOWN ON OUTSIDE CLICK ---------------- */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ---------------- HIDE ON AUTH PAGES ---------------- */
  if (
    [
      "/signup",
      "/signin",
      "/userSignup",
      "/userSignin",
      "/verifyEmail",
      "/confirmationEmail",
    ].includes(pathname)
  ) {
    return null;
  }

  return (
    <div>
      {isLoggedIn ? (
        <div className="relative" ref={dropdownRef}>

          {/* Avatar Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center bg-white rounded-xl px-4 py-2 shadow hover:bg-gray-50 transition"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-bold uppercase">
              {formData.first_name?.[0]}
              {formData.last_name?.[0]}
            </div>

            <p className="ml-3 text-primary font-medium flex items-center">
              <span className="hidden md:block">Hi,&nbsp;</span>
              <span className="font-semibold text-accent hidden md:block">
                {formData.first_name} {formData.last_name}
              </span>

              <ChevronDown
                className={`ml-2 w-4 h-4 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </p>
          </button>

          {/* Dropdown */}
          {isOpen && (
            <div className="absolute right-0 mt-1 w-56 bg-white rounded-md shadow-lg py-2 z-50">

              {/* SWITCH DASHBOARD */}
              <Link
                to={dashboardLink.path}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 text-primary border-b"
                onClick={(e) => {
                  setIsOpen(false);

                  const switchingBetweenDashboards =
                    (isOnUserDashboard && dashboardLink.path.includes("business")) ||
                    (isOnBusinessDashboard && dashboardLink.path === "/dashboard");

                  if (switchingBetweenDashboards) {
                    e.preventDefault();
                    const mode = dashboardLink.path.includes("business") ? "business" : "user";
                    setShowSwitchLoading(true, mode);

                    setTimeout(() => {
                      window.location.href = dashboardLink.path;
                    }, SWITCH_LOADING_DURATION_MS);
                  }
                }}
              >
                <LayoutDashboard className="w-4 h-4" />
                <p className="text-sm">{dashboardLink.label}</p>
              </Link>

              {/* LOGOUT */}
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
        /* NOT LOGGED IN */
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
