import { LucideFileSpreadsheet, LucidePanelLeftClose } from "lucide-react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLibraryBooks } from "react-icons/md";

export default function SideBar({
  activeItem,
  setActiveItem,
  favorites = [],
  showSidebar,
  setShowSidebar,
}) {
  const isActive = (key) =>
    key === activeItem ? "text-gold font-semibold" : "text-gray-600";

  return (
    <>
      
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}

      {/* ================= MOBILE SIDEBAR ================= */}
      <aside
        className={`fixed top-0 left-0 h-full w-full bg-white border-r z-50 p-8 transform transition-transform duration-300 md:hidden
        ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}
      >
       
        <button
          className="mb-6 text-primary cursor-pointer font-semibold"
          onClick={() => setShowSidebar(false)}
        >
          <LucidePanelLeftClose size={28} />
        </button>

        {/* Profile info */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-md flex items-center justify-center text-gray-500 bg-secondary">
            Add photo
          </div>
          <p className="mt-4 font-medium">
            Name: <span className="text-blue-600">Jason Racky</span>
          </p>
          <p className="text-gray-500 text-sm">Joined Jan 2024</p>

          <button
            onClick={() => {
              setActiveItem("settings");
              setShowSidebar(false);
            }}
            className={`flex items-center gap-2 mt-1 cursor-pointer
        ${
          activeItem === "settings"
            ? "text-gold font-semibold"
            : "text-tetiary"
        }`}
          >
            <span className="text-xl">⚙</span> Settings
          </button>
        </div>

        <div className="mt-10">
          <h2 className="font-semibold text-gray-600 mb-3 underline">
            My Events
          </h2>

          <ul className="text-gray-700 text-sm space-y-8 font-semibold">
            <li
              onClick={() => {
                setActiveItem("near");
                setShowSidebar(false);
              }}
              className={`flex items-center gap-4 cursor-pointer ${isActive(
                "near"
              )}`}
            >
              <IoLocationOutline size={24} /> Near me (0)
            </li>

            <li
              onClick={() => {
                setActiveItem("favorites");
                setShowSidebar(false);
              }}
              className={`flex items-center gap-4 cursor-pointer ${isActive(
                "favorites"
              )}`}
            >
              <IoMdHeartEmpty size={24} /> Favorites ({favorites.length})
            </li>

            <li
              onClick={() => {
                setActiveItem("ratings");
                setShowSidebar(false);
              }}
              className={`flex items-center gap-4 cursor-pointer ${isActive(
                "ratings"
              )}`}
            >
              <MdOutlineLibraryBooks size={24} /> Ratings & Reviews (0)
            </li>

            <li
              onClick={() => {
                setActiveItem("reservations");
                setShowSidebar(false);
              }}
              className={`flex items-center gap-4 cursor-pointer ${isActive(
                "reservations"
              )}`}
            >
              <LucideFileSpreadsheet size={24} /> Reservations (0)
            </li>
          </ul>
        </div>
      </aside>

      <aside className="w-[250px] border-r-2 border-b border-gray py-8 hidden md:block mb-40 px-8">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-md flex items-center justify-center text-gray-500 bg-secondary">
            Add photo
          </div>
          <p className="mt-4 font-medium">
            Name: <span className="text-blue-600">Jason Racky</span>
          </p>
          <p className="text-gray-500 text-sm">Joined Jan 2024</p>

          <button
            onClick={() => setActiveItem("settings")}
            className={`flex items-center gap-2 mt-1 cursor-pointer 
            ${activeItem === "settings" ? "text-gold font-semibold" : "text-tetiary"}`}
          >
            <span className="text-xl">⚙</span> Settings
          </button>
        </div>

        <div className="mt-10">
          <h2 className="font-semibold text-gray-600 mb-3 underline">
            My Events
          </h2>
          <ul className="text-gray-700 text-sm space-y-8 font-semibold">
            <li
              onClick={() => setActiveItem("near")}
              className={`flex items-center gap-4 cursor-pointer ${isActive(
                "near"
              )}`}
            >
              <IoLocationOutline size={24} /> Near me (0)
            </li>

            <li
              onClick={() => setActiveItem("favorites")}
              className={`flex items-center gap-4 cursor-pointer ${isActive(
                "favorites"
              )}`}
            >
              <IoMdHeartEmpty size={24} /> Favorites ({favorites.length})
            </li>

            <li
              onClick={() => setActiveItem("ratings")}
              className={`flex items-center gap-4 cursor-pointer ${isActive(
                "ratings"
              )}`}
            >
              <MdOutlineLibraryBooks size={24} /> Ratings & Reviews (0)
            </li>

            <li
              onClick={() => setActiveItem("reservations")}
              className={`flex items-center gap-4 cursor-pointer ${isActive(
                "reservations"
              )}`}
            >
              <LucideFileSpreadsheet size={24} /> Reservations (0)
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
