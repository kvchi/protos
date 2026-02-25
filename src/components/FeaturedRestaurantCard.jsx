import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function FeaturedRestaurantCard({
  image,
  name,
  rating = 4,
  address,
  features,
}) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl p-3 sm:p-4 border border-gray-200 shadow-sm flex-shrink-0 w-[320px] sm:w-[360px] flex flex-col gap-2">
      <div className="flex items-start gap-3">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg flex-shrink-0"
        />
        <div className="flex flex-col min-w-0 flex-1">
          <h3 className="text-primary font-bold text-sm sm:text-base">
            {name}
          </h3>
          <div className="flex items-center gap-0.5 mt-0.5">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < rating ? "text-accent" : "text-gray-300"}
                size={12}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-start gap-1 text-gray-600 text-xs">
        <IoLocationOutline size={14} className="text-accent mt-0.5 flex-shrink-0" />
        <span className="line-clamp-2">{address}</span>
      </div>
      <div className="text-xs text-gray-700">
        <span className="font-bold text-gray-800">Features:</span>{" "}
        <span>{features}</span>
      </div>
      <button
        type="button"
        onClick={() => navigate("/searchDetails")}
        className="text-[#CC8400] font-medium text-xs sm:text-sm mt-auto underline cursor-pointer text-left hover:opacity-80"
      >
        More Info
      </button>
    </div>
  );
}
