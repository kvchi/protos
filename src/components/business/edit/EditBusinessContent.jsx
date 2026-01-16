import BusinessDetailsTab from "./tabs/BusinessDetailsTab";
import BusinessHoursTab from "./tabs/BusinessHoursTab";
import ContactTab from "./tabs/ContactTab";
import GalleryTab from "./tabs/GalleryTab";
import LocationTab from "./tabs/LocationTab";
import SocialsTab from "./tabs/SocialsTab";
import AuthenticationTab from "./tabs/AuthenticationTab"

const TAB_COMPONENTS = {
  "Business details": BusinessDetailsTab,
  Contact: ContactTab,
  Location: LocationTab,
  Gallery: GalleryTab,
  "Business Hours": BusinessHoursTab,
  Socials: SocialsTab,
  Authentication: AuthenticationTab,
};

export default function EditBusinessContent({ activeTab, business }) {
   console.log("ACTIVE TAB:", activeTab);
  const ActiveTabComponent = TAB_COMPONENTS[activeTab];
  return ActiveTabComponent ? <ActiveTabComponent business={business} /> : null;
}
