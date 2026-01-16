import { LucidePanelLeftClose } from "lucide-react";
import { sidebarMenus } from "./sideBarMenu";

export default function SideBar({
  type = "user",
  activeItem,
  setActiveItem,
  favorites = [],
  showSidebar,
  setShowSidebar,
}) {
  const menuItems = sidebarMenus[type];

  const isActive = (key) =>
    key === activeItem ? "text-gold font-semibold" : "text-gray-600";

  const renderMenu = (closeOnClick = false) => (
    <ul className="text-gray-700 text-sm space-y-8 font-semibold">
      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <li
            key={item.key}
            onClick={() => {
              setActiveItem(item.key);
              closeOnClick && setShowSidebar(false);
            }}
            className={`flex items-center gap-4 cursor-pointer ${isActive(
              item.key
            )}`}
          >
            {Icon && <Icon size={24} />}
            {item.label}
            {item.key === "favorites" && ` (${favorites.length})`}
          </li>
        );
      })}
    </ul>
  );

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
        className={`fixed top-0 left-0 h-full w-full bg-white z-50 p-8 transform transition-transform duration-300 md:hidden
        ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          className="mb-6 text-primary cursor-pointer"
          onClick={() => setShowSidebar(false)}
        >
          <LucidePanelLeftClose size={28} />
        </button>

        {/* Profile */}
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
            className={`flex items-center gap-2 mt-1 cursor-pointer ${
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
          {renderMenu(true)}
        </div>
      </aside>

      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="w-[250px] border-r-2 border-gray py-8 hidden md:block px-8">
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
            className={`flex items-center gap-2 mt-1 cursor-pointer ${
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
          {renderMenu(false)}
        </div>
      </aside>
    </>
  );
}
