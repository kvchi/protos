import { useState } from "react";
import Select from "react-select";

/**
 * Remove the vertical separator in react-select
 */
const selectComponents = {
  IndicatorSeparator: () => null,
};

/**
 * react-select styles (matches your UI)
 */
const selectStyles = {
  control: (base) => ({
    ...base,
    minHeight: "40px",
    borderRadius: "8px",
    borderColor: "#d1d5db",
    boxShadow: "none",
    fontSize: "14px",
    "&:hover": {
      borderColor: "#9ca3af",
    },
  }),
};

/**
 * Shared width for all fields
 * Mobile: full width
 * Tablet/Desktop: constrained
 */
const fieldWidth = "w-full sm:max-w-md md:max-w-lg";

export default function ListingDetailsTab() {
  const [formData, setFormData] = useState({
    owner: null,
    title: "",
    description: "",
    category: null,
    subCategory: null,
    address: "",
    phone: "",
    website: "",
    businessSection: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, option) => {
    setFormData((prev) => ({ ...prev, [name]: option }));
  };

  /* Mock options (replace with API data later) */
  const ownerOptions = [
    { value: "jacky-racky", label: "Jacky Racky Organization" },
  ];

  const categoryOptions = [
    { value: "restaurant", label: "Restaurant" },
    { value: "bar", label: "Bar" },
  ];

  const subCategoryOptions = [
    { value: "fast-food", label: "Fast food" },
    { value: "fine-dining", label: "Fine dining" },
  ];

  const businessSectionOptions = [
    { value: "food", label: "Food & Drinks" },
    { value: "entertainment", label: "Entertainment" },
  ];

  return (
    <div className="max-w-6xl space-y-6">

      {/* Owner */}
      <div>
        <label className="block text-sm font-semibold text-primary">
          Owner<span className="text-red-500">*</span>
        </label>
        <Select
          components={selectComponents}
          styles={selectStyles}
          options={ownerOptions}
          value={formData.owner}
          onChange={(opt) => handleSelectChange("owner", opt)}
          placeholder="Select owner"
          className={fieldWidth}
        />
      </div>

      {/* Listing title */}
      <div>
        <label className="block text-sm font-semibold text-primary">
          Listing title<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Thor: Ragnarok with Bill"
          className={`mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-primary ${fieldWidth}`}
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-semibold text-primary">
          Description<span className="text-red-500">*</span>
        </label>
        <textarea
          name="description"
          rows={5}
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Write a detailed description..."
          className={`mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-primary ${fieldWidth}`}
        />
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-primary">
            Categories
          </label>
          <Select
            components={selectComponents}
            styles={selectStyles}
            options={categoryOptions}
            value={formData.category}
            onChange={(opt) => handleSelectChange("category", opt)}
            placeholder="Enter and search for recognizable tags"
            className={fieldWidth}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-primary">
            Sub category
          </label>
          <Select
            components={selectComponents}
            styles={selectStyles}
            options={subCategoryOptions}
            value={formData.subCategory}
            onChange={(opt) => handleSelectChange("subCategory", opt)}
            placeholder="Enter and search for recognizable tags"
            className={fieldWidth}
          />
        </div>
      </div>

      {/* Address & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-primary">
            Address<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="33 Abike street, Aguda Junction, Ikeja"
            className={`mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm ${fieldWidth}`}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-primary">
            Phone<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+234 904404404"
            className={`mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm ${fieldWidth}`}
          />
        </div>
      </div>

      {/* Website & Business section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-primary">
            Website
          </label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            placeholder="www.yemekemo.com"
            className={`mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm ${fieldWidth}`}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-primary">
            Business section
          </label>
          <Select
            components={selectComponents}
            styles={selectStyles}
            options={businessSectionOptions}
            value={formData.businessSection}
            onChange={(opt) =>
              handleSelectChange("businessSection", opt)
            }
            placeholder="Select business to enter the current listing"
            className={fieldWidth}
          />
        </div>
      </div>
    </div>
  );
}
