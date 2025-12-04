import { useContext, useState } from "react";
import { Frame4 } from "../assets/images";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { RegistrationContext } from "../context/RegistrationContext";
import PhoneNumberInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import "react-phone-number-input/style.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import AuthAction from "../components/AuthAction";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ formData });
    
    navigate("/completeBiz", {
      state: {
        country: formData.country,
        state: formData.state,
        city: formData.city,
      },
    });
  };

  const [selectedDay, setSelectedDay] = useState("");
  const [selectedOpen, setSelectedOpen] = useState("");
  const [selectedClose, setSelectedClose] = useState("");


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
              <p className="text-primary text-xl font-semibold ">
                Postal code
              </p>
              <div className="flex gap-2 items-center border-2 rounded-md border-gray-400 p-2">
                <input
                  type="number"
                  placeholder="300100"
                  required
                  className="flex-1"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-primary text-xl font-semibold mt-4">
                Address
              </p>
              <input
                type="text"
                placeholder="Enter business address"
                required
                className="border-2 rounded-md border-gray-400 p-2 w-full"
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
              />
            </div>
            <div className="md:col-span-2">
              <p className="text-primary text-xl font-semibold mt-4">
                Website
              </p>
              <input
                type="text"
                placeholder="Enter Company's Website"
                className="border-2 rounded-md border-gray-400 p-2 w-full"
                required
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
              />
            </div>
            <div className=" md:col-span-2">
              <p className="text-primary text-xl font-semibold">Hours</p>
              <div className="mt-2 grid grid-cols-3 gap-2 sm:gap-3 md:gap-5">
                <select
                  className="border-2 border-gray-300 rounded py-2 text-gray-700 "
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                >
                  <option value="">Day</option>
                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>

                <select
                  className="border-2 border-gray-300 rounded px-2 py-2 text-gray-700"
                  value={selectedOpen}
                  onChange={(e) => setSelectedOpen(e.target.value)}
                >
                  <option value="">Open</option>
                  {openTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>

                <select
                  className="border-2 border-gray-300 rounded px-2 py-2 text-gray-700"
                  value={selectedClose}
                  onChange={(e) => setSelectedClose(e.target.value)}
                >
                  <option value="">Close</option>
                  {closeTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <AuthAction page="businessInfo" />
          </form>
        </div>
        <div className="place-items-center hidden lg:grid relative">
          <img src={Frame4} alt="" className="w-full"/>
        </div>
      </div>
    </main>
  );
}
