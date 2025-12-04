import PrimaryButton from "../../components/shared/PrimaryButton";
import RecentActivityCard from "../../components/dashboard/RecentActivityCard";

export default function Reservation({ reservations, setReservations }) {
  if (reservations.length === 0) {
    return (
      <div className="pt-4 text-center mt-20">
         <p className="text-lg font-semibold mb-4">No Reservations</p>
            <PrimaryButton type="submit" className="mt-6 flex items-center mx-auto">
              Add Reservations
            </PrimaryButton> 
      </div>
    );
  }
  return (
    <div className="px-4 md:px-10 py-6">
      <h2 className="text-2xl font-bold text-primary">Reservations</h2>
      <p className="text-gray-600 mt-1">
        Here is a list of your reservations and booked tables
      </p>

      <div className="flex items-center gap-2 mt-6">
        <p className="font-semibold">Sort by:</p>
        <select className="border px-3 py-1 rounded-md text-gray-600 outline-none">
          <option> Date visited</option>
        </select>
      </div>
      <div className="mt-8 space-y-6">
        {reservations.map((item, index) => (
          <RecentActivityCard
            key={index}
            mode="reservation"
            image={item.image}
            title={item.title}
            description={item.description}
            location={item.location}
            date={item.date}
            time={item.time}
            people={item.people}
            onDetails={() => console.log("show details:", item)}
            onCancel={() => {
              const updated = reservations.filter((_, i) => i !== index);
              setReservations(updated);
            }}
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10 gap-6">
        <button className="border px-4 py-2 rounded">{`<`}</button>
        <p className="text-gray-500">Page 1 of 1</p>
        <button className="border px-4 py-2 rounded">{`>`}</button>
      </div>
    </div>
  );
}
