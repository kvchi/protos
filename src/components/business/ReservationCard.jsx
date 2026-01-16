import { useState } from "react";
import { Phone, X } from "lucide-react";
import { food3 } from "../../assets/images";

export default function ReservationCard({
  customerName,
  message,
  onContact,
}) {
  const [showContactActions, setShowContactActions] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-start justify-between gap-4">
      
      {/* Left content */}
      <div className="flex items-start gap-4">
        <img
          src={food3}
          alt={customerName}
          className="w-12 h-12 object-cover "
        />

        <div>
          <p className="font-semibold text-primary">
            {customerName}
          </p>
          <p className="text-[10px] md:text-sm text-gray-600 mt-1 max-w-md">
            {message}
          </p>
        </div>
      </div>

      <div className="flex items-center">
        {!showContactActions ? (
          <button
            onClick={() => setShowContactActions(true)}
            className="px-2 py-1 lg:px-4 lg:py-2 bg-secondary border border-primary text-primary rounded-lg text-[10px] md:text-md font-semibold hover:bg-primary hover:text-white transition "
          >
            Contact customer
          </button>
        ) : (
          <div className="flex flex-col gap-2">
            <button
              onClick={onContact}
              className="p-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition"
              title="Call customer"
            >
              <Phone size={18} />
            </button>

            <button
              onClick={() => setShowContactActions(false)}
              className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition text-tetiary"
              title="Close"
            >
              <X size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
