import { IoLocationOutline } from "react-icons/io5";
import { PiChats } from "react-icons/pi";

export default function BusinessCard({
  image,
  name,
  description,
  location,
  children,
  onImageClick,
}) {
  return (
    <div className="relative overflow-hidden border border-gray-300 p-2 lg:p-4 flex gap-1.5 lg:gap-4 shadow-sm w-full rounded-md bg-white">
      <img
        src={image}
        onClick={onImageClick}
        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover flex-shrink-0 cursor-pointer"
        alt={name}
      />

      <div className="flex-1">
        <h3 className="text-gold font-semibold text-xs md:text-sm mt-0.5 leading-snug line-clamp-2">
          {name}
        </h3>

        <p className="text-gray-500 text-[10px] md:text-xs lg:text-sm mt-1 leading-snug">
          {description}
        </p>

        <div className="mt-1 flex items-center gap-1 text-[11px] md:text-sm whitespace-nowrap">
          <span className="text-green flex-shrink-0">★ ★ ★ ★</span>
          <span className="text-red flex-shrink-0">(122 ratings)</span>
          <span className="text-gray-400 flex-shrink-0">|</span>
          <span className="flex items-center gap-1 text-green flex-shrink-0">
            <PiChats className="text-tetiary" />
            2444 Comments
          </span>
        </div>

        <div className="flex items-center gap-1 mt-1">
          <IoLocationOutline size={16} className="text-gold flex-shrink-0" />
          <p className="text-gray-700 text-[10px] lg:text-sm truncate">{location}</p>
        </div>
      </div>

      {children && (
        <div className="group absolute right-2 top-1/2 -translate-y-1/2 flex flex-col lg:pl-1 bg-secondary rounded-lg">
          {children}
        </div>
      )}
    </div>
  );
}

export function ActionButton({ icon, label, text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center gap-2 w-7 md:w-9 group-hover:w-28 px-2 py-1 rounded-md transition-all duration-300 ease-in-out overflow-hidden hover:bg-white
      "
    >
      <span className={text}>{icon}</span>

      <span className=" whitespace-nowrap opacity-0 group-hover:opacity-100
          transition-opacity duration-200 delay-100
          text-xs font-medium
        "
      >
        {label}
      </span>
    </button>
  );
}
