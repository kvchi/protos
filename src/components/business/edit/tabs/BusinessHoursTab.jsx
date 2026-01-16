import { useState } from "react";
import Select from "react-select";

const timeOptions = [
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "12:00 PM",
  "02:00 PM",
  "04:00 PM",
  "06:00 PM",
].map((time) => ({
  label: time,
  value: time,
}));

const selectStyles = {
  control: (base, state) => ({
    ...base,
    minHeight: 42,
    borderRadius: 8,
    borderColor: "#d1d5db",
    boxShadow: "none",
    backgroundColor: state.isDisabled ? "#f9fafb" : "white",
    cursor: state.isDisabled ? "not-allowed" : "pointer",
    "&:hover": {
      borderColor: "#9ca3af",
    },
  }),
  indicatorSeparator: () => ({ display: "none" }),
};

export default function BusinessHoursTab() {
  const [hours, setHours] = useState([
    { day: "Monday", open: "09:00 AM", close: "04:00 PM", enabled: true },
    { day: "Tuesday", open: "09:00 AM", close: "04:00 PM", enabled: true },
    { day: "Wednesday", open: "09:00 AM", close: "04:00 PM", enabled: true },
    { day: "Thursday", open: "09:00 AM", close: "04:00 PM", enabled: true },
    { day: "Friday", open: "09:00 AM", close: "04:00 PM", enabled: true },
    { day: "Saturday", open: null, close: null, enabled: false },
    { day: "Sunday", open: null, close: null, enabled: false },
  ]);

  const updateTime = (index, field, option) => {
    setHours((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [field]: option?.value || null } : item
      )
    );
  };

  return (
    <div className="space-y-6 text-primary">
      <h1 className="text-xl font-semibold">Business hours</h1>

      <div className="grid grid-cols-3  text-sm font-semibold max-w-md text-center ">
        <span>Days</span>
        <span>Open</span>
        <span>Close</span>
      </div>


      <div className="space-y-3 max-w-md">
        {hours.map((item, index) => (
          <div key={item.day} className="grid grid-cols-3 gap-4 items-center">
           
            <input
              value={item.day}
              disabled
              className="border rounded-md px-3 py-2 bg-gray-50 text-gray-600"
            />

            <Select
              isDisabled={!item.enabled}
              options={timeOptions}
              styles={selectStyles}
              value={
                item.open
                  ? { label: item.open, value: item.open }
                  : null
              }
              placeholder="Open"
              onChange={(option) =>
                updateTime(index, "open", option)
              }
            />

            <Select
              isDisabled={!item.enabled}
              options={timeOptions}
              styles={selectStyles}
              value={
                item.close
                  ? { label: item.close, value: item.close }
                  : null
              }
              placeholder="Close"
              onChange={(option) =>
                updateTime(index, "close", option)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
