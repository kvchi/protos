import { IoLocationOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { GoTrash } from "react-icons/go";

export default function ReviewBanner({
  title,
  description,
  location,
  rating = 4,
  reviewText,
  onEdit,
  onDelete,
}) {
  
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? "text-green" : "text-gray-300"}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="border border-gray-300 p-4  w-full flex flex-col md:flex-row gap-6">

      <div className="md:w-1/3 space-y-2 border-r-2 border-gray-300 ">
        <h3 className="text-gold font-semibold text-lg">{title}</h3>

        <p className="text-gray-600 text-sm leading-snug">
          {description}
        </p>

        <div className="flex items-start gap-1 text-gray-700 text-sm mt-2">
          <IoLocationOutline size={16} className="text-gold mt-0.5" />
          <p>{location}</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 space-y-3">
        {/* Stars */}
        <div className="flex items-center text-xl">
          {renderStars()}
        </div>

        <p className="text-gray-700 text-sm leading-relaxed">
          {reviewText}
        </p>

        <div className="flex items-center gap-6 pt-2">
          <button
            onClick={onEdit}
            className="flex items-center gap-1 text-primary text-sm font-medium"
          >
            <LuPencil className="text-primary" />
            Edit
          </button>

          <button
            onClick={onDelete}
            className="flex items-center gap-1 text-red-600 text-sm font-medium"
          >
            <GoTrash className="text-red-600" />
            Delete
          </button>
        </div>
      </div>

    </div>
  );
}
