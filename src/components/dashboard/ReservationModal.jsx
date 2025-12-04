import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function ReservationModal({ isOpen, onClose }) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  if (!isOpen) return null;
  const handleSubmit = () => {
    setIsSubmitted(true)
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-[999] p-4">
      <div className="bg-white w-full max-w-2xl rounded-md  relative">
        <div className="flex items-center justify-between bg-secondary p-4 rounded-t-md">
          <h2 className="text-xl font-semibold  ">
            {isSubmitted ? "Reservation Complete" : "Make Reservation"}
          </h2>
          <button onClick={onClose} className=" text-tetiary">
            <IoClose size={24} />
          </button>
        </div>
        <div className="p-6 ">
          {isSubmitted  ? (
            <div className="text-center space-y-10">

              <h2 className="flex justify-center mx-auto text-2xl font-semibold w-md">
                You have successfully made a reservation at Yemkemo
              </h2>

              <button className="p-2 rounded-lg bg-primary text-white mb-10">
                View Reservation Details
              </button>
            </div>
          ) : (
            <>
             <h2 className="text-xl font-semibold text-[#0A2342]">
            Reservation preference
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
           
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#0A2342]">Date</label>
              <div className="relative">
                <input
                  
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#0A2342]">
                People
              </label>
              <div className="relative">
                <select className="w-full border border-gray-300 rounded-lg p-2 text-sm outline-none">
                  <option>1 person</option>
                  <option>2 people</option>
                  <option>3 people</option>
                  <option>4 people</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#0A2342]">Time</label>
            <div className="relative">
              <input
                className="w-[300px] border border-gray-300 rounded-lg p-2 pr-10 text-sm outline-none"
              />
              
            </div>
          </div>

          <h3 className="text-lg font-semibold text-[#0A2342]">
            Personal details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">First name</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm outline-none"
                  placeholder="Enter first name"/>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Last name</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2  text-sm outline-none"
                  placeholder="Enter last name"/>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Phone number</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm outline-none"
                  placeholder="Enter phone number"/>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Email address</label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm outline-none"
                  placeholder="Enter email address"/>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Request</label>
            <div className="relative">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm outline-none"
                placeholder="Enter additional request (optional)"
              />
            </div>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <button
              onClick={onClose}
              className="p-2 rounded-lg border border-gray-300 text-gray-700 bg-gray-100"
            >
              Cancel
            </button>

            <button
             onClick={handleSubmit}
             className="p-2 rounded-lg bg-primary text-white">
              Confirm Reservation
            </button>
          </div>
            </>
          )}
      
         
        </div>
      </div>
    </div>
  );
}
