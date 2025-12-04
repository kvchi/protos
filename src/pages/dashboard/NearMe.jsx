import PrimaryButton from "../../components/shared/PrimaryButton";
import SearchBar from "../../components/SearchBar";
import RecentActivityCard from "../../components/dashboard/RecentActivityCard";

export default function NearMe({ nearMe }) {
  if (nearMe.length === 0) {
    return (
      <div className="w-full p-4">
        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-5 gap-4">
          <SearchBar forceDetailsLayout />

          <div className="flex items-center gap-2">
            <p className="text-lg md:text-xl font-semibold text-primary">Filter by:</p>
            <select className="border-2 p-2 rounded-lg text-primary outline-none">
              <option value="">Select a filter</option>
            </select>
          </div>
        </div>

        {/* Empty state */}
        <div className="pt-4 text-center mt-10">
          <p className="text-lg font-semibold mb-4">No Location Added Yet</p>

          <PrimaryButton
            type="button"
            className="mt-6 flex items-center mx-auto"
          >
            Go to Settings
          </PrimaryButton>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-4">
      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-5 gap-4">
        <SearchBar forceDetailsLayout />

        <div className="flex items-center gap-2">
          <p className="text-lg md:text-xl font-semibold text-primary">Filter by:</p>
          <select className="border-2 p-2 rounded-lg text-primary outline-none">
            <option value="">Select a filter</option>
          </select>
        </div>
      </div>

      <h2 className="text-lg md:text-xl font-semibold mt-6 mb-4">
        Business located near your current location
      </h2>

      {/* Cards */}
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        {nearMe.map((business, index) => (
          <RecentActivityCard
            key={index}
            image={business.image}
            title={business.title}
            description={business.description}
            location={business.location}
            onClick={() => console.log("open details...")}
          />
        ))}
      </div>
    </div>
  );
}
