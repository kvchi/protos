import { useState, useRef, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Frame8 } from "../../assets/images";
import { RegistrationContext } from "../../context/RegistrationContext";

const BASE_URL = import.meta.env.VITE_BASE_URL;


export default function VerifyEmail() {
    const [code, setCode] = useState(["", "", "", ""]);
    const inputRefs = useRef([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { login } = useContext(RegistrationContext);
    
    const email = localStorage.getItem("email");
    const verifyType = localStorage.getItem("verifyType");

    useEffect(() => {
        if (!email || !verifyType ) {
            alert("Invalid verification attempt. Please try again.");
            navigate("/signin");
        }
    }, [email, verifyType, navigate]);

    const handleChange = (value, index) => {
        if(!/^[0-9]?$/.test(value)) return;
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value && index < 4) inputRefs.current[index + 1].focus();
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullCode = code.join("");
        if (fullCode.length < 4) {
            alert("Please enter the full 4-digit code");
            return;
        };
        
        try{
            const res = await axios.post(`${BASE_URL}/auth/verify/`, {
                code: Number(fullCode),
            });

            console.log("Verification success:", res.data);

            if (verifyType === "signup") {
                alert("Email verified successfully!");
            navigate("/signin");
            } else if (verifyType === "login") {
                const accessToken = res.data?.token?.access_token;
                const userData = res.data?.user;

                if(accessToken && userData ) {
                    login(userData, accessToken);

                    localStorage.setItem("token", accessToken);
                    localStorage.setItem("user", JSON.stringify(userData));

                     alert("Login verified successfully!");
                navigate("/home");
                } else {
                    console.warn("Missing token or user data in response:", res.data);
                    alert("Unexpected response from server. Please try again.")
                    navigate("/signin");
                }
            }
        } catch (err) {
            console.error("Verification failed:", err.response?.data || err.message);
            alert(err.response?.data?.message || "Verification failed. Please try again.");
        } finally {
            setLoading(false);
        }
    }

  return (
    <main className="flex flex-col lg:flex-row lg:items-center bg-gray-50 px-8 lg:px-30">
            <aside className="flex flex-col justify-center space-y-6 lg:w-1/2 mt-10">
                <h1 className="text-2xl lg:text-4xl font-bold text-[#0E375F]">Email Confirmation</h1>
                <p className="text-gray-600 lg:text-lg">
                    A verification code has been sent to your email.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <p className="text-[#0E375F] font-medium mb-3">Enter Verification Code</p>
                        <div className="flex gap-5">
                            {code.map((num, i) => (
                                <input
                                key={i}
                                ref={(el) => (inputRefs.current[i] = el)}
                                type="text"
                                value={num}
                                onChange={(e) => handleChange(e.target.value, i)}
                                onKeyDown={(e) => handleKeyDown(e, i)}
                                className="w-16 h-16 text-center text-3xl border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#0E375F] text-gray-600"/>
                            ))}
                        </div>
                    </div>
                    <button
                     type="submit"
            disabled={loading}
            className={`px-14 py-3 my-6 rounded-xl text-white font-semibold transition-all ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#0E375F] hover:bg-[#142B47]"
            }`}>
                                {loading ? "Verifying..." : "Continue"}

                    </button>
                </form>
            </aside>
            <aside className="w-1/2 hidden lg:block">
                <img src={Frame8} alt="" />
            </aside>
    </main>
  )
}
