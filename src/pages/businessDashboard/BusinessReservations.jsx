import { useState } from "react";
import ReservationHeader from "../../components/business/ReservationHeader";
import EmptyReservationsState from "../../components/business/EmptyReservationsState";
import ReservationCard from "../../components/business/ReservationCard";
import { reservationsData } from "../../data/reservationsData";

export default function BusinessReservations() {
  const [sortBy, setSortBy] = useState("date_added");

  return (
    <div className="px-4 py-6">
      <ReservationHeader
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {reservationsData.length === 0 ? (
        <EmptyReservationsState />
      ) : (
        <div className="mt-6 space-y-4">
          {reservationsData.map((reservation) => (
            <ReservationCard
              key={reservation.id}
              customerName={reservation.customerName}
              message={reservation.message}
              onContact={() =>
                console.log("Contact", reservation.customerName)
              }
              onCancel={() =>
                console.log("Cancel reservation", reservation.id)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
