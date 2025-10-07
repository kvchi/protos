import { Link, useLocation } from "react-router-dom";
import AuthButton from "./AuthButton";

export default function Header() {
  const location = useLocation();
  console.log(location.pathname);

  const isBusinessPage = location.pathname === "/business";

  const signupText = isBusinessPage ? "Create Business account" : "Sign up";
  

  return (
    <div className="bg-[#E7EBEF] w-full shadow-3xl">
      <div className="flex items-center justify-between px-6 sm:px-10 lg:px-20 py-6">
        <Link
          to="/"
          className="text-[#0E375F] text-xl sm:text-2xl font-semibold"
        >
          Protos
        </Link>
        <AuthButton signupText={signupText} />
      
      </div>
    </div>
  );
}
