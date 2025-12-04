import { useState, useEffect } from "react";
import { Frame3 } from "../assets/images";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { PiWarningCircleLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const countryCodes = [
  { code: "+1", label: "🇺🇸 US" },
  { code: "+44", label: "🇬🇧 UK" },
  { code: "+234", label: "🇳🇬 Nigeria" },
  { code: "+91", label: "🇮🇳 India" },
  { code: "+61", label: "🇦🇺 Australia" },
  { code: "+49", label: "🇩🇪 Germany" },
];

export default function Tel() {
  const navigate = useNavigate();
  const [selectedCountryCode, setSelectedCountryCode] = useState("+234");
  const [phone, setPhone] = useState("");

  // Load previous values from localStorage
  useEffect(() => {
    const savedPhone = localStorage.getItem("phone");
    const savedCode = localStorage.getItem("countryCode");
    if (savedPhone) setPhone(savedPhone);
    if (savedCode) setSelectedCountryCode(savedCode);
  }, []);

  // Save values to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("phone", phone);
    localStorage.setItem("countryCode", selectedCountryCode);
  }, [phone, selectedCountryCode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone.trim()) return;
    navigate("/desc");
  };

  const handleBack = () => navigate(-1);

  return (
    <main className="bg-gray-100 py-10 px-8 lg:px-30">
      <BsArrowLeft className="w-10 h-10 mb-10 cursor-pointer" onClick={handleBack} />
      <div className="flex gap-10">
        <div className="lg:w-[40%]">
          <h2 className="text-2xl md:text-3xl font-bold text-primary lg:w-[90%] w-[85%] leading-snug">
            Continue with Protos Business account sign up
          </h2>
          <p className="lg:text-xl font-medium w-[80%] lg:w-full mt-10">
            Your Business contact number
          </p>

          <form className="flex flex-col mt-8" onSubmit={handleSubmit}>
            <div className="flex gap-2">
              <select
                value={selectedCountryCode}
                onChange={(e) => setSelectedCountryCode(e.target.value)}
                className="focus:outline-none border-2 rounded-md border-gray-400 p-2 gap-3"
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.code}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="border-2 rounded-md border-gray-400 p-2 w-full"
                required
              />
            </div>

            <div className="flex items-center gap-1 text-gray-400">
              <PiWarningCircleLight className="w-10 h-10 mt-4" />
              <p className="text-xs leading-tight pt-4">
                Your business name would be used to create a listing for you
              </p>
            </div>

            <button
              type="submit"
              className="mt-8 bg-primary py-3 px-4 rounded-lg text-white flex items-center gap-20 w-fit mx-15 lg:mx-25 mb-20 cursor-pointer"
            >
              Continue <BsArrowRight />
            </button>
          </form>
        </div>

        <div className="hidden lg:block">
          <img src={Frame3} alt="" className="mt-[-70px] mb-30" />
        </div>
      </div>
    </main>
  );
}
