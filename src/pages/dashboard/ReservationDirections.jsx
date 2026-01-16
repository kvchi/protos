import { useState } from "react";
import { FaCar, FaWalking } from "react-icons/fa";
import { IoBicycleSharp } from "react-icons/io5";
import { FaBusSimple } from "react-icons/fa6";

import MapView from "../../components/shared/MapView";
import DirectionsPanel from "../../components/shared/DirectionPanel";
import { Rectangle133 } from "../../assets/images";

const icons = [FaCar, FaWalking, IoBicycleSharp, FaBusSimple];

export default function ReservationDirections() {
  const [activeIndex, setActiveIndex] = useState(0);

  const directions = [
    "Leave your location",
    "Head toward Ikeja",
    "Turn right at the junction",
    "Destination is on the left",
  ];

  return (
    <main className="flex flex-col lg:flex-row py-5 gap-4">
      <MapView height="95vh" className="lg:w-[50%]" />


      <DirectionsPanel
        title="Yemkemo Restaurant & Bar"
        description="365 Ikari village, Ikeja, Lagos"
        image={Rectangle133}
        icons={icons}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        directions={directions}
      />
    </main>
  );
}
