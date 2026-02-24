import React from "react";
import CurrencyDropdown from "./shared/CurrencyDropdown";

export default function FilterModal({ isOpen, onClose, children, showPrice = true }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 z-50 flex justify-center items-center overflow-y-auto py-4 px-2">
      <div className="bg-white rounded-md shadow-lg w-[95%] max-w-3xl max-h-[90vh] flex flex-col relative my-auto">
        <div className="flex items-center justify-between bg-secondary px-4 lg:px-8 py-3 flex-shrink-0">
          <h2 className="font-semibold text-base">Filters</h2>
          <button
            onClick={onClose}
            className="text-red-500 text-xl cursor-pointer"
          >
            X
          </button>
        </div>
        <div className="px-4 lg:px-8 py-4 overflow-y-auto flex-1 min-h-0">
          {showPrice && (
            <div className="flex items-center gap-5 mb-4">
              <p className="text-lg font-semibold">Price</p>
              <CurrencyDropdown />
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
