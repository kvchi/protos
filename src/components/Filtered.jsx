import { useState } from "react";
import { IoClose, IoFunnelOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Filtered({ isOpen, onOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("Category");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectCurrency, setSelectCurrency] = useState("Select currency");
  const [currencyOpen, setCurrencyOpen] = useState(false);

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

  return (
    <>
      <main
        className={`hidden lg:block pl-14 pr-12 py-20 border-r-2 border-b-2 border-gray-200 mb-10 w-[30%] relative`}>
        <div className="flex items-center gap-5 ">
          <h2
            onClick={() => {
              console.log("Filter clicked!");
              onOpen();
            }}
            className="text-lg font-semibold text-primary cursor-pointer">
            Filter
          </h2>
          <IoFunnelOutline className="w-6 h-6 text-primary" />
        </div>
        <div className="flex items-center pt-5 gap-5">
          <p className="text-lg font-semibold">Price</p>
          <div className="flex items-center gap-3 border p-2 rounded-xl shadow-lg">
            <p>NGN - Naira</p>
            <RiArrowDropDownLine className="w-6 h-6" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-12">
          <p className="border p-2 rounded-lg shadow-lg">30k - below</p>
          <p className="border p-2 rounded-lg shadow-lg">30k - 100k</p>
          <p className="border p-2 rounded-lg shadow-lg">100k - 500k</p>
          <p className="border p-2 rounded-lg shadow-lg">500k - 1m</p>
          <p className="border p-2 rounded-lg shadow-lg">1m - above</p>
        </div>

        <div>
          <div className="flex items-center justify-between pt-8">
            <h2 className="text-lg font-semibold">Category</h2>
            <p className="text-[#5C7B1E] cursor-pointer">See all</p>
          </div>
          <div className="mt-5 flex flex-col gap-3">
            <p className="w-fit border p-2 rounded-lg shadow-lg">
              Asian Restaurant
            </p>
            <p className="w-fit border p-2 rounded-lg shadow-lg">
              Chinese Restaurant
            </p>
            <p className="w-fit border p-2 rounded-lg shadow-lg">Fast Food</p>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between pt-8">
            <h2 className="text-lg font-semibold">Features</h2>
            <p className="text-[#5C7B1E] cursor-pointer">See all</p>
          </div>
          <div className="space-y-2 mt-4">
            <div className="flex gap-3 items-center">
              <input type="checkbox" />
              <p>Order online</p>
            </div>
            <div className="flex gap-3 items-center">
              <input type="checkbox" />
              <p>Kid friendly</p>
            </div>
            <div className="flex gap-3 items-center">
              <input type="checkbox" />
              <p>Dog allowed</p>
            </div>
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
                {["Price", "Category", "Features", "Neighborhood", "Menu"].map(
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
                  <div className="relative w-[200px] mb-10">
                    <button
                      onClick={() => setCurrencyOpen((prev) => !prev)}
                      className="flex justify-between items-centere w-full border border-gray-300 px-3 py-2 text-md font-medium text-gray-700 rounded-lg cursor-pointer"
                    >
                      {selectCurrency}
                      <RiArrowDropDownLine className="text-xl" />
                    </button>

                    {currencyOpen && (
                      <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                        <div
                          onClick={() => {
                            setSelectCurrency("USD - Dollar");
                            setCurrencyOpen(false);
                          }}
                          className="px-3 py-2 bg-[#e7ebef] hover:bg-primary hover:text-white cursor-pointer text-sm "
                        >
                          $ USD -Dollar
                        </div>
                        <div
                          onClick={() => {
                            setSelectCurrency("NGN - Naira");
                            setCurrencyOpen(false);
                          }}
                          className="px-3 py-2 bg-[#e7ebef] hover:bg-primary hover:text-white cursor-pointer text-sm"
                        >
                          ₦ NGN -Naira
                        </div>
                      </div>
                    )}
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
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-3 max-h-[400px] overflow-y-auto  modal-scroll">
                  {[...Array(5)]
                    .flatMap(() => categories)
                    .map((item, index) => (
                      <label
                        key={index}
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
