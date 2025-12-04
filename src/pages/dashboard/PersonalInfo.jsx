import { HiArrowLeft } from "react-icons/hi2";
import PrimaryButton from "../../components/shared/PrimaryButton";

export default function PersonalInfo({ setSettingsPage }) {
  return (
    <div className="px-4 lg:px-16 py-10">
      <button
        className="text-primary text-2xl mb-6 cursor-pointer"
        onClick={() => setSettingsPage("settings")}
      >
        <HiArrowLeft />
      </button>

      <h1 className="text-2xl font-bold mb-2 underline">Settings</h1>

      <h1 className="text-xl text-primary font-semibold mb-6">Personal Info</h1>

      <div className="space-y-6 max-w-md">
        <div>
          <label className="text-sm font-semibold text-gray-700">
            First name
          </label>
          <input
            type="text"
            defaultValue="Jason"
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-700">
            Last name
          </label>
          <input
            type="text"
            defaultValue="Racky"
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-700">
            About Me
          </label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            placeholder="Write something about yourself..."
            rows={4}
          />
        </div>

        <PrimaryButton type="submit" className="mt-6 flex items-center mx-auto">
          Save Information
        </PrimaryButton>
      </div>
    </div>
  );
}
