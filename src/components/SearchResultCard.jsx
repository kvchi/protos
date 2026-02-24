import { useNavigate } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { Rectangle133 } from "../assets/images";

const DEFAULT_TAGS = [
  "Restaurant",
  "Grills",
  "Sushi",
  "Japanese",
  "Breakfast & brunch",
  "Vegetable Salad",
];

export default function SearchResultCard() {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/searchDetails");
  };

  const handleDirectionClick = (e) => {
    e.stopPropagation();
    navigate("/map");
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={(e) => e.key === "Enter" && handleCardClick()}
      className="flex flex-col lg:flex-row border border-gray-200 p-4 md:p-5 rounded-lg my-6 md:my-8 w-full shadow-sm hover:shadow-md transition-all bg-white cursor-pointer"
    >
      <div className="w-full lg:w-56 shrink-0">
        <img
          src={Rectangle133}
          alt="restaurant"
          className="w-full lg:w-56 h-full object-cover rounded-md pointer-events-none"
        />
      </div>

      <div className="mt-3 lg:mt-0 lg:ml-5 flex-1 lg:border-r border-gray-200 min-w-0">
        <h1 className="text-lg font-bold text-accent">
          Yemkemo Restaurant & Bar
        </h1>

        <div className="flex flex-wrap items-center gap-3 mt-2 text-sm">
          <div className="flex items-center text-green-600 font-semibold">
            <AiFillStar className="text-[#28a745] mr-1" /> 4.5 (122 ratings)
          </div>
          <div className="flex items-center text-gray-500">
            <FaRegCommentDots className="text-red-400 mr-1" /> 2444 Comments
          </div>
        </div>

        <div className="flex items-start gap-2 text-gray-600 mt-2 text-sm">
          <FiMapPin className="text-red-500 mt-0.5 shrink-0" />
          <p>
            365 Ikari Village, Ikeja, Lagos state, Nigeria.{" "}
            <span
              onClick={handleDirectionClick}
              className="text-red-400 font-medium cursor-pointer hover:underline"
            >
              (Direction)
            </span>
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {DEFAULT_TAGS.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 border border-primary rounded-full text-primary text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 lg:mt-0 lg:ml-5 w-full lg:w-[35%] flex flex-col justify-between">
        <p className="text-sm text-gray-700 leading-relaxed">
          <span className="font-semibold">Information:</span> Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
          <span className="text-accent ml-1 font-medium cursor-pointer hover:underline">
            Read more
          </span>
        </p>
        <button
          type="button"
          className="self-end text-[#e63946] font-semibold hover:underline mt-3"
        >
          Visit website
        </button>
      </div>
    </div>
  );
}
