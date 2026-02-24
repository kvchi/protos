import { useState, useEffect, useCallback } from "react";
import { FaCar, FaWalking } from "react-icons/fa";
import { IoBicycleSharp } from "react-icons/io5";
import { FaBusSimple } from "react-icons/fa6";

import { Rectangle133 } from "../assets/images";
import { geocode, getRoute, formatDistance, formatDuration, reverseGeocode } from "../utils/directions";

import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet/dist/leaflet.css";
import MapView from "../components/shared/MapView";
import DirectionsPanel from "../components/shared/DirectionPanel";

const icons = [FaCar, FaWalking, IoBicycleSharp, FaBusSimple];

// Car, Walking, Bicycle, Bus – OSRM has driving/walking/cycling; bus uses driving (road-based)
const ROUTE_PROFILES = ["driving", "walking", "cycling", "driving"];

export default function Map() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [userlocation, setUserLocation] = useState([6.5244, 3.3792]);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [routeResult, setRouteResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          setUserLocation([lat, lon]);
          try {
            const address = await reverseGeocode(lat, lon);
            if (address) setOrigin(address);
          } catch {
            // keep origin empty if reverse geocode fails
          }
        },
        (err) => console.log(err)
      );
    }
  }, []);

  const handleGetDirections = useCallback(async () => {
    if (!origin.trim() || !destination.trim()) return;
    setLoading(true);
    setRouteResult(null);
    try {
      const from = await geocode(origin);
      const to = await geocode(destination);
      if (!from || !to) {
        setRouteResult({ error: "Could not find one or both locations." });
        return;
      }
      const profile = ROUTE_PROFILES[activeIndex] ?? "driving";
      const route = await getRoute(from, to, profile);
      if (!route) {
        setRouteResult({ error: "Could not find a route." });
        return;
      }
      setRouteResult({
        distance: formatDistance(route.distanceMeters),
        duration: formatDuration(route.durationSeconds),
        steps: route.steps,
      });
    } catch (err) {
      console.error(err);
      setRouteResult({ error: "Something went wrong. Try again." });
    } finally {
      setLoading(false);
    }
  }, [origin, destination, activeIndex]);

  // When user changes travel mode (icon), re-fetch route so distance & time match the mode
  useEffect(() => {
    if (origin.trim() && destination.trim() && routeResult && !routeResult.error) {
      handleGetDirections();
    }
  }, [activeIndex]); // eslint-disable-line react-hooks/exhaustive-deps -- only re-run when mode changes

  return (
    <main className="flex flex-col-reverse lg:flex-row w-full min-h-screen overflow-x-hidden bg-secondary/80 lg:bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <DirectionsPanel
        title="Yemkemo Restaurant & Bar"
        description="Restaurant, bar, grills, sushi and raw fish, Japanese restaurant"
        image={Rectangle133}
        icons={icons}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        directions={routeResult?.steps ?? []}
        origin={origin}
        destination={destination}
        onOriginChange={setOrigin}
        onDestinationChange={setDestination}
        onGetDirections={handleGetDirections}
        distance={routeResult?.distance ?? null}
        duration={routeResult?.duration ?? null}
        loading={loading}
        error={routeResult?.error ?? null}
      />

      <MapView center={userlocation} showLocationMarker />
    </main>
  );
}
