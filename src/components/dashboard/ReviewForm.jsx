import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function ReviewForm({ onClose }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = () => {

    console.log({ rating, review });
    onClose(); 
  };

  return (
    <div className="space-y-4">
     
      <div>
        <p className="font-semibold text-gray-700 mb-1">Rating:</p>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <FaStar
              key={value}
              size={22}
              className={`
                cursor-pointer 
                transition 
                ${value <= (hover || rating) ? "text-yellow-500" : "text-gray-300"}
              `}
              onClick={() => setRating(value)}
              onMouseEnter={() => setHover(value)}
              onMouseLeave={() => setHover(0)}
            />
          ))}
        </div>
      </div>

      <div>
        <textarea
          className="w-full border rounded-md p-3 outline-none text-gray-700"
          rows={5}
          placeholder="Write your review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </div>

      <div className="flex justify-end gap-3">
        <button
          onClick={onClose}
          className="px-4 py-2 border rounded-md text-gray-600"
        >
          Cancel
        </button>

        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-primary text-white rounded-md"
        >
          Add Review
        </button>
      </div>
    </div>
  );
}
