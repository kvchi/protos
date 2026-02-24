import { useState, useRef, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Frame8 } from "../../assets/images";
import { RegistrationContext } from "../../context/RegistrationContext";
import { toast } from "react-toastify";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Static OTP for development only (reduces email API calls). Production uses real OTPs.
const DEV_OTP = "1234";
const isDev = import.meta.env.DEV;

export default function VerifyEmail() {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { login } = useContext(RegistrationContext);

  const email = localStorage.getItem("email");
  const verifyType = localStorage.getItem("verifyType");

  useEffect(() => {
    if (!email || !verifyType) {
      toast.error("Invalid verification attempt");
      navigate("/signin");
    }
  }, [email, verifyType, navigate]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const fillDevOtp = () => {
    const digits = DEV_OTP.split("");
    setCode(digits);
    inputRefs.current[0]?.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullCode = code.join("");

    if (fullCode.length !== 4) {
      toast.error("Please enter the full 4-digit code");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        `${BASE_URL}/auth/verify/`,
        { code: Number(fullCode) },
        { headers: { "Content-Type": "application/json" } }
      );

      // ---- FLOW CONTROL ----
      if (verifyType === "signup") {
        toast.success("Email verified successfully");
        localStorage.removeItem("verifyType");
        navigate("/signin");
      }

      else if (verifyType === "login") {
        const accessToken = res.data?.token?.access_token;
        const userData = res.data?.user;

        if (!accessToken || !userData) {
          throw new Error("Invalid login verification response");
        }

        login(userData, accessToken);
        localStorage.setItem("token", accessToken);
        localStorage.setItem("user", JSON.stringify(userData));

        toast.success("Login verified successfully");
        localStorage.removeItem("verifyType");
        navigate("/home");
      }

      else if (verifyType === "reset-password") {
        toast.success("Code verified. Reset your password");

        // unlock reset-password page
        localStorage.setItem("resetVerified", "true");
        localStorage.removeItem("verifyType");

        navigate("/reset-password");
      }

    } catch (err) {
      console.error("Verification failed:", err.response?.data || err.message);
      const status = err.response?.status;
      const data = err.response?.data;
      // Backend may return HTML error page for 500
      const message =
        typeof data?.message === "string"
          ? data.message
          : typeof data?.detail === "string"
            ? data.detail
            : status === 500
              ? "Server error during verification. Please request a new code and try again."
              : "Verification failed. Try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col lg:flex-row lg:items-center bg-gray-50 px-8 lg:px-30">
      <aside className="flex flex-col justify-center space-y-6 lg:w-1/2 mt-10">
        <h1 className="text-2xl lg:text-4xl font-bold text-[#0E375F]">
          Email Confirmation
        </h1>
        <p className="text-gray-600 lg:text-lg">
          {isDev
            ? "In development, no email is sent. Use the code 1234 below (or click \"fill dev OTP\")."
            : "A verification code has been sent to your email."}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <p className="text-[#0E375F] font-medium mb-3">
              Enter Verification Code
            </p>

            <div className="flex gap-5">
              {code.map((num, i) => (
                <input
                  key={i}
                  ref={(el) => (inputRefs.current[i] = el)}
                  type="text"
                  value={num}
                  onChange={(e) => handleChange(e.target.value, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className="w-16 h-16 text-center text-3xl border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#0E375F]"
                />
              ))}
            </div>
            {isDev && (
              <p className="mt-2 text-sm text-gray-500">
                Dev: Use OTP <strong>{DEV_OTP}</strong> or{" "}
                <button
                  type="button"
                  onClick={fillDevOtp}
                  className="text-[#0E375F] font-semibold underline hover:no-underline"
                >
                  fill dev OTP
                </button>
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`px-14 py-3 my-6 rounded-xl text-white font-semibold transition-all ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#0E375F] hover:bg-[#142B47]"
            }`}
          >
            {loading ? "Verifying..." : "Continue"}
          </button>
        </form>
      </aside>

      <aside className="w-1/2 hidden lg:block">
        <img src={Frame8} alt="Verification illustration" />
      </aside>
    </main>
  );
}
