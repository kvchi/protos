import { MdOutlineDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { GoTrash } from "react-icons/go";
import { PiChats } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa6";
import { LiaConciergeBellSolid } from "react-icons/lia";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MapView from "../../components/shared/MapView";

export default function ReservationDetails({
  data,
  onDetails,
  onCancel,
  
}) {
  const navigate = useNavigate();
  const [userlocation] = useState([6.5244, 3.3792]);

  return (
    <div className="px-4 md:px-10 pt-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gold text-xl font-bold">{data.title}</h2>
          <div className=" text-green text-xs md:text-sm mt-3">
            <div className="flex gap-1">
              <span>★ ★ ★ ★</span>
              <span className="text-red">(122 ratings)</span>
              <span className="text-black">|</span>
              <span className="flex items-center gap-1">
                <PiChats className="text-tetiary" /> 2444 Comments
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-2 flex flex-col">
          <button
            onClick={onDetails}
            className="px-1 py-1 text-sm rounded-md text-primary font-semibold bg-secondary border-2"
          >
            Edit Reservation
          </button>

          <button
            onClick={onCancel}
            className="flex items-center gap-1 text-red-500 text-sm border-2 px-3 py-1 rounded-md"
          >
            <GoTrash /> Cancel reservation
          </button>
        </div>
      </div>

      <p className="mt-2 text-gray-700 font-semibold">
        {" "}
        Feature: <span className="font-medium">{data.description}</span>
      </p>

      <div className="mt-6">
        <h3 className="font-semibold text-lg text-primary">
          Your reservation details
        </h3>
        <div>
          <div className="flex items-center gap-2 ">
            <MdOutlineDateRange className="text-gold" />
            <p className="text-primary font-semibold">
              Date: <span className="font-medium">{data.date}</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <IoMdTime className="text-gold" />
            <p className="text-primary font-semibold">
              Time: <span className="font-medium">{data.time}</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaRegUser className="text-gold" />
            <p className="font-semibold text-primary">
              People: <span className="font-medium">{data.people}</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <LiaConciergeBellSolid className="text-gold" />
            <p className="text-primary font-semibold">
              Reqeust: <span className="font-medium">{data.request}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="pt-20">
        <MapView center={userlocation} height="50vh" />
      </div>

      <div className="py-10 flex items-center justify-between">
        <p className="text-lg font-semibold">
          Location:{" "}
          <span className="font-medium">
            365 Ikari village, Ikeja, Lagos state, Nigeria
          </span>
        </p>
        <button
          onClick={() => navigate("/map")}
          className="text-lg font-semibold text-accent underline cursor-pointer"
        >
          Get Directions
        </button>
      </div>
      <div>
        <h3 className="text-lg text-primary font-semibold">About</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
          officiis quae harum ipsa maiores nam neque inventore magnam obcaecati
          recusandae. Sapiente ipsam expedita minus maxime minima aspernatur
          molestiae numquam saepe vitae, reprehenderit ipsa rerum maiores
          blanditiis accusantium perferendis quam. Placeat ea possimus repellat
          rem vero ab aspernatur praesentium sit vel.
        </p>
      </div>
    </div>
  );
}
