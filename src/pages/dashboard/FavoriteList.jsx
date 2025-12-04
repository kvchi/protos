import RecentActivityCard from "../../components/dashboard/RecentActivityCard";
import PrimaryButton from "../../components/shared/PrimaryButton";
import PlaceOrder from "../../components/PlaceOrder"
import { useState } from "react";

export default function FavoritesList({ favorites, setFavorites }) {
  const [isAddFolderOpen, setIsAddFolderOpen] = useState(false);
  const [folderName, setFolderName] = useState("");

  const handleAddFolder = () => {
    console.log("New folder:", folderName);

    // You can push to your folders list here
    setFolderName("");
    setIsAddFolderOpen(false);
  };

  // if (favorites.length === 0) {
  //   return (
  //     <div className="pt-4 text-center mt-20">
  //       <p className="text-lg font-semibold mb-4">No Favorite added yet</p>
  //       <PrimaryButton type="submit" className="mt-6 flex items-center mx-auto">
  //         Add Favorites
  //       </PrimaryButton>
  //     </div>
  //   );
  // }

  return (
    <div className="pt-4">
      <h2 className="text-2xl text-primary font-bold mt-4">Favorites</h2>
      <p className="text-gray-500 mt-1">
        Your selected business that you liked and prefer
      </p>

      <div className="flex items-center gap-6 mt-6 flex-wrap">
        <div className="flex items-center gap-2">
          <p className="font-semibold">Sort by:</p>
          <select className="border px-3 py-1 rounded text-gray-700 outline-none">
            <option>Date added</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <p className="font-semibold">Added Folders:</p>
          <select className="border px-3 py-1 rounded text-gray-700 outline-none">
            <option>Restaurants</option>
          </select>
        </div>

         <button
          onClick={() => setIsAddFolderOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded-md cursor-pointer"
        >
          + Add New Folder
        </button>
      </div>

      <div className="mt-8 space-y-6">
        {favorites.map((item, index) => (
          <RecentActivityCard 
            mode="favorite"
            image={item.image}
            title={item.title}
            description={item.description}
            location={item.location}
            onAddNote={() => console.log("Add note")}
            onRemove={() => {
              const updated = favorites.filter((_, i) => i !== index);
              setFavorites(updated);
            }}
            onViewMap={() => console.log("View map")}
          />
        ))}
      </div>
      <PlaceOrder isOpen={isAddFolderOpen} onClose={() => setIsAddFolderOpen(false)}>
        
        <label className="text-sm mb-1 block">Folder Name</label>
        <input
          className="w-full border rounded-lg p-2 text-sm"
          placeholder="Enter folder name"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
        />

        <div className="flex justify-center gap-2 mt-4">
          <button
            onClick={() => setIsAddFolderOpen(false)}
            className="px-4 py-2 border rounded-lg text-sm"
          >
            Cancel
          </button>

          <button
            onClick={handleAddFolder}
            className="px-4 py-2 bg-primary text-white rounded-lg text-sm"
          >
            Add Folder
          </button>
        </div>
      </PlaceOrder>
    </div>
  );
}
