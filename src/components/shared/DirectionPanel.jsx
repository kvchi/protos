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
  origin = "",
  destination = "",
  onOriginChange = () => {},
  onDestinationChange = () => {},
  onGetDirections = () => {},
  distance = null,
  duration = null,
  loading = false,
  error = null,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onGetDirections();
  };

  const handleSwap = () => {
    const o = origin;
    const d = destination;
    onOriginChange(d);
    onDestinationChange(o);
  };

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

      {/* Transport mode: Car, Walking, Bicycle, Bus – distance & time update per mode */}
      <div className="flex gap-2 items-center lg:justify-center my-5" role="group" aria-label="Travel mode">
        {icons.map((IconComponent, i) => {
          const isActive = i === activeIndex;
          const modeLabels = ["Car", "Walking", "Bicycle", "Bus"];
          return (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-pressed={isActive}
              aria-label={modeLabels[i] ?? `Mode ${i + 1}`}
              title={modeLabels[i] ?? undefined}
              className={`rounded-full border p-2 flex items-center justify-center cursor-pointer transition ${
                isActive
                  ? "border-[#2c455d] text-[#2c455d]"
                  : "border-gray-400 text-gray-500 hover:bg-gray-100"
              }`}
            >
              <IconComponent size={14} />
            </button>
          );
        })}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-4 flex flex-col items-center justify-center">
        <div className="flex justify-center gap-4 items-center">
          <div className="flex flex-col gap-4">
            <div className="flex items-center border border-gray-200 rounded-md p-2 bg-gray-50 w-60">
              <GrLocation className="text-gray-500 ml-2 text-lg shrink-0" />
              <input
                type="text"
                placeholder="e.g. Shomolu, Lagos"
                value={origin}
                onChange={(e) => onOriginChange(e.target.value)}
                className="outline-none w-full ml-2 bg-transparent"
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-md p-2 w-60">
              <GrLocation className="text-gray-500 ml-2 text-lg shrink-0" />
              <input
                type="text"
                placeholder="e.g. Ikeja, Lagos or full address"
                value={destination}
                onChange={(e) => onDestinationChange(e.target.value)}
                className="outline-none w-full ml-2 bg-transparent"
              />
            </div>
          </div>

          <div className="flex flex-col items-center pb-6">
            <button type="button" onClick={handleSwap} className="p-1 rounded hover:bg-gray-100" aria-label="Swap origin and destination">
              <FaArrowUp className="text-gray-500 text-lg cursor-pointer" />
            </button>
            <button type="button" onClick={handleSwap} className="p-1 rounded hover:bg-gray-100 mt-3" aria-label="Swap origin and destination">
              <FaArrowDown className="text-gray-500 text-lg cursor-pointer" />
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-4 bg-primary text-white py-2 px-5 rounded-md hover:bg-primary/80 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Getting directions…" : "Get Direction"}
        </button>
        <p className="mt-2 text-xs text-gray-500 text-center max-w-[16rem]">
          Examples: &quot;Shomolu&quot;, &quot;Ikeja, Lagos&quot;, &quot;365 Ikorodu Rd, Ikeja&quot;, or a landmark name.
        </p>
      </form>

      {/* Directions list - dynamic distance & time */}
      <div className="border border-gray-300 rounded-md py-4 shadow-sm mb-10">
        <div className="flex justify-between items-center mb-2 px-4 border-b border-gray-300">
          <p className="font-semibold text-gray-800">
            Distance: <span className="text-gray-600 font-medium">{distance != null ? distance : "—"}</span>
          </p>
          <p className="font-semibold text-gray-800">
            Est. Time: <span className="text-gray-600 font-medium">{duration != null ? duration : "—"}</span>
          </p>
        </div>

        {error && (
          <p className="px-4 py-2 text-red-600 text-sm border-b border-gray-300">{error}</p>
        )}
        <ol className="list-decimal list-inside">
          {directions.length > 0 ? directions.map((step, index) => (
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
          )) : (
            <li className="py-2 px-4 text-gray-500 text-sm">
              Enter origin and destination, then click Get Direction.
            </li>
          )}
        </ol>
      </div>
    </div>
  );
}
