import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

function ResizeMap() {
  const map = useMap();

  useEffect(() => {
    map.invalidateSize();
  }, [map]);

  return null;
}

export default function MapView({
  center = [6.5244, 3.3792],
  zoom = 13,
  height = "80vh",
  className = "",
}) {
  return (
    <div
      style={{ height }}
      className={`w-full p-5 ${className}`}
    >
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        className="w-full h-full rounded-md shadow-md"
      >
        <ResizeMap />
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}
