import { useState } from "react";
import { useNavigate } from "react-router-dom";
import sampleImg from "../assets/images/food10.jpg";

export default function FilterImageModal() {
  const [activeItem, setActiveItem] = useState("");
  const navigate = useNavigate();

    const handleClick = () => {
        navigate("/upload")
    }


  const tabs = [
    "All uploads (64)",
    "New uploads (20)",
    "Interior (12)",
    "Exterior (8)",
    "Menu (5)",
    "Food (25)",
    "Drinks (14)",
  ];

  const images = new Array(16).fill(sampleImg);

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 mb-3 text-xs">
        {tabs.map((tab, i) => (
          <button
            onClick={() => setActiveItem(tab)}
            key={i}
            className={`px-2 py-1 hover:text-accent ${
              activeItem === tab && "rounded-md border-2 border-accent/80 text-accent/80"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 max-h-[50vh] overflow-y-auto modal-scroll">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="upload"
            className="w-full h-24 sm:h-28 object-cover rounded"
          />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={handleClick}
          className="bg-primary text-white px-4 py-2 rounded-md cursor-pointer text-sm"
        >
          Upload Image
        </button>
      </div>
    </div>
  );
}

