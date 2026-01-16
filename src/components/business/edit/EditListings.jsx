import { useState } from "react";
import EditBusinessHeader from "../edit/EditBusinessHeader";
import Tabs from "../../business/edit/Tabs";
import EditListingContent from "./EditListingContent";

const LISTING_TABS = ["Listing details", "Services", "Gallery"];

export default function EditListing({ business, onBack }) {
  const [activeTab, setActiveTab] = useState("Listing details");

  return (
    <div className="lg:px-6 py-4">
      <EditBusinessHeader
        onBack={onBack}
        title="Add posts"
      />

      <Tabs
        tabs={LISTING_TABS}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      <div className="mt-6">
        <EditListingContent
          activeTab={activeTab}
          business={business}
        />
      </div>
    </div>
  );
}
