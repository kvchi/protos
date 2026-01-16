import { useState } from "react";
import BusinessInfoHeader from "../../components/business/BusinessInfoHeader";
import BusinessCard, { ActionButton } from "../../components/business/BusinessCard";
import { businessData } from "../../data/businessInfoData";

import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { HiOutlineEye } from "react-icons/hi2";
import BusinessRatingsDetails from "../../components/business/BusinessRatingsDetails";

export default function BusinessRatings() {
  const [filterBy, setFilterBy] = useState("restaurant");
  const [selectBusiness, setSelectBusiness] = useState(null);

  if (selectBusiness) {
    return (
        <BusinessRatingsDetails 
         business={selectBusiness}
         onBack={() => setSelectBusiness(null)}
         />
    )
  }

  return (
    <div>
      <BusinessInfoHeader
        title="Ratings & Reviews"
        filterBy={filterBy}
        onFilterChange={setFilterBy}
      />

      <p className="text-xs text-gray-500 mt-2">Date: 24-07-2024</p>

      <div className="mt-6 space-y-3 sm:space-y-4">
        {businessData.map((business) => (
          <BusinessCard
            key={business.id}
            image={business.image}
            name={business.name}
            description={business.description}
            location={business.location}
            onImageClick={() => setSelectBusiness(business)}
          >
            <ActionButton
                            icon={<FaRegStar size={14} />}
                            label="Rating"
                            text="text-primary"
                          />
                          <ActionButton
                            icon={<FaRegMessage size={14} />}
                            label="Comments(100)"
                            text="text-green"
                          />
                          <ActionButton
                            icon={<HiOutlineEye size={14} />}
                            label="Views"
                            text="text-accent"
                          />
                          <ActionButton
                            icon={<FaRegHeart size={14} />}
                            label="Likes (1000)"
                            text="text-tetiary"
                          />
          </BusinessCard>
        ))}
      </div>
    </div>
  );
}
