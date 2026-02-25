import { useState } from "react";
import { IoClose, IoFunnelOutline } from "react-icons/io5";
import CurrencyDropdown from "./shared/CurrencyDropdown";

export default function Filtered({ isOpen, onOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("Category");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const categories = [
    "Asian Restaurants",
    "Caterers",
    "Canteens",
    "Abula Spots",
    "Amala Joints",
    "Chinese Restaurants",
    "Sushi Restaurants",
    "Bars",
    "Coffea & Tea",
    "Shawarma Plugs",
    "Pizza Places",
    "Ice Cream Shops",
    "Buffet Houses",
    "Fine Dining",
    "Seafood Spots",
    "Burger Joints",
    "Vegan Cafes",
    "Nigerian Cuisine",
    "Bakeries",
    "Grill Houses",
  ];

  const features = [
    "Order online",
    "Kid friendly",
    "Dog allowed",
    "Outdoor seating",
  ];

  const categoryPillsToShow = showAllCategories ? categories : categories.slice(0, 3);
  const featuresToShow = showAllFeatures ? features : features.slice(0, 3);

  return (
    <>
      <main
        className={`hidden lg:block pl-14 pr-12 py-20 border-r-2 border-b-2 border-gray-200 mb-10 w-[30%] relative`}>
        <div
          role="button"
          tabIndex={0}
          onClick={onOpen}
          onKeyDown={(e) => e.key === "Enter" && onOpen()}
          className="flex items-center gap-5 cursor-pointer w-fit">
          <h2 className="text-lg font-semibold text-primary">Filter</h2>
          <IoFunnelOutline className="w-6 h-6 text-primary" />
        </div>
        <div className="flex items-center pt-5 gap-5">
          <p className="text-lg font-semibold">Price</p>
          <CurrencyDropdown triggerClassName="flex items-center justify-between gap-3 border p-2 rounded-xl shadow-lg cursor-pointer min-w-[10rem] bg-white hover:bg-gray-50" />
        </div>

        <p className="text-sm font-semibold text-gray-600 pt-6 pb-2">
          Price range
        </p>
        <div className="grid grid-cols-2 gap-3">
          {["30k - below", "30k - 100k", "100k - 500k", "500k - 1m", "1m - above"].map(
            (label) => (
              <button
                key={label}
                type="button"
                className="w-full border-2 border-gray-200 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 bg-white hover:border-primary hover:bg-primary/5 hover:text-primary cursor-pointer transition-colors whitespace-nowrap text-center"
              >
                {label}
              </button>
            )
          )}
        </div>

        <div>
          <div className="flex items-center justify-between pt-8">
            <h2 className="text-lg font-semibold">Category</h2>
            <p
              role="button"
              tabIndex={0}
              onClick={() => setShowAllCategories((prev) => !prev)}
              onKeyDown={(e) => e.key === "Enter" && setShowAllCategories((prev) => !prev)}
              className="text-[#5C7B1E] cursor-pointer hover:underline"
            >
              {showAllCategories ? "See less" : "See all"}
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-3 flex-wrap max-h-[380px] overflow-y-auto modal-scroll">
            {categoryPillsToShow.map((cat) => (
              <p key={cat} className="w-fit border p-1 rounded-lg shadow-lg">
                {cat}
              </p>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between pt-8">
            <h2 className="text-lg font-semibold">Features</h2>
            <p
              role="button"
              tabIndex={0}
              onClick={() => setShowAllFeatures((prev) => !prev)}
              onKeyDown={(e) => e.key === "Enter" && setShowAllFeatures((prev) => !prev)}
              className="text-[#5C7B1E] cursor-pointer hover:underline"
            >
              {showAllFeatures ? "See less" : "See all"}
            </p>
          </div>
          <div className="space-y-2 mt-4">
            {featuresToShow.map((feature) => (
              <div key={feature} className="flex gap-3 items-center">
                <input type="checkbox" />
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-4 md:px-6 ">
          <div className="bg-white w-[100%] max-w-5xl shadow-xl relative">
           
            <div className="bg-[#e7ebef] w-full flex items-center justify-between px-4 md:px-6 py-3">
              <h2 className="text-xl font-semibold text-primary">Filters</h2>
              <button
                onClick={onClose}
                className="text-red-500 hover:text-red-800 text-2xl"
              >
                <IoClose />
              </button>
            </div>

            <div className="px-4 md:px-6 pt-4">
              <div className="border-b pb-3 mb-4 flex gap-5">
                <p className="font-semibold text-black mb-2">Selected:</p>

                {selectedCategories.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {selectedCategories.map((cat) => (
                      <div
                        key={cat}
                        className="flex items-center gap-2 border-2  text-primary px-3 py-1 rounded-xl text-md font-semibold"
                      >
                        {cat}
                        <button
                          onClick={() =>
                            setSelectedCategories((prev) =>
                              prev.filter((c) => c !== cat)
                            )
                          }
                          className="text-gray-500 hover:text-red-500 text-xl"
                        >
                          <IoClose />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">None</p>
                )}
              </div>

          
              <div className="flex gap-3 md:gap-6 pb-2 mb-6 overflow-x-auto scrollbar-hide whitespace-nowrap">
                {["Price", "Category", "Features", "Neighborhood"].map(
                  (tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-2 font-semibold text-base ${
                        activeTab === tab
                          ? "text-accent border-2 p-2 rounded-md border-accent"
                          : "text-gray-600 hover:text-gold"
                      }`}
                    >
                      {tab}
                    </button>
                  )
                )}
              </div>

              {activeTab === "Price" && (
                <div className="space-y-6 ">
                  <div className="w-[200px] mb-10">
                    <CurrencyDropdown
                      triggerClassName="flex justify-between items-center w-full border border-gray-300 px-3 py-2 text-md font-medium text-gray-700 rounded-lg cursor-pointer bg-white hover:bg-gray-50"
                      listClassName="absolute left-0 top-full mt-2 z-20 w-full py-1 bg-white border border-gray-200 rounded-md shadow-lg text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4 max-w-md">
                    {[
                      "30k - below",
                      "30k - 100k",
                      "100k - 500k",
                      "500k - 1m",
                      "1m - above",
                    ].map((price) => (
                      <p
                        key={price}
                        className="border-2 px-2 py-2 rounded-lg text-center cursor-pointer hover:bg-primary hover:text-white transition whitespace-nowrap text-sm md:text-lg font-semibold"
                      >
                        {price}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Category Tab */}
              {activeTab === "Category" && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-3 max-h-[55vh] overflow-y-auto modal-scroll min-h-0">
                  {categories.map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-2 text-gray-800 text-sm"
                    >
                      <input
                        type="checkbox"
                        className="accent-accent w-4 h-4"
                        checked={selectedCategories.includes(item)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedCategories((prev) => [...prev, item]);
                          } else {
                            setSelectedCategories((prev) =>
                              prev.filter((cat) => cat !== item)
                            );
                          }
                        }}
                      />
                      {item}
                    </label>
                  ))}
                </div>
              )}

              {/* Features Tab */}
              {activeTab === "Features" && (
                <div className="grid grid-cols-4 gap-4">
                  {[
                    "Order online",
                    "Kid friendly",
                    "Dog allowed",
                    "Outdoor seating",
                  ].map((feature) => (
                    <label
                      key={feature}
                      className="flex items-center gap-2 text-gray-800 text-sm"
                    >
                      <input type="checkbox" className="accent-accent" />
                      {feature}
                    </label>
                  ))}
                </div>
              )}

              {/* Apply Filter Button */}
              <div className="flex justify-center mt-6">
                <button
                  onClick={onClose}
                  className="bg-primary text-white px-4 py-2 my-10 rounded-lg hover:bg-[#103f6d]"
                >
                  Apply Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
