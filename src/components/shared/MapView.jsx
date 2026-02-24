import L from "leaflet";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// Custom blue "you are here" dot icon
const LocationIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      width: 18px;
      height: 18px;
      background: #4A90E2;
      border: 3px solid white;
      border-radius: 50%;
      box-shadow: 0 0 0 3px rgba(74,144,226,0.4);
    "></div>
  `,
  iconSize: [18, 18],
  iconAnchor: [9, 9],
  popupAnchor: [0, -12],
});

function ResizeMap() {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
  }, [map]);
  return null;
}

// Moves the map view whenever center changes (e.g. after geolocation resolves)
function RecenterMap({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, map.getZoom(), { animate: true });
    }
  }, [center, map]);
  return null;
}

export default function MapView({
  center = [6.5244, 3.3792],
  zoom = 13,
  height = "80vh",
  className = "",
  showLocationMarker = false,
}) {
  return (
    <div style={{ height }} className={`w-full p-5 ${className}`}>
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        className="w-full h-full rounded-md shadow-md"
      >
        <ResizeMap />
        <RecenterMap center={center} />
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showLocationMarker && (
          <Marker position={center} icon={LocationIcon}>
            <Popup>📍 You are here</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}