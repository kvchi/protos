import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosChatboxes, IoMdHeartEmpty } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import CurrencyDropdown from "./shared/CurrencyDropdown";

const filterSections = [
  {
    title: "Price",
    type: "price",
    options: [
      "30k - below",
      "30k - 100k",
      "100k - 500k",
      "500k - 1m",
      "1m - above",
    ],
  },
  {
    title: "Category",
    type: "tag",
    options: ["Asian restaurant", "Chinese restaurant", "Fast food"],
    showMore: true,
  },
  {
    title: "Features",
    type: "checkbox",
    options: ["Order online", "Kid friendly", "Dog allowed"],
    showMore: true,
  },
  {
    title: "Neighborhood",
    type: "checkbox",
    options: ["Agege", "Lekki", "Agege", "Lekki"],
    showMore: true,
  },
  {
    title: "Menu Search",
    type: "checkbox",
    options: ["Catfish", "Brazilian pork", "China fufu", "English amala"],
    showMore: true,
  },
];

export default function MenuFilter({ onOpenFilterModal }) {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (title) =>
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));

  return (
    <main className="hidden lg:block w-[20%] border-r border-gray-200 py-6 space-y-10 px-16">
      <div className="space-y-3 text-sm">
        <h2 className="text-lg font-semibold text-[#ffa500] w-40">
          Yemkemo Restaurant & Bar
        </h2>

        <div className="flex items-center gap-1 text-green">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>

        <div className="flex items-center gap-2 text-red-500">
          <span className="text-[16px]"><IoIosChatboxes className="text-red-500" /></span>
          <p className="text-gray-700">2444 Review</p>
        </div>

        <div className="flex items-center gap-2 text-[#E74C3C] cursor-pointer">
          <span className="text-[16px]"><IoMdHeartEmpty className="text-red-500" /></span>
          <p className="text-gray-700">Add to favorite</p>
        </div>

        <div className="flex items-start gap-2 text-gray-700">
          <span className="text-yellow-600 text-[16px]"><IoLocationOutline /></span>
          <p className="leading-tight text-xs">
            365 Ikari village, Ikeja, Lagos state, Nigeria.
            <br />
            <span
              role="button"
              tabIndex={0}
              onClick={() => navigate("/map")}
              onKeyDown={(e) => e.key === "Enter" && navigate("/map")}
              className="text-red-600 underline cursor-pointer"
            >
              (Direction)
            </span>
          </p>
        </div>
      </div>

      <h2
      onClick={onOpenFilterModal} 
      className="text-xl font-semibold text-primary cursor-pointer">Filter menu list
      </h2>

      {filterSections.map((section, idx) => (
        <div key={idx} className="space-y-3 text-sm">
          <div className="flex justify-end ">
            {section.title !== "Price" && section.showMore && (
              <button
                onClick={() => toggleExpand(section.title)}
                className="text-[#5E7A43] text-xs">
                See all
              </button>
            )}
          </div>

          {expanded[section.title] !== false && (
            <div className="flex flex-col gap-2 mt-1">
              {section.type === "price" && (
                <>
                  <div className="flex items-center gap-4">
                    <h3 className="text-xs font-semibold">Price</h3>
                    <CurrencyDropdown
                      size="sm"
                      triggerClassName="flex items-center justify-between gap-2 border rounded bg-white p-1.5 text-xs min-w-[110px] cursor-pointer hover:bg-gray-50"
                      listClassName="absolute left-0 top-full mt-1 z-20 py-1 min-w-[10rem] bg-white border rounded-lg shadow-lg text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-3">
                    {section.options.map((price, i) => (
                      <p
                        key={i}
                        className="border border-gray-400 text-[11px] px-2 py-1 rounded cursor-pointer hover:bg-primary hover:text-white transition w-fit"
                      >
                        {price}
                      </p>
                    ))}
                  </div>
                </>
              )}

              {section.type === "tag" &&
                section.options.map((opt, i) => (
                  <span
                    key={i}
                    className="border border-gray-400 text-[11px] px-2 py-1 rounded-md cursor-pointer inline-block hover:bg-primary hover:text-white transition w-fit"
                  >
                    {opt}
                  </span>
                ))}

              {section.type === "checkbox" &&
                section.options.map((opt, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-2 text-xs text-gray-700"
                  >
                    <input type="checkbox" className="accent-yellow-600" />
                    {opt}
                  </label>
                ))}
            </div>
          )}
        </div>
      ))}
    </main>
  );
}
