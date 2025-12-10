import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { HiArrowLeft } from "react-icons/hi2";
import { food12 } from "../../assets/images";
import SideBar from "./SideBar";
import AboutMeCard from "../../components/dashboard/AboutMeCard";
import RecentActivityCard from "../../components/dashboard/RecentActivityCard";
import NearMe from "./NearMe";
import FavoritesList from "./FavoriteList";
import Ratings from "./Ratings";
import Reservation from "./Reservation";
import Settings from "./Settings";
import PersonalInfo from "./PersonalInfo";
import Location from "./Location";
import ChangePassword from "./ChangePassword";
import { LucidePanelLeftClose } from "lucide-react";
import {
  favoriteData,
  ratingsData,
  reservationData,
} from "../../components/data/data";
import PlaceOrder from "../../components/PlaceOrder";
import EditReservationForm from "../../components/dashboard/EditReservationForm";
import ReservationDetails from "./ReservationDetails";
import CancelReservationModal from "../../components/dashboard/CancelReservation";
// import { reservationData } from "../../components/data/data";

export default function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showRecent, setShowRecent] = useState(false);
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("dashboard");
  const [favorites, setFavorites] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [nearMe, setNearme] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [settingsPage, setSettingsPage] = useState("settings");
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden relative w-full">
      <div className="flex flex-1 ">
        <SideBar
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          favorites={favorites}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
        <main className="flex-1 px-4 lg:px-16 py-6 space-y-8 ">
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setShowSidebar(true)}
          >
            <LucidePanelLeftClose size={28} />
          </button>
          {activeItem === "settings" && settingsPage === "personalInfo" && (
            <PersonalInfo setSettingsPage={setSettingsPage} />
          )}
          {activeItem === "settings" && settingsPage === "location" && (
            <Location setSettingsPage={setSettingsPage} />
          )}
          {activeItem === "settings" && settingsPage === "changePassword" && (
            <ChangePassword setSettingsPage={setSettingsPage} />
          )}

          {activeItem === "settings" && settingsPage === "settings" && (
            <Settings
              setActiveItem={setActiveItem}
              setSettingsPage={setSettingsPage}
            />
          )}
          {activeItem === "favorites" && (
            <div>
              <button
                className="text-primary text-2xl"
                onClick={() => setActiveItem("dashboard")}
              >
                <HiArrowLeft />
              </button>
              <FavoritesList
                setActiveItem={setActiveItem}
                favorites={favoriteData}
                setFavorites={setFavorites}
              />
            </div>
          )}

          {/* NEAR ME */}
          {activeItem === "near" && (
            <div className="">
              <button
                className="text-primary text-2xl self-start mb-5 cursor-pointer"
                onClick={() => setActiveItem("dashboard")}
              >
                <HiArrowLeft />
              </button>
              <p className="font-semibold text-xl">
                Business located near your current location
              </p>
              <NearMe
                setActiveItem={setActiveItem}
                nearMe={nearMe}
                setNearMe={setNearme}
              />
            </div>
          )}
          {/* RATINGS */}
          {activeItem === "ratings" && (
            <div>
              <button
                className="text-primary text-2xl cursor-pointer"
                onClick={() => setActiveItem("dashboard")}
              >
                <HiArrowLeft />
              </button>
              <Ratings
                setActiveItem={setActiveItem}
                ratings={ratingsData}
                setRatings={setRatings}
              />
            </div>
          )}

          {/* RESERVATIONS */}

          {activeItem === "reservations" && (
            <div>
              <button
                className="text-primary text-2xl self-start cursor-pointer"
                onClick={() => setActiveItem("dashboard")}
              >
                <HiArrowLeft />
              </button>

              <Reservation
                setActiveItem={setActiveItem}
                reservations={reservationData}
                setReservations={setReservations}
                setSelectedReservation={setSelectedReservation}
              />
            </div>
          )}

          {/* RESERVATION DETAILS PAGE */}
          {activeItem === "reservationDetails" && selectedReservation && (
            <div>
              <button
                className="text-primary text-2xl cursor-pointer"
                onClick={() => setActiveItem("reservations")}
              >
                <HiArrowLeft />
              </button>

              <ReservationDetails
                data={selectedReservation}
                onDetails={() => setIsEditModalOpen(true)}
                setActiveItem={setActiveItem}
                onCancel={() => setIsCancelModalOpen(true)}
              />
            </div>
          )}

          {activeItem === "dashboard" && !showRecent && (
            <>
              <AboutMeCard
                bio="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum vitae totam eaque velit ipsam exercitationem consequuntur quo! Quasi unde, libero veritatis quo tenetur obcaecati dignissimos, nesciunt placeat exercitationem expedita facilis ut! Amet praesentium sapiente quia id itaque, optio corrupti aliquam possimus repudiandae provident, earum pariatur voluptate sint nulla consectetur iste."
                location="134 Ikeja, Lagos State."
                zip="321001"
                email="jasonracky@gmail.com"
              />

              <section className="lg:p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2
                    className="font-semibold text-base lg:text-lg text-primary cursor-pointer"
                    onClick={() => setShowRecent(true)}
                  >
                    Recent Activity
                  </h2>
                  <button className="text-gold font-semibold text-sm">
                    See More
                  </button>
                </div>

                <RecentActivityCard
                  image={food12}
                  title="Yemkemo Restaurant & Bar"
                  description="Restaurant, bar, grill..."
                  location="365 Ikari village, Ikja"
                />
              </section>
            </>
          )}

          {showRecent && (
            <section className="p-6">
              <button
                className="pb-4 cursor-pointer text-primary text-lg"
                onClick={() => setShowRecent(false)}
              >
                <HiArrowLeft />
              </button>
              <div className="flex justify-between items-center mb-6 w-full flex-wrap gap-4">
                <h2 className="font-semibold md:font-bold text-sm lg:text-xl text-primary whitespace-nowrap flex-shrink-0">
                  Recent Activity
                </h2>

                <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
                  <p className="text-sm lg:text-lg font-semibold text-primary whitespace-nowrap">
                    Sort by:
                  </p>
                  <select className="border-2 border-primary md:px-3 py-1 rounded text-primary font-semibold text-sm">
                    <option>Date Viewed</option>
                    <option>Most Recent</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <RecentActivityCard
                    key={i}
                    image={food12}
                    title="Yemkemo Restaurant & Bar"
                    description="Restaurant, bar, grill, sushi and raw fish, Japanese restaurant..."
                    location="365 Ikari village, Ikja, Lagos state."
                    onClick={() => navigate("restaurantDetails")}
                  />
                ))}
              </div>
            </section>
          )}
          <div>
            <PlaceOrder
              isOpen={isEditModalOpen}
              onClose={() => setIsEditModalOpen(false)}
              title="Edit Reservation"
            >
              <EditReservationForm
                onClose={() => setIsEditModalOpen(false)}
                data={selectedReservation}
              />
            </PlaceOrder>
          </div>
          <CancelReservationModal
            isOpen={isCancelModalOpen}
            onClose={() => setIsCancelModalOpen(false)}
            onBack={() => {
              setIsCancelModalOpen(false);
              setActiveItem("dashboard")
            }}
            title="Reservation Cancelled"
            venue={selectedReservation?.title}
          />
        </main>
      </div>
    </div>
  );
}
