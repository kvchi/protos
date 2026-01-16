import Select, { components } from "react-select";
import { ChevronDown, Plus } from "lucide-react";

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
  indicatorSeparator: () => ({ display: "none" }),
  valueContainer: (base) => ({
    ...base,
    padding: "0 10px",
  }),
};

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <ChevronDown size={16} className="text-primary" />
  </components.DropdownIndicator>
);

const defaultFilterOptions = [
  { value: "restaurant", label: "Restaurant" },
  { value: "hotel", label: "Hotel" },
  { value: "shop", label: "Shop" },
];

export default function BusinessInfoHeader({
  title = "Businesses",
  filterBy,
  filterOptions = defaultFilterOptions,
  onFilterChange,
  onAddBusiness,
  addButtonText = "Add new business", 
}) {
  return (
    <div className="flex items-start justify-between mb-8">
      <div className="flex flex-col gap-3">
        <h1 className="lg:text-2xl font-semibold text-primary underline">
          {title}
        </h1>

        <div className="flex items-center gap-2 mt-4">
          <span className="text-xs lg:text-sm text-primary font-medium">
            filter by:
          </span>

          <div className="md:w-40">
            <Select
              options={filterOptions}
              value={filterOptions.find(o => o.value === filterBy)}
              onChange={(selected) =>
                onFilterChange?.(selected.value)
              }
              isSearchable={false}
              styles={selectStyles}
              components={{ DropdownIndicator }}
            />
          </div>
        </div>
      </div>

      {onAddBusiness && (
        <button
          onClick={onAddBusiness}
          className="flex items-center gap-2 bg-primary text-white p-2 md:px-4 py-2 rounded-lg text-[8px] md:text-sm font-medium hover:opacity-90 transition"
        >
          <Plus size={16} />
          {addButtonText} 
        </button>
      )}
    </div>
  );
}
