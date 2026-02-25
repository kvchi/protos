import { useRef } from "react";
import SearchResultCard from "./SearchResultCard";
import FeaturedRestaurantCard from "./FeaturedRestaurantCard";
import { featuredRestaurants } from "../data/featuredRestaurants";

const PLACEHOLDER_ITEMS = [1, 2, 3, 4, 5];

export default function SearchRestaurantList({ locationName = "Lagos" }) {
  const featuredScrollRef = useRef(null);

  const CARD_WIDTH = 360;
  const GAP = 16;
  const SLIDE_STEP = CARD_WIDTH + GAP;

  const scrollFeatured = (direction) => {
    if (!featuredScrollRef.current) return;
    featuredScrollRef.current.scrollBy({
      left: direction === "left" ? -SLIDE_STEP : SLIDE_STEP,
      behavior: "smooth",
    });
  };

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

      {/* Top featured restaurants */}
      <div className="mt-6 mb-8">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h3 className="text-lg md:text-xl font-bold text-primary">
            Top featured restaurants
          </h3>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={() => scrollFeatured("left")}
              aria-label="Scroll left"
              className="w-9 h-9 rounded-full border-2 border-[#7DD3FC] bg-white text-[#0EA5E9] flex items-center justify-center hover:bg-sky-50 transition-colors"
            >
              <span className="text-lg font-medium leading-none">&lt;</span>
            </button>
            <button
              type="button"
              onClick={() => scrollFeatured("right")}
              aria-label="Scroll right"
              className="w-9 h-9 rounded-full border-2 border-[#7DD3FC] bg-white text-[#0EA5E9] flex items-center justify-center hover:bg-sky-50 transition-colors"
            >
              <span className="text-lg font-medium leading-none">&gt;</span>
            </button>
          </div>
        </div>
        <div className="overflow-hidden w-[min(100%,992px)] sm:w-[min(100%,1112px)]">
          <div
            ref={featuredScrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [&::-webkit-scrollbar]:hidden"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
          {featuredRestaurants.map((restaurant) => (
            <FeaturedRestaurantCard
              key={restaurant.id}
              image={restaurant.image}
              name={restaurant.name}
              rating={restaurant.rating}
              address={restaurant.address}
              features={restaurant.features}
            />
          ))}
          </div>
        </div>
      </div>

      {PLACEHOLDER_ITEMS.map((item) => (
        <SearchResultCard key={item} />
      ))}
    </section>
  );
}
