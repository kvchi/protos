import Select, { components } from "react-select";
import { ChevronDown } from "lucide-react";

const selectStyles = {
  control: (base, state) => ({
    ...base,
    minHeight: "44px",
    borderRadius: "12px",
    borderColor: state.isFocused ? "#9ca3af" : "#d1d5db",
    boxShadow: state.isFocused
      ? "0 4px 12px rgba(0, 0, 0, 0.08)"
      : "0 2px 6px rgba(0, 0, 0, 0.09)",
    cursor: "pointer",
    "&:hover": {
      borderColor: "#9ca3af",
    },
  }),
  indicatorSeparator: () => ({ display: "none" }),
};

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <ChevronDown size={18} className="text-primary"/>
  </components.DropdownIndicator>
);

const options = [
  { value: "date_added", label: "Date added" },
  { value: "name", label: "Customer name" },
];

export default function ReservationHeader({ sortBy, onSortChange }) {
  return (
    <div className="flex flex-col gap-4 mb-8">
      <h1 className="text-2xl font-semibold text-primary border-b-2 border-primary w-fit">
        Reservation
      </h1>

      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-primary">
          Sort by:
        </span>

        <div className="w-40 ">
          <Select
            options={options}
            value={options.find((o) => o.value === sortBy)}
            onChange={(selected) => onSortChange(selected.value)}
            isSearchable={false}
            placeholder="Date added"
            styles={selectStyles}
            components={{ DropdownIndicator }}
          />
        </div>
      </div>
    </div>
  );
}
