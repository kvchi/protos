import { useState, useEffect } from "react";
import {  FaArrowDown, FaArrowUp, FaCar, FaWalking } from "react-icons/fa";
import { IoBicycleSharp } from "react-icons/io5";
import { FaBusSimple } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { Rectangle133 } from "../assets/images";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet/dist/leaflet.css";


const icons = [FaCar, FaWalking, IoBicycleSharp, FaBusSimple];


export default function Map() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [userlocation, setUserLocation] = useState([6.5244, 3.3792]);

  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setUserLocation([pos.coords.latitude, pos.coords.longitude])
      },
    (err) => console.log(err)
      )
    }
  }, [])

  const [directions] = useState([
    "Head straight down and take the first left",
    "Head straight down and take the first right",
    "Take the right turning after the roundabout in Ketu",
    "Head straight down and take the first left",
    "Head straight down and take the first left",
  ]);

  return (
    <main className="flex flex-col-reverse lg:flex-row w-full h-full lg:px-20 overflow-hidden bg-secondary/80 lg:bg-white"> 
      <div className="sm:w-[40%] md:w-[100%] lg:w-[24%] lg:bg-secondary px-8 border-r-2 border-gray-200 overflow-y-auto my-2">
        <div className="lg:px-6 py-4">
          <div className="flex gap-6 items-center lg:mb-4">
            <img src={Rectangle133} alt="" className="w-24 hidden md:block" />
            <h2 className="text-sm lg:text-xl text-accent/80 font-semibold mb-2 w-50">
              Yemkemo Restaurant & Bar
            </h2>
          </div>
          <p className="text-gray-600">
            Restaurant, bar, grills, sushi and raw fish, Japanese restaurant
          </p>
        </div>

        <div className="text-green-500 text-3xl mb-4 lg:px-6">★★★★☆</div>

        <h3 className="text-3xl lg:text-center font-semibold mb-2">Directions</h3>
        <div className="flex gap-4 items-center lg:justify-center my-5">
          {icons.map((IconComponent, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`rounded-full border p-3 flex items-center justify-center hover:bg-gray-100 transition ${
                  isActive
                    ? "border-[#2c455d] text-[#2c455d]"
                    : "border-gray-400 text-gray-500 hover:bg-gray-100"
                }`}
              >
                <IconComponent size={14} />
              </div>
            );
          })}
        </div>

        <form className="mb-4 flex flex-col items-center justify-center">
         <div className="flex justify-center gap-4 items-center space-y-4">
           <div className="flex flex-col gap-4 ml-10">
            <div className="flex items-center border border-gray-200 rounded-md p-2 bg-gray-50 w-full ">
            <GrLocation className="text-gray-500 ml-2 text-lg" />:
            <input
              type="text"
              placeholder=" Shomolu"
              className="bg-gray-50 outline-none w-60"
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-md p-2 w-full">
            <GrLocation className="text-gray-500 ml-2 text-lg" />:
            <input
              type="text"
              placeholder=" 365 Ikorodu Village, Ikeja"
              className=" outline-none w-full"
            />
          </div>
          </div>
          <div className="flex items-center pb-6">
            <FaArrowUp className="text-gray-500 text-lg cusor-pointer"/>
            <FaArrowDown className="text-gray-500 text-lg cusor-pointer mt-3"/>
          </div>
         </div>
          <button
            type="button"
            className="bg-primary text-white py-2 px-5 rounded-md hover:bg-primary/80 transition cursor-pointer"
          >
            Get Direction
          </button>
        </form>

        <div className="border border-gray-300 rounded-md py-4 shadow-sm mb-10">
          <div className="flex justify-between items-center mb-2 px-4 border-b border-gray-300">
            <p className="font-semibold text-gray-800">
              Distance:{" "}
              <span className="text-gray-600 font-medium">5 miles</span>
            </p>
            <p className="font-semibold text-gray-800">
              Est. Time:{" "}
              <span className="text-gray-600 font-medium">1hr 24mins</span>
            </p>
          </div>

          <ol className="list-decimal list-inside ">
            {directions.map((step, index) => (
              <li
                key={index}
                className={`py- px-4 transition hover:bg-gray-100 ${
                  index !== directions.length - 1
                    ? "border-b border-gray-300"
                    : ""
                }`}
              >
                <span className="text-gray-700">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

     
      <div className="flex-1 p-5">
        <MapContainer
          center={userlocation}
          zoom={13}
          scrollWheelZoom={false}
          className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh]  rounded-md shadow-md"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </main>
  );
}
