import { useState, useEffect } from "react";
import {   FaCar, FaWalking } from "react-icons/fa";
import { IoBicycleSharp } from "react-icons/io5";
import { FaBusSimple } from "react-icons/fa6";

import { Rectangle133 } from "../assets/images";

import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet/dist/leaflet.css";
import MapView from "../components/shared/MapView";
import DirectionsPanel from "../components/shared/DirectionPanel";


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
    <main className="flex flex-col-reverse lg:flex-row w-full h-full overflow-hidden bg-secondary/80 lg:bg-white px-20"> 
      <DirectionsPanel
    title="Yemkemo Restaurant & Bar"
    description="Restaurant, bar, grills, sushi and raw fish, Japanese restaurant"
    image={Rectangle133}
    icons={icons}
    activeIndex={activeIndex}
    setActiveIndex={setActiveIndex}
    directions={directions}
  />

        <MapView center={userlocation} />
    </main>
  );
}
