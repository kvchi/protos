import { useState } from "react";
import Select from "react-select";
import ImageUpload from "../../../shared/ImageUpload";

const businessTypes = [
  { value: "restaurant", label: "Restaurant" },
  { value: "cafe", label: "Cafe" },
  { value: "bar", label: "Bar" },
];

const categories = [
  { value: "food", label: "Food" },
  { value: "shopping", label: "Shopping" },
  { value: "entertainment", label: "Entertainment" },
];

export default function BusinessDetailsTab() {
  const [logo, setLogo] = useState(null);
  const [businessType, setBusinessType] = useState(null);
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);

  const selectStyles = {
  control: (base) => ({
    ...base,
    minHeight: "42px",
    borderRadius: "0.5rem", 
    boxShadow: "none",
  }),
};


  return (
    <div className="max-w-[21rem] md:max-w-lg lg:max-w-4xl space-y-6">
      <ImageUpload label="Business logo" value={logo} onChange={setLogo} />

      <div>
        <label className="text-sm font-semibold text-primary">
          Business title
        </label>
        <input
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2"
          placeholder="Thor: Ragnarok with Bill"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-primary">
          Description <span className="text-primary">*</span>
        </label>
        <textarea
          rows={6}
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2"
          placeholder="Describe your business..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-semibold text-primary">
            Business type
          </label>
          <Select
            options={businessTypes}
            value={businessType}
            onChange={setBusinessType}
            placeholder="Select business type"
            className="mt-1 "
            styles={selectStyles}
            components={{ IndicatorSeparator: null }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-semibold text-primary">
            Categories
          </label>
          <Select
            options={categories}
            value={category}
            onChange={setCategory}
            placeholder="Select category"
            styles={selectStyles}
            components={{ IndicatorSeparator: null }}
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-primary">
            Sub category
          </label>
          <Select
            options={categories}
            value={subCategory}
            onChange={setSubCategory}
            styles={selectStyles}
            placeholder="Select sub category"
            components={{ IndicatorSeparator: null }}
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-primary">Tags</label>
        <Select
          isMulti
          options={categories}
          placeholder="Add tags"
          styles={selectStyles}
          components={{ IndicatorSeparator: null }}
        />
      </div>

      <div className="flex justify-end">
        <button className="bg-primary text-white px-6 py-2 rounded-lg">
          Save changes
        </button>
      </div>
    </div>
  );
}
