import { LucidePanelLeftClose } from "lucide-react";
import { sidebarMenus } from "./sideBarMenu";
import { useState, useEffect, useContext } from "react";
import { RegistrationContext } from "../../context/RegistrationContext"; // Adjust the path as needed

export default function SideBar({
  type = "user",
  activeItem,
  setActiveItem,
  favorites = [],
  showSidebar,
  setShowSidebar,
  profileImage: externalProfileImage,
  setProfileImage: externalSetProfileImage,
}) {
  const { formData } = useContext(RegistrationContext); // Get user data from context

  // Internal state that loads from localStorage
  const [internalProfileImage, setInternalProfileImage] = useState(() => {
    return localStorage.getItem('profileImage') || null;
  });

  // Use external state if provided, otherwise use internal state
  const profileImage = externalProfileImage !== undefined ? externalProfileImage : internalProfileImage;
  const setProfileImage = externalSetProfileImage || setInternalProfileImage;

  // Sync with localStorage whenever profileImage changes
  useEffect(() => {
    if (profileImage) {
      try {
        localStorage.setItem('profileImage', profileImage);
      } catch (error) {
        if (error.name === 'QuotaExceededError') {
          console.error('Image too large for localStorage. Please use a smaller image.');
          setProfileImage(null);
        }
      }
    } else {
      localStorage.removeItem('profileImage');
    }
  }, [profileImage]);

  const menuItems = sidebarMenus[type];

  const isActive = (key) =>
    key === activeItem ? "text-gold font-semibold" : "text-gray-600";

  // Compress and resize image before storing
  const compressImage = (file, maxWidth = 200, maxHeight = 200, quality = 0.7) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          const compressedBase64 = canvas.toDataURL('image/jpeg', quality);
          resolve(compressedBase64);
        };
        img.onerror = reject;
      };
      reader.onerror = reject;
    });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const compressedImage = await compressImage(file);
        setProfileImage(compressedImage);
      } catch (error) {
        console.error('Error compressing image:', error);
        alert('Failed to process image. Please try a different image.');
      }
    }
  };

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

  const ProfileSection = () => (
    <div className="flex flex-col items-center">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        id="profile-image-upload"
      />
      <label
        htmlFor="profile-image-upload"
        className="w-24 h-24 rounded-md flex items-center justify-center text-gray-500 bg-secondary cursor-pointer overflow-hidden hover:opacity-80 transition-opacity"
      >
        {profileImage ? (
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary text-white font-bold text-2xl uppercase">
            {formData.first_name?.[0]}
            {formData.last_name?.[0]}
          </div>
        )}
      </label>
      <p className="mt-4 font-medium">
        Name: <span className="text-blue-600">
          {formData.first_name} {formData.last_name}
        </span>
      </p>
      <p className="text-gray-500 text-sm">Joined Jan 2024</p>

      <button
        onClick={() => {
          setActiveItem("settings");
          showSidebar && setShowSidebar(false);
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

        <ProfileSection />

        <div className="mt-10">
          <h2 className="font-semibold text-gray-600 mb-3 underline">
            My Events
          </h2>
          {renderMenu(true)}
        </div>
      </aside>

      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="w-[250px] border-r-2 border-gray py-8 hidden md:block px-8">
        <ProfileSection />

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