import React, { useContext, useState } from "react";
import { Frame5 } from "../assets/images";
import api from "../api/axios";
import { useLocation } from "react-router-dom";
import { RegistrationContext } from "../context/RegistrationContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function CompleteBiz() {
  const { formData, setFormData } = useContext(RegistrationContext);
  const location = useLocation();
  console.log(location.state, import.meta.env.VITE_BASE_URL);

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword(formData.password)) {
      alert(
        "Password must be at least 8 characters, include a letter, a number, and a special character."
      );
      return;
    }

    try {
      const response = await api.post("/auth/create/", formData);
      console.log("Success:", response.data);
      alert("Account created successfully!");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Failed to create account. Please try again.");
    }
  };

  return (
    <main className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-28 py-15 bg-gray-100 gap-30">
      <div className="lg:w-[30%]">
        <h2 className="text-3xl font-bold text-[#0E375F]">
          Complete business information
        </h2>
        <p>Add your business information and detail for easy recognition</p>
        <form onSubmit={handleSubmit} className="mt-5">
          {/* First Name */}
          <p className="text-[#0E375F] text-xl font-semibold my-3">First Name</p>
          <input
            type="text"
            name="first_name"
            value={formData.first_name || ""}
            onChange={handleChange}
            placeholder="Enter first name"
            required
            className="border-2 rounded-md border-gray-400 p-2 w-full md:w-[100%]"
          />

          {/* Last Name */}
          <p className="text-[#0E375F] text-xl font-semibold my-3">Last Name</p>
          <input
            type="text"
            name="last_name"
            value={formData.last_name || ""}
            onChange={handleChange}
            placeholder="Enter last name"
            required
            className="border-2 rounded-md border-gray-400 p-2 w-[97%] md:w-[100%]"
          />

          {/* Email */}
          <p className="text-[#0E375F] text-xl font-semibold my-3">
            Your Email Address
          </p>
          <input
            type="email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="border-2 rounded-md border-gray-400 p-2 w-[97%] md:w-[100%]"
            required
          />

          {/* Password */}
          <p className="text-[#0E375F] text-xl font-semibold my-3">
            Personal password
          </p>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password || ""}
              onChange={handleChange}
              placeholder="Enter password"
              className="border-2 rounded-md border-gray-400 p-2 w-[97%] md:w-[100%] pr-10"
              required
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed || false}
              onChange={handleChange}
              className="mr-2 mt-4 w-[30px] h-[30px]"
            />
            <p className="md:w-[80%] lg:w-[100%] font-medium text-sm mt-6">
              By continuing, you agree to{" "}
              <span className="text-[#0E375F]">Protos</span>{" "}
              <span className="text-amber-300 underline">Business Terms</span>{" "}
              and acknowledge our{" "}
              <span className="text-amber-300 underline">Privacy Policy.</span>{" "}
              We may email you about Protos products, services and local events.
              You can unsubscribe at any time.
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-8 bg-[#0E375F] py-3 px-4 rounded-lg text-white mb-20 cursor-pointer flex mx-auto"
          >
            Create a free account
          </button>
        </form>
      </div>
      <div className="hidden lg:block">
        <img src={Frame5} alt="" className="mt-20" />
      </div>
    </main>
  );
}
