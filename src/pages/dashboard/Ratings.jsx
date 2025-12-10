import { useState } from "react";
import RecentActivityCard from "../../components/dashboard/RecentActivityCard";
import PlaceOrder from "../../components/PlaceOrder";
import ReviewForm from "../../components/dashboard/ReviewForm";
import ReviewBanner from "../../components/dashboard/ReviewBanner";
import PrimaryButton from "../../components/shared/PrimaryButton";

export default function Ratings({ ratings }) {
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const openReviewModal = () => setIsReviewOpen(true);
  const closeReviewModal = () => setIsReviewOpen(false);
  // if (ratings.length === 0) {
  //   return (
  //     <div className="pt-4 text-center mt-20">
  //       <p className="text-lg font-semibold mb-4">No Ratings & Reviews</p>
  //       <PrimaryButton type="submit" className="mt-6 flex items-center mx-auto">
  //         Add Reviews & Ratings
  //       </PrimaryButton>
  //     </div>
  //   );
  // }
  return (
    <div className="pt-4">
      <h2 className="text-2xl text-primary font-bold mt-4">
        Reviews & Ratings
      </h2>
      <p className="text-gray-500 mt-1">
        Add reviews to business that you have come in contact with.
      </p>

      <div className="flex items-center gap-6 mt-6 flex-wrap">
        <div className="flex items-center gap-2">
          <p className="font-semibold">Sort by:</p>
          <select className="border px-3 py-1 rounded text-gray-700 outline-none">
            <option>Date added</option>
          </select>
        </div>
      </div>
      <div className="mt-8 space-y-6">
        {ratings.map((item, index) => (
          <RecentActivityCard
            key={index}
            mode="ratings"
            image={item.image}
            title={item.title}
            description={item.description}
            location={item.location}
            onLeaveReview={openReviewModal}
          />
        ))}
      </div>
      <PlaceOrder
        isOpen={isReviewOpen}
        onClose={closeReviewModal}
        title="Edit Review"
      >
        <ReviewForm onClose={closeReviewModal} />
      </PlaceOrder>
      <div className="mt-5">
        <ReviewBanner
          title="Yemkemo Restaurant & Bar"
          description="Restaurant, bar, grills, sushi and raw fish, Japanese restaurant."
          location="365 Ikari village, Ikeja, Lagos state, Nigeria"
          rating={4}
          reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          onEdit={() => console.log("edit clicked")}
          onDelete={() => console.log("delete clicked")}
        />
      </div>
    </div>
  );
}
