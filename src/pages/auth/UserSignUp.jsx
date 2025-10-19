import { useContext, useState } from "react";
import { RegistrationContext } from "../../context/RegistrationContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import AuthAction from "../../components/AuthAction";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
import { Frame7 } from "../../assets/images";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function UserSignUp() {
  const { formData, setFormData } = useContext(RegistrationContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const countryOptions = Country.getAllCountries().map((c) => ({
    value: c.isoCode,
    label: c.name,
  }));

  const stateOptions = formData.country
    ? State.getStatesOfCountry(formData.country).map((s) => ({
        value: s.isoCode,
        label: s.name,
      }))
    : [];

  const cityOptions =
    formData.country && formData.state
      ? City.getCitiesOfState(formData.country, formData.state).map((city) => ({
          value: city.name,
          label: city.name,
        }))
      : [];

  const selectStyles = {
    control: (base) => ({
      ...base,
      borderColor: "#d1d5db",
      borderRadius: "0.375rem",
      padding: "2px",
      fontSize: "1rem",
      boxShadow: "none",
      width: "100%",
      maxWidth: "100%",
      "&:hover": { borderColor: "#0E375F" },
    }),
    menuList: (base) => ({
      ...base,
      maxHeight: "200px",
      overflowY: "auto",
      scrollbarWidth: "thin",
      scrollbarColor: "#0E375F #e5e7eb",
      "::-webkit-scrollbar": {
        width: "10px",
      },
      "::-webkit-scrollbar-track": {
        background: "#e5e7eb",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "#0E375F",
      },
      "::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#2563eb",
      },
    }),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${BASE_URL}/auth/create/`, {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
        country: formData.country,
        state: formData.state,
        city: formData.city,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Signup response:", res.data);

      if (res.status === 201 || res.status === 200) {
        localStorage.setItem("email", formData.email);
        localStorage.setItem("verifyType", "signup");

        alert("Signup successful! Please check your email for a verification code.")
        navigate("/verifyEmail");
      }
    } catch (err) {
      console.error("Signup failed:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex lg:flex-row flex-col gap-40 lg:items-center px-6 lg:px-30 py-8 bg-gray-100">
      <div className="space-y-2 lg:w-[40%]">
        <h1 className="text-2xl lg:text-4xl font-bold text-[#0E375F]">
          Sign up and Connect
        </h1>
        <p className="text-lg font-medium">
          Sign up for better experience with us
        </p>
        <p className="text-lg font-medium">
          Already have an account?{" "}
          <span className="text-[#FFA500] font-semibold cursor-pointer">
            Sign in
          </span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-3 mt-5">
          <div>
            <p className="text-lg font-semibold text-[#0E375F]">First name</p>
            <input
              type="text"
              placeholder="Enter First name"
              className="border-2 rounded-md border-gray-200 p-2 w-full "
              value={formData.firstName || ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, firstName: e.target.value }))
              }
            />
          </div>
          <div>
            <p className="text-lg font-semibold text-[#0E375F]">Last name</p>
            <input
              type="text"
              placeholder="Enter Last name"
              className="border-2 rounded-md border-gray-200 p-2 w-full "
              value={formData.lastName || ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, lastName: e.target.value }))
              }
            />
          </div>
          {/* Country / State / City */}
          <div className="flex items-center w-full gap-4">
            {/* Country */}
            <div className="">
              <p className="text-[#0E375F] text-xl font-semibold">Country</p>
              <Select
                options={countryOptions}
                styles={selectStyles}
                placeholder="Select country"
                value={countryOptions.find(
                  (opt) => opt.value === formData.country
                )}
                onChange={(option) =>
                  setFormData((prev) => ({
                    ...prev,
                    country: option.value,
                    state: "",
                    city: "",
                  }))
                }
              />
            </div>

            {/* State */}
            <div className="">
              <p className="text-[#0E375F] text-xl font-semibold">State</p>
              <Select
                options={stateOptions}
                styles={selectStyles}
                placeholder="Select state"
                value={stateOptions.find((opt) => opt.value === formData.state)}
                onChange={(option) =>
                  setFormData((prev) => ({
                    ...prev,
                    state: option.value,
                    city: "",
                  }))
                }
                isDisabled={!formData.country}
              />
            </div>

            {/* City */}
            <div className="">
              <p className="text-[#0E375F] text-xl font-semibold">City</p>
              <Select
                options={cityOptions}
                styles={selectStyles}
                placeholder="Select city"
                value={cityOptions.find((opt) => opt.value === formData.city)}
                onChange={(option) =>
                  setFormData((prev) => ({
                    ...prev,
                    city: option.value,
                  }))
                }
                isDisabled={!formData.state}
              />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-lg font-semibold text-[#0E375F]">
              Email Address
            </p>
            <input
              type="email"
              placeholder="Enter your email address"
              className="border-2 rounded-md border-gray-200 p-2 w-full"
              value={formData.email || ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              required
            />
            <p className="text-lg font-semibold text-[#0E375F] mt-3">
              Password
            </p>
            <input
              type="password"
              placeholder="Enter your password"
              className="border-2 rounded-md border-gray-200 p-2 w-full"
              value={formData.password || ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
              required
            />
            <div className="">
              <AuthAction page="userSignup" loading={loading} />
            </div>
          </div>
        </form>
      </div>
      <div className="hidden lg:block lg:w-[60%] -mt-50">
        <img src={Frame7} alt="" className=" h-full object-contain" />
      </div>
    </main>
  );
}
