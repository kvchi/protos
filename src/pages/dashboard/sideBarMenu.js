// dashboard/sidebarMenu.js
import { IoMdHeartEmpty } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { LucideFileSpreadsheet } from "lucide-react";
import { MdDashboard } from "react-icons/md";
import { LiaConciergeBellSolid } from "react-icons/lia";

export const sidebarMenus = {
  user: [
    {
      key: "near",
      label: "Near me",
      icon: IoLocationOutline,
      countKey: "near",
    },
    {
      key: "favorites",
      label: "Favorites",
      icon: IoMdHeartEmpty,
      countKey: "favorites",
    },
    {
      key: "ratings",
      label: "Ratings & Reviews",
      icon: MdOutlineLibraryBooks,
      countKey: "ratings",
    },
    {
      key: "reservations",
      label: "Reservations",
      icon: LucideFileSpreadsheet,
      countKey: "reservations",
    },
  ],

  business: [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: MdDashboard,
    },
    {
      key: "business",
      label: "Business",
      icon: LiaConciergeBellSolid,
    },
    {
      key: "listings",
      label: "Listings",
      icon: MdOutlineLibraryBooks,
    },
    {
      key: "ratings",
      label: "Ratings & Reviews",
      icon: MdOutlineLibraryBooks,
    },
    {
      key: "uploads",
      label: "Uploads",
      icon: LucideFileSpreadsheet,
    },
    {
      key: "reservations",
      label: "Reservation",
      icon: LucideFileSpreadsheet,
    },
  ],
};
