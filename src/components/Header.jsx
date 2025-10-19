import { Link, useLocation, useNavigate} from "react-router-dom";
import AuthButton from "./AuthButton";
import { useEffect, useState } from "react";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const showBusinessText = 
  location.pathname === "/business" || location.pathname === "/learnMore";

  const isBusinessPage = location.pathname === "/business";
  const signupText = isBusinessPage ? "Create Business account" : "Sign up";

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      navigate("/home")
    } else {
      navigate("/")
    }
  }
  

  return (
    <div className="bg-[#E7EBEF] w-full shadow-3xl">
      <div className="flex items-center justify-between px-6 sm:px-10 lg:px-20 py-6">
        <Link
          to="/"
          className="text-[#0E375F] text-xl sm:text-2xl font-semibold"
          onClick={handleLogoClick}
        >
          <span className="block">Protos</span>
          {showBusinessText && (
            <span className="block text-sm font-semibold text-[#664200]">
              for Business
            </span>
          )}
        </Link>

        <AuthButton signupText={signupText} />
      
      </div>
    </div>
  );
}
