import { useState } from "react";
import ReservationModal from "./ReservationModal";
import { FaStar } from "react-icons/fa";

export default function PlaceOrder() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto px-4 py-20 text-gray-800">
      <h2 className="text-xl font-semibold mb-2 text-primary">
        Place an Order
      </h2>

      <p className="text-sm">To place an order:</p>

      <p className="mt-1 text-sm">
        Call:{" "}
        <span className="text-gold font-semibold cursor-pointer">
          (234) 90 000 000 00
        </span>
      </p>

      <p className="my-3 text-sm text-gray-600 font-medium">Or</p>

      <p className="text-sm">Visit our website:</p>

      <a
        href="https://yemkemo.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-sm underline block mt-1"
      >
        Yemkemo Restaurant.com
      </a>

      <div className="bg-white shadow-md border border-gray-200 rounded-xl p-4 mt-4 max-w-sm">
        <p className="text-sm">
          You can as well make a reservation or book a table:
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-3 bg-primary text-white px-4 py-2 rounded-lg text-sm"
        >
          Make a reservation
        </button>
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Leave a review</h2>

      <p className="text-sm mb-1">Rating:</p>

      <div className="flex gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            size={20}
            className="cursor-pointer transition"
            color={(hover || rating) >= star ? "#ffd700" : "#ccc"}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(star)}
          />
        ))}
      </div>

      <ReservationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}/>

      <textarea
        className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-1 focus:ring-primary"
        rows="3"
        placeholder="Write your review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      ></textarea>

      <button className="mt-3 bg-primary text-white px-6 py-2 rounded-lg text-sm flex justify-center mx-auto">
        Submit
      </button>
    </div>
  );
}
