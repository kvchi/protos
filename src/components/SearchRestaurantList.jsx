import SearchResultCard from "./SearchResultCard";

const PLACEHOLDER_ITEMS = [1, 2, 3, 4, 5];

export default function SearchRestaurantList({ locationName = "Lagos" }) {
  return (
    <section className="px-4 md:px-8 lg:px-10">
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-primary">
          Restaurants
        </h2>
        <p className="text-sm md:text-base">
          Here are restaurants in{" "}
          <span className="text-accent font-semibold underline underline-offset-4">
            {locationName}
          </span>
        </p>
      </div>

      {PLACEHOLDER_ITEMS.map((item) => (
        <SearchResultCard key={item} />
      ))}
    </section>
  );
}
