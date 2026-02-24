import React, { useState } from "react";
import { businessData } from "../../data/businessInfoData";
import EmptyBusinessState from "../../components/business/EmptyBusinessState";

import BusinessInfoHeader from "../../components/business/BusinessInfoHeader";
import EditBusiness from "../../components/business/edit/EditBusiness";
import BusinessCard, {
  ActionButton,
} from "../../components/business/BusinessCard";
import { FiEdit } from "react-icons/fi";
import { HiOutlineEye } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";
import { RiRocket2Line } from "react-icons/ri"

export default function BusinessInfo() {
  const [filterBy, setFilterBy] = useState("restaurant");
  const [editingBusiness, setEditingBusiness] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  if (editingBusiness) {
    return (
      <div className="sm:px-4 md:px-6 py-4">
        <EditBusiness
          business={editingBusiness}
          onBack={() => setEditingBusiness(null)}
        />
      </div>
    );
  }

  if (showAddForm) {
    return (
      <div className="sm:px-4 md:px-6 py-4">
        <EditBusiness
          business={null}
          title="Add Business"
          onBack={() => setShowAddForm(false)}
        />
      </div>
    );
  }

  return (
    <div
      className="
         sm:px-4 md:px-6 py-4 md:py-6 max-w-6xl mx-auto ">
      <BusinessInfoHeader
        filterBy={filterBy}
        onFilterChange={setFilterBy}
        onAddBusiness={() => setShowAddForm(true)}
      />

      {businessData.length === 0 ? (
        <div className="mt-10">
          <EmptyBusinessState />
        </div>
      ) : (
        <div className="mt-6 space-y-3 sm:space-y-4">
          {businessData.map((business) => (
            <BusinessCard
              key={business.id}
              image={business.image}
              name={business.name}
              description={business.description}
              location={business.location}
              onEdit={() => setEditingBusiness(business)}
            >
              <ActionButton
                icon={<FiEdit size={14} />}
                label="Edit details"
                text="text-primary"
                onClick={() => setEditingBusiness(business)}
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
