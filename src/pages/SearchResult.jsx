import React from "react";
import Filtered from "../components/Filtered";
import Search from "../components/Seach";

export default function SearchResult() {
  return (
    <main>
      <div className="flex items-start">
        <Filtered />
        <Search />
      </div>
    </main>
  );
}
