import { HiArrowLeft } from "react-icons/hi2";
import { useState } from "react";
import PrimaryButton from "../../components/shared/PrimaryButton";

export default function Location({ setSettingsPage }) {
  const [form, setForm] = useState({
    address: "",
    country: "",
    state: "",
    city: "",
    zip: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Saved:", form);
  }

  return (
    <div className="p-4 md:p-6">
      <button
        className="text-primary text-2xl mb-6 cursor-pointer"
        onClick={() => setSettingsPage("settings")}
      >
        <HiArrowLeft />
      </button>

      <h1 className="text-2xl font-bold mb-2">Settings</h1>

      <h2 className="text-lg font-semibold mb-4">Location</h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium mb-1">Home Address</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Enter home address"
            className="w-full border rounded-md px-3 py-2 text-sm focus:ring focus:ring-primary/20"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Country</label>
          <select
            name="country"
            value={form.country}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 text-sm bg-white focus:ring focus:ring-primary/20"
          >
            <option value="">Country</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Ghana">Ghana</option>
            <option value="Kenya">Kenya</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">State</label>
          <select
            name="state"
            value={form.state}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 text-sm bg-white focus:ring focus:ring-primary/20"
          >
            <option value="">Choose state</option>
            <option value="Lagos">Lagos</option>
            <option value="Abuja">Abuja</option>
            <option value="Rivers">Rivers</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="Enter City"
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring focus:ring-primary/20"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Zip Code</label>
            <input
              type="text"
              name="zip"
              value={form.zip}
              onChange={handleChange}
              placeholder="Enter Zip Code"
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring focus:ring-primary/20"
            />
          </div>
        </div>

        <PrimaryButton type="submit" className="mt-6 flex items-center mx-auto">
          Save Information
        </PrimaryButton>
      </form>
    </div>
  );
}
