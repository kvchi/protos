import ListingDetailsTab from "./tabs/ListingDetailsTab";
import ListingServicesTab from "./tabs/ListingServicesTab";
import GalleryTab from "../edit/tabs/GalleryTab";

const TAB_COMPONENTS = {
  "Listing details": ListingDetailsTab,
  Services: ListingServicesTab,
  Gallery: GalleryTab,
};

export default function EditListingContent({ activeTab, business }) {
  const ActiveTabComponent = TAB_COMPONENTS[activeTab];

  return ActiveTabComponent ? (
    <ActiveTabComponent business={business} />
  ) : null;
}
