const NOMINATIM_BASE = "https://nominatim.openstreetmap.org/search";
const NOMINATIM_REVERSE = "https://nominatim.openstreetmap.org/reverse";
const OSRM_BASE = "https://router.project-osrm.org/route/v1";

const USER_AGENT = "ProtosApp/1.0 (Directions)";

/**
 * Reverse geocode [lat, lng] to a readable address using Nominatim.
 * @param {number} lat
 * @param {number} lon
 * @returns {Promise<string | null>}
 */
export async function reverseGeocode(lat, lon) {
  const params = new URLSearchParams({
    lat: String(lat),
    lon: String(lon),
    format: "json",
  });
  const res = await fetch(`${NOMINATIM_REVERSE}?${params}`, {
    headers: { "User-Agent": USER_AGENT },
  });
  const data = await res.json();
  if (!data?.address) return null;
  const a = data.address;
  const parts = [
    a.road,
    a.suburb || a.neighbourhood || a.village,
    a.city || a.town || a.county,
    a.state,
    a.country,
  ].filter(Boolean);
  return parts.length > 0 ? parts.join(", ") : data.display_name || null;
}

/**
 * Geocode an address to [lat, lng] using Nominatim (OpenStreetMap).
 * @param {string} address
 * @returns {Promise<[number, number] | null>}
 */
export async function geocode(address) {
  if (!address?.trim()) return null;
  const params = new URLSearchParams({
    q: address.trim(),
    format: "json",
    limit: "1",
  });
  const res = await fetch(`${NOMINATIM_BASE}?${params}`, {
    headers: { "User-Agent": USER_AGENT },
  });
  const data = await res.json();
  if (!data?.length) return null;
  const { lat, lon } = data[0];
  return [parseFloat(lat), parseFloat(lon)];
}

/**
 * Get route between two points using OSRM. Coordinates as [lat, lng].
 * @param {[number, number]} from - [lat, lng]
 * @param {[number, number]} to - [lat, lng]
 * @param {"driving"|"walking"|"cycling"} profile
 * @returns {Promise<{ distanceMeters: number, durationSeconds: number, steps: string[] } | null>}
 */
export async function getRoute(from, to, profile = "driving") {
  if (!from || from.length !== 2 || !to || to.length !== 2) return null;
  const coords = `${from[1]},${from[0]};${to[1]},${to[0]}`;
  const url = `${OSRM_BASE}/${profile}/${coords}?overview=false&steps=true`;
  const res = await fetch(url);
  const data = await res.json();
  if (data?.code !== "Ok" || !data?.routes?.length) return null;
  const route = data.routes[0];
  const distanceMeters = route.distance;
  const durationSeconds = route.duration;
  const steps = [];
  for (const leg of route.legs || []) {
    for (const step of leg.steps || []) {
      const text = step.maneuver?.instruction || step.name || "Continue";
      if (text && text !== "Continue") steps.push(text);
    }
  }
  if (steps.length === 0) steps.push("Follow the route to your destination.");
  return { distanceMeters, durationSeconds, steps };
}

/** @param {number} meters */
export function formatDistance(meters) {
  const miles = meters * 0.000621371;
  if (miles < 0.1) return `${(miles * 5280).toFixed(0)} ft`;
  return `${miles.toFixed(1)} mi`;
}

/** @param {number} seconds */
export function formatDuration(seconds) {
  const hours = Math.floor(seconds / 3600);
  const mins = Math.round((seconds % 3600) / 60);
  if (hours > 0) return `${hours} hr ${mins} min`;
  return `${mins} min`;
}
