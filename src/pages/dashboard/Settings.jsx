import { HiArrowLeft } from "react-icons/hi2";

export default function Settings({ setActiveItem,setSettingsPage }) {
  return (
    <div className="px-4 lg:px-16 py-10 text-gray-800">
      <button
        onClick={() => setActiveItem("dashboard")}
        className="text-primary text-2xl mb-6 cursor-pointer"
      >
        <HiArrowLeft />
      </button>

      <h1 className="text-xl font-semibold mb-8 underline">Settings</h1>

      <div className="space-y-4 text-blue-700 font-medium">
            <p
          className="cursor-pointer hover:underline"
          onClick={() => setSettingsPage("personalInfo")}
        >
          Personal Information
        </p>
        <p 
        onClick={() => setSettingsPage("location")}
        className="cursor-pointer hover:underline">Location</p>
        <p className="cursor-pointer hover:underline"
        onClick={() => setSettingsPage("changePassword")}>Change Password</p>
      </div>
    </div>
  );
}
