import React, { useState } from "react";
import Select from "react-select";

const selectStyles = {
  control: (base, state) => ({
    ...base,
    minHeight: "40px",
    borderRadius: "10px",
    borderColor: state.isFocused ? "#9ca3af" : "#d1d5db",
    boxShadow: "none",
    cursor: "pointer",
    "&:hover": {
      borderColor: "#9ca3af",
    },
  }),
  indicatorSeparator: () => ({
    display: "none", // ✅ removes vertical line
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "0 10px",
  }),
};

const fieldWidth = "w-full sm:max-w-md md:max-w-lg";

const catalogOptions = [
  { value: "restaurant", label: "Restaurant" },
  { value: "bar", label: "Bar" },
  { value: "grills", label: "Grills" },
  { value: "sushi", label: "Sushi" },
];

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const timeOptions = [
  { value: "9:00 AM", label: "9:00 AM" },
  { value: "4:00 PM", label: "4:00 PM" },
  { value: "open", label: "Open" },
  { value: "close", label: "Close" },
];

export default function ListingServicesTab() {
  const [catalog, setCatalog] = useState(null);

  const [hours,] = useState(
    days.map((day) => ({
      day,
      open: null,
      close: null,
    }))
  );

  return (
    <div className="space-y-8 max-w-3xl">
      {/* SERVICES OFFERING */}
      <div>
        <h3 className="text-sm font-semibold text-primary mb-4">
          Services offering
        </h3>

        {/* Catalog */}
        <div className="mb-4 pr-6 md:pr-0">
          <label className="text-xs font-semibold text-primary">
            Catalog of services*
          </label>
          <Select
            styles={selectStyles}
            value={catalog}
            onChange={setCatalog}
            options={catalogOptions}
            placeholder="Enter & search for service header"
            className={`mt-1 ${fieldWidth}`}
          />
        </div>

        {/* Service title */}
        <div className="mb-4 pr-6 md:pr-0">
          <label className="text-xs font-semibold text-primary">
            Catalog service title*
          </label>
          <input
            type="text"
            placeholder="Enter a title"
            className={`block mt-1 rounded-md border border-gray-300 px-3 py-2 text-sm ${fieldWidth}`}
          />
        </div>

        {/* Description */}
        <div className="pr-6 md:pr-0">
          <label className="text-xs font-semibold text-primary">
            Description*
          </label>
          <textarea
            rows={4}
            placeholder="Enter a description..."
            className={`block mt-1 rounded-md border border-gray-300 px-3 py-2 text-sm ${fieldWidth}`}
          />
        </div>
      </div>

      {/* FEATURES */}
      <div className="pr-6 md:pr-0">
        <h3 className="text-sm font-semibold text-primary mb-2">
          Features
        </h3>

        <div
          className={`flex gap-3 text-xs text-gray-500 border border-gray-300 rounded-t-md px-3 py-2 ${fieldWidth}`}
        >
          <span className="font-bold">B</span>
          <span className="italic">I</span>
          <span>H</span>
          <span>❝</span>
          <span>🔗</span>
          <span>🖼</span>
          <span>•</span>
          <span>≡</span>
        </div>

        <textarea
          rows={4}
          placeholder="Enter a description..."
          className={`border border-gray-300 border-t-0 rounded-b-md px-3 py-2 text-sm ${fieldWidth}`}
        />

        <button className="mt-2 text-xs text-accent font-semibold flex items-center gap-1">
          + Add service
        </button>
      </div>

      {/* SERVICES HOURS — 3 COLUMNS (UNCHANGED) */}
      <div className="">
        <h3 className="text-sm font-semibold text-primary mb-4">
          Services hours
        </h3>

        <div className="space-y-3 ">
          {hours.map((item) => (
            <div key={item.day} className="flex gap-3 items-center">
              {/* DAY */}
              <Select
                styles={selectStyles}
                value={{ label: item.day, value: item.day }}
                isDisabled
                className="w-28 md:w-32 text-sm"
              />

              {/* OPEN */}
              <Select
                styles={selectStyles}
                placeholder="Open"
                options={timeOptions}
                className="w-28 md:w-32 text-sm "
              />

              {/* CLOSE */}
              <Select
                styles={selectStyles}
                placeholder="Close"
                options={timeOptions}
                className="w-28 md:w-32 text-sm pr-6 md:pr-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
