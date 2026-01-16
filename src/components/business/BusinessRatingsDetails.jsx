import { useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";


export default function BusinessRatingsDetails({ business, onBack }) {
    const [showreply, setShowReply] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 py-4">
      
      <div className="gap-2 mb-4">
        <button
          onClick={onBack}
          className="text-gray-600 hover:text-gray-900"
        >
          <HiArrowLeft size={18} />
        </button>

        <h1 className="text-base font-semibold text-primary underline">
          Ratings & Reviews
        </h1>
      </div>

      
      <h2 className="text-lg font-semibold text-gold">
        {business.name}
      </h2>

      <div className="flex items-center gap-3 mt-2 text-xs md:text-sm ">
        <div className="flex items-center text-green gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <span className="text-red-500 text-[11px]">(122 ratings)</span>

        <span className="flex items-center gap-1 text-accent text-[11px] md:text-base">
          <FaRegMessage className="text-tetiary"/>
          2444 Review
        </span>

        <span className="flex items-center gap-1 text-accent text-[11px] md:text-base">
          <FaRegHeart className="text-tetiary"/>
          20000 Likes
        </span>
      </div>

      {/* Features */}
      <p className="text-xs text-gray-500 mt-2 leading-relaxed w-full md:max-w-md">
        <span className="font-semibold text-gray-700">Features:</span>{" "}
        Restaurant, bar, grills, sushi and raw fish, Japanese restaurant,
        sushi and raw fish, Japanese restaurant
      </p>

      {/* Location */}
      <div className="flex items-center gap-1 mt-2 text-xs text-gray-600">
        <span className="font-semibold text-gray-700">Location:</span>
        <IoLocationOutline size={14} />
        {business.location}
      </div>

      {/* Comments section */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-sm text-primary">
            Comments
          </h3>

          <button className="text-xs font-semibold text-accent underline">
            More comments
          </button>
        </div>

        <p className="text-xs text-gray-500 mb-4 text-primary font-semibold">
          Overall: 449 comments
        </p>

        <div className=" p-4 shadow">
          <div className="flex items-start justify-between ">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-300" />

              <div className="">
                <p className="text-sm font-semibold text-gray-800">
                  Jason Jerry
                </p>
                <p className="text-xs text-gray-400">
                  Ikeja, Lagos state.
                </p>

                <div className="flex items-center text-green text-xs gap-1 mt-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p className="text-xs text-gray-400 mt-1">
                  Jan 24, 2024
                </p>
              </div>
            </div>

            <button
             onClick={() => setShowReply((prev) => !prev)}
              className="text-sm font-semibold text-green underline">
              Reply
            </button>
          </div>

          <p className="text-xs text-gray-600 mt-3 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
          {showreply && (
            <div className="mt-4 flex items-center gap-2">
                <input type="text"
                 placeholder="Reply this comment"
                 className="flex-1 border rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-green" />

                 <button className="px-4 py-2 text-sm bg-primary text-white rounded-md">
                    Reply
                 </button>

            </div>
          )}
      </div>
    </div>
  );
}
