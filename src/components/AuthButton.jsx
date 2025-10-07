import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { RegistrationContext } from "../context/RegistrationContext";

export default function AuthButton({ signupText = "Sign up" }) {
    const { formData, token, logout } = useContext(RegistrationContext);
      console.log("TOKEN FROM CONTEXT", token)
    
      const isLoggedIn = !!token;
      const location = useLocation();
      console.log(location.pathname);

      const pathname = location.pathname;

      const isBusinessPage = location.pathname === "/business";
      const signupLink = isBusinessPage ? "/signup" : "/userSignup";

      if (pathname === "/signup" || pathname === "/signin" || pathname === "/userSignup" || pathname === "/verifyEmail" || pathname === "/confirmationEmail") {
        return null;
      }

  return (
    <div>
        {isLoggedIn ? (
          <div className="flex items-center bg-white rounded-xl px-4 py-2 shadow">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0E375F] text-white font-bold">
              {formData.first_name?.[0]}
              {formData.last_name?.[0]}
            </div>
            <p className="ml-3 text-[#0E375F]">
              Hi,{" "}
              <span className="font-semibold">
                {formData.first_name} {formData.last_name}
              </span>
            </p>
            <button
              onClick={logout}
              className="ml-4 text-sm text-red-500 border border-red-500 px-3 py-1 rounded-lg"
            >
              Logout
            </button>
          </div>
        ) : (
          // If not logged in, show Log in / Sign up buttons
          <div className="flex items-center gap-4 sm:gap-6 py-2">
            <Link
              to="/signin"
              className="border-2 rounded-xl border-[#0E375F] px-3 sm:px-4 py-1.5 sm:py-2"
            >
              <button className="text-[#0E375F] text-sm sm:text-base font-normal cursor-pointer">
                Log in
              </button>
            </Link>
            <Link
              to={signupLink}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0E375F] rounded-xl hidden md:block"
            >
              <button className="text-white text-sm sm:text-base font-normal cursor-pointer">
                {signupText}
              </button>
            </Link>
          </div>
        )}
    </div>
  )
}
