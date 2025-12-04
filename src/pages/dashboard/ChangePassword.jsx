import { HiArrowLeft } from "react-icons/hi2";
import PrimaryButton from "../../components/shared/PrimaryButton";

export default function ChangePassword({ setSettingsPage }) {
  return (
    <div className="px-4 md:px-8 lg:px-10 py-8 md:py-12">
      
      {/* Back Button */}
      <button
        className="text-primary text-2xl mb-4 cursor-pointer"
        onClick={() => setSettingsPage("settings")}
      >
        <HiArrowLeft />
      </button>

      {/* Page Heading */}
      <h1 className="text-xl md:text-2xl font-bold mb-2 underline">
        Settings
      </h1>

      <h2 className="text-base md:text-lg text-primary font-semibold mb-8 md:mb-10">
        Change password
      </h2>

      {/* Form Container */}
      <div className="space-y-6 max-w-md w-full">
        
        {/* Old Password */}
        <div>
          <label className="block text-sm md:text-md text-primary font-semibold mb-2">
            Enter Old Password
          </label>
          <input
            type="password"
            placeholder="Enter old password"
            className="w-full border-2 border-gray-300 rounded-md px-3 py-2 text-sm focus:ring focus:ring-primary/20"
          />
        </div>

        {/* New Password */}
        <div>
          <label className="block text-sm md:text-md text-primary font-semibold mb-2">
            Enter New Password
          </label>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full border-2 border-gray-300 rounded-md px-3 py-2 text-sm focus:ring focus:ring-primary/20"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm md:text-md text-primary font-semibold mb-2">
            Confirm New Password
          </label>
          <input
            type="password"
            placeholder="Confirm new password"
            className="w-full border-2 border-gray-300 rounded-md px-3 py-2 text-sm focus:ring focus:ring-primary/20"
          />
        </div>

        {/* Submit Button */}
        <PrimaryButton
          type="submit"
          className="mt-4 md:mt-6 flex items-center mx-auto"
        >
          Change Password
        </PrimaryButton>

      </div>
    </div>
  );
}
