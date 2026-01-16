import WelcomeHeader from "../../components/business/WelcomeHeader";
import StatsSummary from "../../components/business/StatsSummary";
import CustomerBehaviorSection from "../../components/business/CustomerBehaviorSection";

import {
  businessStats,
  businessBehaviorData,
  listingBehaviorData,
} from "../../data/businessDashboardData";

export default function BusinessHome() {
  return (
    <div className="space-y-5">
      <WelcomeHeader userName="Jason" />

      <StatsSummary stats={businessStats} />

      <CustomerBehaviorSection
        title="Customer Behaviors"
        tag="For business"
        data={businessBehaviorData}
        filterType="select"
      />

      <CustomerBehaviorSection
        title="Customer Behaviors"
        tag="For listings"
        data={listingBehaviorData}
        filterType="tabs"
      />
    </div>
  );
}
