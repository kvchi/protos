import React, { useState } from "react";
import Filtered from "../components/Filtered";
import Search from "../components/Seach";

export default function SearchResult() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <main className="w-full overflow-x-hidden">
      <div className="flex items-start">
        <Filtered
          isOpen={isFilterOpen}
          onOpen={() => setIsFilterOpen(true)}
          onClose={() => setIsFilterOpen(false)}
        />
        <Search />
      </div>
    </main>
  );
}
