import { useState } from "react";
import { Plus } from "lucide-react";
import { FiEdit } from "react-icons/fi";
import { HiOutlineEye } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";
import { RiRocket2Line } from "react-icons/ri";

import BusinessInfoHeader from "../../components/business/BusinessInfoHeader";
import BusinessCard, {
  ActionButton,
} from "../../components/business/BusinessCard";
import EditListings from "../../components/business/edit/EditListings";
import { businessData } from "../../data/businessInfoData";

export default function BusinessListing() {
  const [editingListing, setEditListing] = useState(null);
  const [filterBy, setFilterBy] = useState("restaurant");

  const listings = businessData; 

  if (editingListing) {
    return (
      <div className="sm:px-4 md:px-6 py-4">
        <EditListings
          business={editingListing}
          onBack={() => setEditListing(null)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] mt-10">
     
      <BusinessInfoHeader
        title="Your Listing"
        filterBy={filterBy}
        onFilterChange={setFilterBy}
        onAddBusiness={() => console.log("Add listing")}
        addButtonText="Add new listing"
      />


      {listings.length > 0 && (
        <p className="text-xs text-gray-500 mb-4">
          Date: 24-07-2024
        </p>
      )}

      {listings.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center gap-4 pt-20">
          <p className="text-primary font-medium">
            No listing found
          </p>

          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90">
            <Plus size={14} />
            Add listing
          </button>
        </div>
      ) : (
      
        <div className="space-y-3 sm:space-y-4">
          {listings.map((business) => (
            <BusinessCard
              key={business.id}
              image={business.image}
              name={business.name}
              description={business.description}
              location={business.location}
              onClick={() => setEditListing(business)}


            >
              <ActionButton
                icon={<FiEdit size={14} />}
                label="Edit listings"
                text="text-primary"
                onClick={() => setEditListing(business)}
              />

              <ActionButton
                icon={<RiRocket2Line size={14} />}
                label="Promote"
                text="text-green"
              />

              <ActionButton
                icon={<HiOutlineEye size={14} />}
                label="View listing"
                text="text-accent"
              />

              <ActionButton
                icon={<MdDeleteOutline size={14} />}
                label="Delete"
                text="text-tetiary"
              />
            </BusinessCard>
          ))}
        </div>
      )}
    </div>
  );
}
