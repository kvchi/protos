import { useState } from "react";
import PlaceOrder from "./PlaceOrder";

export default function AddFolderModal({ isOpen, onClose, onAdd }) {
  const [name, setName] = useState("");

  const handleAdd = () => {
    onAdd(name);
    setName("");
    onClose();
  };

  return (
    <PlaceOrder isOpen={isOpen} onClose={onClose}>
      <h2 className="text-lg font-semibold mb-4">Add a New Folder</h2>

      <label className="text-sm mb-1 block">Folder Name</label>
      <input
        className="w-full border rounded-lg p-2 text-sm"
        placeholder="Enter folder name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={onClose}
          className="px-4 py-2 border rounded-lg text-sm"
        >
          Cancel
        </button>

        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-primary text-white rounded-lg text-sm"
        >
          Add Folder
        </button>
      </div>
    </PlaceOrder>
  );
}
