import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

export default function DirectionsPanel({
   title = "",
  description = "",
  image,
  icons = [],
  activeIndex,
  setActiveIndex = () => {},
  directions = [],
}) {
  return (
    <div className="sm:w-[40%] md:w-[100%] lg:w-[35%] lg:bg-secondary px-4 border-r-2 border-gray-200 overflow-y-auto my-2">
      
      {/* Header */}
      <div className="py-4">
        <div className="flex gap-4 items-center lg:mb-4">
          <img src={image} alt={title} className="w-24 hidden md:block" />
          <h2 className="text-sm lg:text-xl text-accent/80 font-semibold mb-2">
            {title}
          </h2>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Rating */}
      <div className="text-green text-3xl mb-4">★★★★☆</div>

      {/* Directions title */}
      <h3 className="text-3xl lg:text-center font-semibold mb-2">
        Directions
      </h3>

      {/* Transport icons */}
      <div className="flex gap-2 items-center lg:justify-center my-5">
        {icons.map((IconComponent, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full border p-2 flex items-center justify-center cursor-pointer transition ${
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

      {/* Form */}
      <form className="mb-4 flex flex-col items-center justify-center">
        <div className="flex justify-center gap-4 items-center">
          <div className="flex flex-col gap-4">
            <div className="flex items-center border border-gray-200 rounded-md p-2 bg-gray-50 w-60">
              <GrLocation className="text-gray-500 ml-2 text-lg" />
              <input
                type="text"
                placeholder="Shomolu"
                className="outline-none w-full ml-2 bg-transparent"
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-md p-2 w-60">
              <GrLocation className="text-gray-500 ml-2 text-lg" />
              <input
                type="text"
                placeholder="365 Ikorodu Village, Ikeja"
                className="outline-none w-full ml-2 bg-transparent"
              />
            </div>
          </div>

          <div className="flex flex-col items-center pb-6">
            <FaArrowUp className="text-gray-500 text-lg cursor-pointer" />
            <FaArrowDown className="text-gray-500 text-lg cursor-pointer mt-3" />
          </div>
        </div>

        <button
          type="button"
          className="mt-4 bg-primary text-white py-2 px-5 rounded-md hover:bg-primary/80 transition"
        >
          Get Direction
        </button>
      </form>

      {/* Directions list */}
      <div className="border border-gray-300 rounded-md py-4 shadow-sm mb-10">
        <div className="flex justify-between items-center mb-2 px-4 border-b border-gray-300">
          <p className="font-semibold text-gray-800">
            Distance: <span className="text-gray-600 font-medium">5 miles</span>
          </p>
          <p className="font-semibold text-gray-800">
            Est. Time: <span className="text-gray-600 font-medium">1hr 24mins</span>
          </p>
        </div>

        <ol className="list-decimal list-inside">
          {directions.map((step, index) => (
            <li
              key={index}
              className={`py-1 px-4 hover:bg-gray-100 ${
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
  );
}
