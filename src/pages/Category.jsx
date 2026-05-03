import React, { useState, useEffect } from "react";
import Embla from "../components/Embla2";
import CatCard from "../components/CatCard";
import { getCategories } from "../api/categories.service";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getCategories();
        
        setCategories(data.results);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return (
    <main>
      <div className="w-full relative mb-20">
        <Embla />
        <div className="px-28 pt-12">
          <h2 className="text-primary font-semibold text-2xl">Categories</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 px-4 md:px-28 pt-4 w-full gap-4">
          {loading ? (
            <p className="col-span-4 text-center text-gray-500">
              Loading categories...
            </p>
          ) : (
            categories.map((cate, index) => {
              const columns = 4;
              const row = Math.floor(index / columns);
              const col = index % columns;

              const isEvenRow = row % 2 === 0;
              const color = (isEvenRow ? col % 2 === 0 : col % 2 !== 0)
                ? "blue"
                : "yellow";

              return (
                <CatCard
                  key={index}
                  image={cate.category_picture}
                  title={cate.name}
                  color={color}
                />
              );
            })
          )}
        </div>
      </div>
    </main>
  );
}
