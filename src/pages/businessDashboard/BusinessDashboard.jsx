import { useState } from "react";
import SideBar from "../dashboard/SideBar";
import BusinessHome from "./BusinessHome";
import { LucidePanelLeftClose } from "lucide-react";
import BusinessReservations from "./BusinessReservations";
import BusinessInfo from "./BusinessInfo";
import BusinessSettings from "./BusinessSettings";
import BusinessRatings from "./BusinessRatings";
import BusinessListing from "./BusinessListing";

export default function BusinessDashboard() {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden relative w-full">
      <div className="flex flex-1">
        <SideBar
          type="business"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />

        <main className="flex-1 px-2 lg:px-16 py-6">
          <button
            className="md:hidden cursor-pointer text-primary"
            onClick={() => setShowSidebar(true)}
          >
            <LucidePanelLeftClose size={28} />
          </button>
          {activeItem === "dashboard" && (
            <div>
              <BusinessHome />
            </div>
          )}
          {activeItem === "business" && (
            <BusinessInfo onBack={() => setActiveItem("dashboard")} />
          )}
          {activeItem === "listings" && <div><BusinessListing /></div>}
          {activeItem === "ratings" && <div><BusinessRatings /></div>}
          {activeItem === "reservations" && (
            <BusinessReservations onBack={() => setActiveItem("dashboard")} />
          )}
          {activeItem === "settings" && (
            <BusinessSettings onBack={() => setActiveItem("dashboard")} />
          )}
        </main>
      </div>
    </div>
  );
}
