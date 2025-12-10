import { GoX } from "react-icons/go";

export default function CancelReservationModal({ isOpen, onClose, onBack, title, venue }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md relative">

        {/* Top bar with title & close */}
        <div className="flex items-center justify-between mb-4 bg-gray-300 p-2">
          <h2 className="text-lg font-semibold">
            {title || "Reservation Cancelled"}
          </h2>

          <button onClick={onClose}>
            <GoX className="text-red-500 text-xl" />
          </button>
        </div>

       
        <div className="p-6">
            <p className="text-center text-gray-700 leading-relaxed ">
          You have <span className="font-semibold text-red-500">Cancelled</span> your
          reservation with <br />
          <span className="font-semibold">{venue}</span>
        </p>

        <div className="flex justify-center mt-6">
          <button
            onClick={onBack}
            className="bg-primary text-white px-4 py-2 rounded-md text-sm font-semibold"
          >
            Back to dashboard
          </button>
        </div>
        </div>

      </div>
    </div>
  );
}
