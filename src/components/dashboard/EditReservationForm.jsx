import { LuCalendar, LuClock, LuUsers } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";

export default function EditReservationForm({ onClose}) {
  return (
    
    <div >
        <form className="space-y-6">

     
      <h2 className="text-xl font-semibold text-gray-800">Reservation preference</h2>

      
      <div className="grid grid-cols-2 gap-6">

        {/* Date */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Date</label>
          <div className="relative">
            <LuCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="date"
              className="w-full border border-gray-300 rounded-md p-2 pl-10 focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
        </div>

        {/* People */}
        <div className="space-y-">
          <label className="text-sm font-medium text-gray-700">People</label>
          <div className="relative">
            <LuUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <select className="w-full border border-gray-300 rounded-md p-2 pl-10 focus:ring-2 focus:ring-primary focus:border-primary">
              <option>4 people</option>
              <option>2 people</option>
              <option>6 people</option>
              <option>8 people</option>
            </select>
          </div>
        </div>

      </div>

     
      <div className="">
        <label className="text-sm font-medium text-gray-700">Time</label>
        <div className="relative w-1/2">
          <LuClock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="time"
            className="w-full border border-gray-300 rounded-md p-2 pl-10 focus:ring-none focus:ring-primary focus:border-primary"
          />
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-800">Personal details</h3>

      
      <div className="grid grid-cols-2 gap-6">
        <div className="relative">
          <FaRegUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            placeholder="Enter first name"
            className="w-full border border-gray-300 rounded-md p-2 pl-10 focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>

        <div className="relative">
          <FaRegUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            placeholder="Enter last name"
            className="w-full border border-gray-300 rounded-md p-2 pl-10 focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>
      </div>

      
      <div className="grid grid-cols-2 gap-6">
        <div className="relative">
          <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            placeholder="Enter phone number"
            className="w-full border border-gray-300 rounded-md p-2 pl-10 focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>

        <div className="relative">
          <IoMailOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            placeholder="Enter email address"
            className="w-full border border-gray-300 rounded-md p-2 pl-10 focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>
      </div>

      {/* Request */}
      <div>
        <textarea
          placeholder="Enter additional request (optional)"
          rows={4}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-none focus:ring-primary focus:border-primary"
        />
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-3 pt-4">
        <button type="button" className="px-5 py-2 border rounded-md text-gray-700 cursor-pointer"
        onClick={onClose}>
          Cancel
        </button>
        <button className="px-5 py-2 bg-primary text-white rounded-md cursor-pointer">
          Confirm Reservation
        </button>
      </div>
    </form>
    </div>
  );
}
