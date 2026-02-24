import { useState } from "react";
import EditBusinessHeader from "./EditBusinessHeader";
import Tabs from "./Tabs";
import EditBusinessContent from "./EditBusinessContent";

const BUSINESS_TABS = [
  "Business details",
  "Contact",
  "Location",
  "Gallery",
  "Business Hours",
  "Socials",
  "Authentication",
];

export default function EditBusiness({ business, onBack, title }) {
  const [activeTab, setActiveTab] = useState("Business details");

  return (
    <div className="lg:px-6 py-4">
      <EditBusinessHeader onBack={onBack} title={title} />

       <Tabs
        tabs={BUSINESS_TABS}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      <EditBusinessContent
        activeTab={activeTab}
        business={business}
      />
      </div>
    
  );
}
