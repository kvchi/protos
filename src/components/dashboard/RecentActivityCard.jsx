import { IoLocationOutline } from "react-icons/io5";
import { PiChats } from "react-icons/pi";
import { LuCalendar, LuClock, LuUsers } from "react-icons/lu";
import { GoTrash } from "react-icons/go";

export default function RecentActivityCard({
  mode = "activity",
  image,
  title,
  description,
  location,
  date,
  time,
  people,
  onClick,
  onDetails,
  onCancel,
  onAddNote,
  onRemove,
  onViewMap,
  onLeaveReview,
  
}) {
  const isReservation = mode === "reservation";
  const isFavorite = mode === "favorite";
  const isRatings = mode === "ratings";

  return (
    <div
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === "Enter" && onClick() : undefined}
      className={`border border-gray-300 p-4 flex flex-col md:flex-row gap-4 shadow-sm w-full ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
    >
      {/* Image */}
      <img
        src={image}
        className="w-full md:w-24 md:h-24 h-40 object-cover md:flex-shrink-0 pointer-events-none"
        alt=""
      />

      <div className="flex-1 w-full">
        {/* Title + Buttons */}
        <div className="flex flex-col md:flex-row justify-between md:items-start gap-3">
          {/* Title + description */}
          <div className="flex-1">
            <h3 className="text-gold font-semibold text-base md:text-lg">
              {title}
            </h3>

            <p className="text-gray-500 text-xs md:text-sm mt-1 leading-snug break-words">
              {description}
            </p>
            {!isReservation && !isFavorite && !isRatings && (
              <div className="mt-2 space-y-1">
                <div className=" text-green text-xs md:text-sm">
                  <div className="flex gap-1">
                    <span>★ ★ ★ ★</span>
                    <span className="text-red">(122 ratings)</span>
                    <span className="text-black">|</span>
                    <span className="flex items-center gap-1">
                      <PiChats className="text-tetiary" /> 2444 Comments
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <IoLocationOutline size={16} className="text-gold" />
                  <p className="text-gray-700 text-xs md:text-sm">{location}</p>
                </div>
              </div>
            )}
          </div>

          {/* RESERVATION BUTTONS */}
          {isReservation && (
            <div className="space-y-2 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={onDetails}
                className="px-3 py-1 text-sm rounded-md text-primary font-semibold bg-secondary border-2"
              >
                Reservation details
              </button>

              <button
                onClick={onCancel}
                className="flex items-center gap-1 text-red-500 text-sm"
              >
                <GoTrash /> Cancel reservation
              </button>
            </div>
          )}
        </div>

        {/* RESERVATION DETAILS */}
        {isReservation && (
          <div className="space-y-2 text-gray-600 text-sm mt-3">
            <div className="flex items-center gap-1">
              <IoLocationOutline size={16} className="text-gold" />
              <p className="text-gray-700 text-xs md:text-sm">{location}</p>
            </div>

            <p className="text-base md:text-lg font-semibold">Reservation</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2">
                <LuCalendar className="text-primary" />
                <p className="font-medium text-sm">Date: {date}</p>
              </div>

              <div className="flex items-center gap-2">
                <LuClock className="text-primary" />
                <p className="font-medium text-sm">Time: {time}</p>
              </div>

              <div className="flex items-center gap-2">
                <LuUsers className="text-primary" />
                <p className="font-medium text-sm">People: {people}</p>
              </div>
              
            </div>
          </div>
        )}

        {/* FAVORITE MODE */}
        {isFavorite && (
            <div className="text-gray-600 text-sm w-full" onClick={(e) => e.stopPropagation()}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="text-green text-base whitespace-nowrap">
                      ★ ★ ★ ★{" "}
                      <span className="text-red text-xs">(122 ratings)</span>
                    </div>

                    <button
                      onClick={onViewMap}
                    className="text-accent underline text-sm flex items-center gap-1 whitespace-nowrap"
                  >
                    <IoLocationOutline size={16} /> View Map
                  </button>
                </div>

                <div className="flex items-start gap-1">
                  <IoLocationOutline size={16} className="text-gold mt-0.5" />
                  <p className="text-gray-700 text-xs md:text-sm">{location}</p>
                </div>
              </div>

              <div className="flex flex-row justify-center md md:flex-col items-center md:items-end gap-3">
                <button
                  onClick={onAddNote}
                  className="flex items-center gap-1 text-primary font-semibold text-sm whitespace-nowrap"
                >
                  <span className="text-lg">＋</span> Add Note
                </button>

                <button
                  onClick={onRemove}
                  className="flex items-center gap-1 text-red-500 font-semibold text-sm whitespace-nowrap"
                >
                  <GoTrash /> Remove
                </button>
              </div>
            </div>
          </div>
        )}

        {/* RATINGS MODE */}
        {isRatings && (
            <div className="flex flex-col md:flex-row justify-between w-full gap-4 relative" onClick={(e) => e.stopPropagation()}>
            <div>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-green text-sm">
                <span>★ ★ ★ ★</span>
                <span className="text-red text-xs">(122 ratings)</span>
                <span className="text-gray-700">|</span>
                <span className="flex items-center gap-1 text-gray-700">
                  <PiChats className="text-primary" /> 2444 Comments
                </span>
              </div>

              <div className="flex items-center gap-1 mt-2">
                <IoLocationOutline size={16} className="text-gold" />
                <p className="text-gray-700 text-xs md:text-sm">{location}</p>
              </div>
            </div>
            <div className="block absolute right-0 bottom-10 md:right-0 md:bottom-14">
              <button
              onClick={onLeaveReview} className="px-2 md:px-4 py-1 border border-primary bg-secondary text-primary font-semibold rounded-lg cursor-pointer">
                Leave a review
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
