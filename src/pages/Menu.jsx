import MenuFilter from "../components/MenuFilter";
import SearchBar from "../components/SearchBar";
import MenuItems from "../components/MenuItems";
import food10 from "../assets/images/food10.jpg";
import food1 from "../assets/images/food1.jpeg";
import { useState } from "react";
import FilterModal from "../components/FilterModal";
import FilterImageModal from "../components/FilterImageModal";
import { IoIosChatboxes, IoMdHeartEmpty } from "react-icons/io";
import { IoFunnelOutline, IoLocationOutline } from "react-icons/io5";

const menuItems = [
  {
    image: food10,
    title: "Sushi with sea water",
    rating: 122,
    comments: 2444,
    tags: ["Seaweed", "Raw fish", "Sushi", "Japanese", "Vegetable Salad"],
    prices: [
      { feature: "Sushi with sauce", price: "₦ 25,000" },
      { feature: "Sushi with spicy sauce", price: "₦ 26,500" },
      { feature: "Sushi with Chicken Periperi", price: "₦ 35,000" },
    ],
  },
  {
    image: food10,
    title: "Sushi with sea water",
    rating: 122,
    comments: 2444,
    tags: ["Seaweed", "Raw fish", "Sushi", "Japanese", "Vegetable Salad"],
    prices: [
      { feature: "Sushi with sauce", price: "₦ 25,000" },
      { feature: "Sushi with spicy sauce", price: "₦ 26,500" },
      { feature: "Sushi with Chicken Periperi", price: "₦ 35,000" },
    ],
  },
  {
    image: food10,
    title: "Sushi with sea water",
    rating: 122,
    comments: 2444,
    tags: ["Seaweed", "Raw fish", "Sushi", "Japanese", "Vegetable Salad"],
    prices: [
      { feature: "Sushi with sauce", price: "₦ 25,000" },
      { feature: "Sushi with spicy sauce", price: "₦ 26,500" },
      { feature: "Sushi with Chicken Periperi", price: "₦ 35,000" },
    ],
  },
  {
    image: food1,
    title: "Sushi with sea water",
    rating: 122,
    comments: 2444,
    tags: ["Seaweed", "Raw fish", "Sushi", "Japanese", "Vegetable Salad"],
    prices: [
      { feature: "Sushi with sauce", price: "₦ 25,000" },
      { feature: "Sushi with spicy sauce", price: "₦ 26,500" },
      { feature: "Sushi with Chicken Periperi", price: "₦ 35,000" },
    ],
  },
];

export default function Menu() {
  const [isPlaceOrderOpen, setIsPlaceOrderOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <main className=" flex ">
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-start justify-center z-50 overflow-y-auto py-10">
          <div className=" w-[95%] lg:w-[70%] rounded-lg p-6 relative">
            <FilterModal
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
            >
              <FilterImageModal />
            </FilterModal>
          </div>
        </div>
      )}

      {isPlaceOrderOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] md:w-[450px] rounded-lg  relative">
            <div className="flex justify-between items-center p-2 bg-[#E0E0E0] mb-4">
              <h2 className="text-xl font-semibold ">Place order </h2>
              <button
                className=" text-xl"
                onClick={() => setIsPlaceOrderOpen(false)}
              >
                x
              </button>
            </div>

            <div className="p-4">
              <input
                type="text"
                placeholder="Your location"
                className="w-full border p-2 rounded mb-4"
              />

              <p className="font-semibold">Delivery fee: ₦2,500</p>
              <p className="mb-4">Delivery time: 25 - 30 mins</p>

              <div className="flex justify-center gap-3 my-8">
                <button
                  className="px-4 py-2 rounded-lg bg-secondary text-primary font-semibold"
                  onClick={() => setIsPlaceOrderOpen(false)}
                >
                  Cancel
                </button>

                <button className="px-5 py-2 bg-primary text-white rounded-lg font-semibold">
                  Order now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <MenuFilter onOpenFilterModal={() => setIsFilterOpen(true)} />
      <div className="p-6 lg:p-20">
        <SearchBar />
        <div className="flex items-center lg:hidden justify-between mt-6">
          <div className="flex items-center gap-2">
            <button
          onClick={() => setIsFilterOpen(true)}
          className="  py-2 text-primary font-bold rounded-md "
        >
          Filters
        </button>
        <IoFunnelOutline />
          </div>
          <div className="flex items-center gap-2">
            <p>Sort by:</p>
            <select className="border border-primary text-primary rounded-lg bg-white p-1 text-xs w-[110px] outline-none">
              <option>Distance</option>
            </select>
          </div>
        </div>
        <div className="space-y-3 text-sm block lg:hidden mt-4">
          <h2 className="text-lg font-semibold text-[#ffa500] ">
            Yemkemo Restaurant & Bar
          </h2>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1 text-green-600">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          <div className="flex items-center gap-2 text-red-500">
            <span className="text-[16px]">
              <IoIosChatboxes className="text-red-500" />
            </span>
            <p className="text-gray-700">2444 Review</p>
          </div>

          <div className="flex items-center gap-2 text-[#E74C3C] cursor-pointer">
            <span className="text-[16px]">
              <IoMdHeartEmpty className="text-red-500" />
            </span>
            <p className="text-gray-700">Add to favorite</p>
          </div>
          </div>
          <div className="flex items-start gap-2 text-gray-700">
            <span className="text-yellow-600 text-[16px]">
              <IoLocationOutline />
            </span>
            <p className="leading-tight text-xs">
              365 Ikari village, Ikeja, Lagos state, Nigeria.
              <br />
              <span className="text-red-600 underline cursor-pointer">
                (Direction)
              </span>
            </p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4 text-primary mt-4">
          Menu list
        </h2>

        <div className="space-y-6  flex-1">
          {menuItems.map((item, i) => (
            <MenuItems
              key={i}
              {...item}
              onOrderClick={() => {
                setIsPlaceOrderOpen(true);
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
