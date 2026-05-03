import { useContext, useState } from "react";
import { Frame4 } from "../assets/images";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { RegistrationContext } from "../context/RegistrationContext.js";
import PhoneNumberInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import "react-phone-number-input/style.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import AuthAction from "../components/AuthAction";
import { createBusiness } from "../api/business.service";

export default function BusinessInfo() {
  const { formData, setFormData } = useContext(RegistrationContext);
  const navigate = useNavigate();
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const openTimes = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
  ];

  const closeTimes = [
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
    "10:00 PM",
  ];

  const convertTo24Hour = (time) => {
    if (!time) return "";
    const [hourMin, period] = time.split(" ");
    let [hours, minutes] = hourMin.split(":");
    hours = parseInt(hours);
    if (period === "PM" && hours !== 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;
    return `${String(hours).padStart(2, "0")}:${minutes}:00`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const businessPayload = {
      business_name: formData.business_name,
      business_email: formData.business_email,
      business_phone_number: formData.phone,
      business_description: localStorage.getItem("desc") || "",
      category: formData.category || 1,
     hours: hourRows
  .filter((row) => row.day && row.open && row.close)
  .map((row) => ({
    day: row.day,
    opening_time: convertTo24Hour(row.open),
    closing_time: convertTo24Hour(row.close),
  })),
      location: {
        country: formData.country,
        state: formData.state,
        city: formData.city,
        postal_code: formData.postal_code,
        street_address: formData.address,
        website: formData.website,
      },
    };

    try {
      await createBusiness(businessPayload);
      alert("Business created successfully!");
      navigate("/completeBiz");
    } catch (err) {
      console.error(
        "Create business failed:",
        err.response?.data || err.message,
      );
      const message =
        typeof err.response?.data?.detail === "string"
          ? err.response.data.detail
          : "Unable to create business. Please review the form and try again.";
      alert(message);
    }
  };

  const [hourRows, setHourRows] = useState([{ day: "", open: "", close: "" }]);
  const addHourRow = () => {
    setHourRows((prev) => [...prev, { day: "", open: "", close: "" }]);
  };

  const removeHourRow = (index) => {
    setHourRows((prev) => prev.filter((_, i) => i !== index));
  };

  const updateHourRow = (index, field, value) => {
    setHourRows((prev) =>
      prev.map((row, i) => (i === index ? { ...row, [field]: value } : row)),
    );
  };

  return (
    <main className="relative bg-gray-100 p-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 py-10">
        <div className="relative md:px-4 lg:px-0 md:w-full lg:max-w-xl">
          <h2 className="text-3xl font-semibold text-primary">
            {" "}
            Add business information
          </h2>
          <p className="py-6 md:text-xl font-medium w-[90%]">
            Add your business information and detail for easy recognition
          </p>
          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-4 max-w-full"
          >
            <div className="mt-4 grid md:col-span-2">
              <p className="text-primary text-xl font-semibold ">
                Business name
              </p>
              <input
                type="text"
                placeholder="Enter business name"
                required
                className="border-2 rounded-md border-gray-400 p-2 w-full"
                value={formData.business_name || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    business_name: e.target.value,
                  }))
                }
              />
            </div>
            <div className="w-full">
              <p className="text-primary text-xl font-semibold ">Country</p>
              <CountryDropdown
                value={formData.country}
                onChange={(val) => {
                  setFormData((prev) => ({
                    ...prev,
                    country: val,
                  }));
                }}
                className="border-2 rounded-md border-gray-400 p-2 w-full"
              />
            </div>
            <div className="w-full">
              <p className="text-primary text-xl font-semibold ">State</p>
              <RegionDropdown
                value={formData.state}
                onChange={(val) => {
                  setFormData((prev) => ({
                    ...prev,
                    state: val,
                  }));
                }}
                country={formData.country}
                className="border-2 rounded-md border-gray-400 p-2 w-full"
              />
            </div>
            <div className="w-full">
              <p className="text-primary text-xl font-semibold ">City</p>
              <div className="flex gap-2 items-center border-2 rounded-md border-gray-400 p-2">
                <input
                  type="text"
                  name="city"
                  required
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      city: e.target.value,
                    }))
                  }
                  defaultValue={formData.city}
                  placeholder="Your city"
                  className="flex-1"
                />
                <MdOutlineKeyboardArrowDown />
              </div>
            </div>
            <div className="w-full">
              <p className="text-primary text-xl font-semibold ">Postal code</p>
              <div className="flex gap-2 items-center border-2 rounded-md border-gray-400 p-2">
                <input
                  type="number"
                  placeholder="300100"
                  required
                  className="flex-1"
                  value={formData.postal_code || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      postal_code: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-primary text-xl font-semibold mt-4">Address</p>
              <input
                type="text"
                placeholder="Enter business address"
                required
                className="border-2 rounded-md border-gray-400 p-2 w-full"
                value={formData.address || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    address: e.target.value,
                  }))
                }
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="phone"
                className="text-primary text-xl font-semibold "
              >
                Phone
              </label>
              <div className="flex border-2 rounded-md border-gray-400 p-2 gap-3 w-full">
                <PhoneNumberInput
                  defaultCountry="NG"
                  flags={flags}
                  international
                  countryCallingCodeEditable={false}
                  value={formData.phone}
                  onChange={(val) =>
                    setFormData((prev) => ({ ...prev, phone: val }))
                  }
                  className="flex-1"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-primary text-xl font-semibold  mt-4">
                Your Email Address
              </p>
              <input
                type="email"
                placeholder="jakess@gmail.com"
                className="border-2 rounded-md border-gray-400 p-2 w-full"
                required
                value={formData.business_email || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    business_email: e.target.value,
                  }))
                }
              />
            </div>
            <div className="md:col-span-2">
              <p className="text-primary text-xl font-semibold mt-4">Website</p>
              <input
                type="text"
                placeholder="Enter Company's Website"
                className="border-2 rounded-md border-gray-400 p-2 w-full"
                required
                value={formData.website || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    website: e.target.value,
                  }))
                }
              />
            </div>
            <div className="md:col-span-2">
              <p className="text-primary text-xl font-semibold mt-4">
                Categories
              </p>
              <input
                type="text"
                placeholder="Enter Searchable Keywords"
                className="border-2 rounded-md border-gray-400 p-2 w-full"
                required
                value={formData.categories || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    categories: e.target.value,
                  }))
                }
              />
            </div>
            <div className="md:col-span-2">
              <p className="text-primary text-xl font-semibold">Hours</p>
              {hourRows.map((row, index) => (
                <div
                  key={index}
                  className="mt-2 grid grid-cols-4 gap-2 items-center"
                >
                  <select
                    className="border-2 border-gray-300 rounded py-2 text-gray-700"
                    value={row.day}
                    onChange={(e) =>
                      updateHourRow(index, "day", e.target.value)
                    }
                  >
                    <option value="">Day</option>
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>

                  <select
                    className="border-2 border-gray-300 rounded py-2 text-gray-700"
                    value={row.open}
                    onChange={(e) =>
                      updateHourRow(index, "open", e.target.value)
                    }
                  >
                    <option value="">Open</option>
                    {openTimes.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>

                  <select
                    className="border-2 border-gray-300 rounded py-2 text-gray-700"
                    value={row.close}
                    onChange={(e) =>
                      updateHourRow(index, "close", e.target.value)
                    }
                  >
                    <option value="">Close</option>
                    {closeTimes.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>

                  <button
                    type="button"
                    onClick={() => removeHourRow(index)}
                    className="text-red-500 font-bold text-lg"
                  >
                    ✕
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={addHourRow}
                className="mt-3 text-primary font-semibold text-sm underline"
              >
                + Add hours
              </button>
            </div>
            <AuthAction page="businessInfo" />
          </form>
        </div>
        <div className="place-items-center hidden lg:grid relative">
          <img src={Frame4} alt="" className="w-full" />
        </div>
      </div>
    </main>
  );
}
