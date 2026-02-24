import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const BusinessCard = ({ business }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg p-3 sm:p-4 border border-[#878A8D] flex flex-col gap-2 w-full">
      {/* Image + Title */}
      <div className="flex items-start gap-3">
        {/* image + mobile location */}
        <div className="flex flex-col items-start">
          <img
            src={business.image}
            alt={business.title}
            className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
          />
        </div>

        <div className="flex flex-col  justify-between h-full">
          <div>
            <h3 className="text-primary font-semibold text-[10px] sm:text-base">
              {business.title}
            </h3>

            <div className="flex items-center space-x-1">
              {[...Array(business.rating)].map((_, index) => (
                <FaStar key={index} className="text-accent" size={12} />
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-start gap-1 text-gray-600 text-[11px] sm:text-xs mt-[6px]">
            <IoLocationOutline size={14} className="text-accent mt-[1px]" />
            <span>{business.address}</span>
          </div>
        </div>
      </div>

      <div className="flex md:hidden items-start gap-1 text-gray-600 text-[11px] sm:text-xs mt-[4px] ">
        <IoLocationOutline size={14} className="text-accent mt-[1px]" />
        <span className="flex-1">{business.address}</span>
      </div>

      <div className="text-[11px] sm:text-xs">
        <span className="font-bold">Features:</span>{" "}
        <span className="text-gray-700">{business.features}</span>
      </div>

      <button
        type="button"
        onClick={() => navigate("/searchDetails")}
        className="text-[#CC8400] font-medium text-xs sm:text-sm mt-auto underline self-center cursor-pointer"
      >
        More Info
      </button>
    </div>
  );
};

export default BusinessCard;
