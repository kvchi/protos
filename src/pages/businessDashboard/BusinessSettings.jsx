import { useState } from "react";
import { HiArrowLeft } from "react-icons/hi2";
import ImageUpload from "../../components/shared/ImageUpload";
import FormInput from "../../components/shared/FormInput";
import Tabs from "../../components/shared/Tabs";

const settingsTabs = ["Personal Information", "Change Password"];

export default function BusinessSettings({ onBack }) {
  const [activeTab, setActiveTab] = useState(settingsTabs[0]);
  const [profileImage, setProfileImage] = useState(null);

  return (
    <div className="max-w-xl space-y-8">
    
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="p-2 cursor-pointer">
          <HiArrowLeft size={18} />
        </button>
        <h1 className="text-2xl font-bold text-primary">Settings</h1>
      </div>

      <Tabs
        tabs={settingsTabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {activeTab === "Personal Information" && (
        <div className="space-y-6">
          <ImageUpload
            label="Profile picture"
            variant="gallery"
            value={profileImage}
            onChange={setProfileImage}
          />

          <div className="space-y-4">
            <FormInput label="First name" placeholder="Jason" />
            <FormInput label="Last name" placeholder="Racky" />
            <FormInput
              label="Email address"
              type="email"
              placeholder="jasonracky@gmail.com"
            />
          </div>

          <button className="px-6 py-2 bg-primary text-white rounded-md text-sm mx-auto block">
            Save Information
          </button>
        </div>
      )}

      
      {activeTab === "Change Password" && (
        <div className="space-y-4">
          <FormInput label="Current password" type="password" />
          <FormInput label="New password" type="password" />
          <FormInput label="Confirm new password" type="password" />

          <button className="px-6 py-2 bg-primary text-white rounded-md text-sm mx-auto block mt-10">
            Save Information
          </button>
        </div>
      )}
    </div>
  );
}
