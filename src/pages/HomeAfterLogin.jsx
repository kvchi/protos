import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Embla from "../components/Embla";
import { businessData } from "../data/businessData";
import BusinessCard from "../components/BizCard";
import { categoriesData } from "../data/categoriesData";
import CatCard from "../components/CatCard";
import { newsData } from "../data/newsData";
import NewsCard from "../components/NewsCard";

export default function HomeAfterLogin() {
  const navigate = useNavigate();
  return (
    <main>
      <div className="flex justify-center px-6 lg:px-24 py-10 w-full">
        <div className="w-full max-w-2xl">
          <SearchBar />
        </div>
      </div>
      <Embla />
      <div className="lg:px-24 lg:py-10 w-full">
        <div className="flex items-center justify-between px-4 py-6 md:px-10 md:py-10 lg:px-24 mt-6 md:mt-0 w-full">
          <h1 className="text-primary font-semibold md:text-2xl">
            Top Business near you
          </h1>
          <button
            type="button"
            onClick={() => navigate("/searchResult")}
            className="block lg:hidden bg-primary py-2 px-4 rounded-xl text-white text-[12px]"
          >
            View more
          </button>
        </div>
        <div className="flex items-center justify-between px-4  md:px-10 lg:px-24">
          <p className="text-base font-medium leading-tight ">
            We recommend these businesses based on your current location, they
            might be exactly what you need.
          </p>
          <button
            type="button"
            onClick={() => navigate("/searchResult")}
            className="hidden lg:block bg-primary py-2 px-6 rounded-xl text-white"
          >
            View more
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 px-4 md:px-8 lg:px-24 py-10 w-full gap-5">
          {businessData
            .slice(0, window.innerWidth < 1024 ? 6 : 9)
            .map((biz) => (
              <BusinessCard key={biz.id} business={biz} />
            ))}
        </div>
        <div className="flex items-center justify-between px-4 py-6 md:px-10 md:py-10 lg:px-24 mt-6 md:mt-0 w-full">
          <h1 className="text-primary font-semibold md:text-2xl">
            Top Business near you
          </h1>
          <button
            type="button"
            onClick={() => navigate("/searchResult")}
            className="block lg:hidden bg-primary py-2 px-4 rounded-xl text-white text-[12px]"
          >
            View more
          </button>
        </div>
        <div className="flex items-center justify-between px-4  md:px-10 lg:px-24">
          <p className="text-base font-medium leading-tight pt-2 ">
            There are selected based on your prefrences, recent searches and
            viewed enterprise.
          </p>
          <button
            type="button"
            onClick={() => navigate("/searchResult")}
            className="hidden lg:block bg-primary py-2 px-6 rounded-xl text-white"
          >
            View more
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 px-4 md:px-8 lg:px-24 py-10 w-full gap-5">
          {businessData
            .slice(0, window.innerWidth < 1024 ? 6 : 9)
            .map((biz) => (
              <BusinessCard key={biz.id} business={biz} />
            ))}
        </div>
        
        <div className="px-4 md:px-10 lg:px-24 py-4 w-full">
          <h2 className="text-primary font-bold text-2xl">Categories</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 px-4 md:px-10 lg:px-24 py-6">
          {categoriesData.map((cate, index) => {
            const columns = 4;
            const row = Math.floor(index / columns);
            const col = index % columns;

            const isEvenRow = row % 2 === 0;
            const color = (isEvenRow ? col % 2 === 0 : col % 2 !== 0)
              ? "blue"
              : "yellow";
            return (
              <CatCard
                key={cate.id}
                image={cate.image}
                title={cate.title}
                color={color}
              />
            );
          })}
        </div>
        <div className="px-4 md:px-10 lg:px-24 py-16">
          <h2 className="text-primary font-bold text-2xl mb-2">
            Latest News
          </h2>
          <p className="text-gray-600 mb-6">
            New and latest information of top-rated businesses.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsData.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
