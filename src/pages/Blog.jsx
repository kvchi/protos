import React from "react";
import { card, card2, card3, woman1 } from "../assets/images";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

export default function Blog() {
    const categories = [
    "Restaurant",
    "Grills",
    "Sushi",
    "Japanese",
    "Breakfast & brunch",
    "Vegetable Salad",
  ];

  const posts = [
    {
      title: "The secret of a successful business",
      desc: "Take your marketing skills to another level. Dr Rotex explains how to create a unique profile as a business owner to attract customers",
      time: "5 mins",
      date: "12 - 12 - 2024",
      img: card,
    },
    {
      title: "Being a good writer makes you a good marketer. Why?",
      desc: "Take your marketing skills to another level. Dr Rotex explains how to create a unique profile as a business owner to attract customers",
      time: "5 mins",
      date: "12 - 12 - 2024",
      img: card2,
    },
    {
      title: "Analyzing your business profile",
      desc: "Take your marketing skills to another level. Dr Rotex explains how to create a unique profile as a business owner to attract customers",
      time: "5 mins",
      date: "12 - 12 - 2024",
      img: card3,
    },
  ];

  return (
    <main className="px-6 md:px-10 lg:px-30 bg-gray-100">
      <h1 className="text-2xl md:text-6xl font-semibold text-amber-400 text-center py-12">
        Protos<span className="text-[#0E375F]">Business Blog</span>
      </h1>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-20 lg:gap-30 w-full mb-10">
        <div className="space-y-4 w-full lg:w-[50%]">
          <h2 className="text-lg md:text-3xl font-semibold">
            Getting started as a{" "}
            <span className="text-amber-800">Marketer</span>
          </h2>
          <p className="md:text-2xl">
            Take your marketing skills to another level. Dr Rotex 
            explains how to create a unique profile as a business owner
            to attract customers.
          </p>
          <button className="bg-[#0e375f] p-2 rounded-lg text-white text-xl">
            Read more
          </button>
        </div>
        <div>
          <img src={woman1} alt="" className="w-full object-cover" />
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-[#0E375F]">Recent blogs</h2>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 p-4"
              >
                <img
                  src={post.img}
                  alt="post.title"
                  className=" object-cover  w-full h-[200px] rounded-xl"
                />
                <div className="p-4">
                  <h2 className="font-semibold text-lg text-[#0E375F]">{post.title}</h2>
                  <span className="flex justify-end items-center gap-1 mt-[-5px]">
                    <FaClock className="text-yellow-500" /> {post.time}
                  </span>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                    {post.desc}
                  </p>
                  <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-orange-500" /> {post.date}
                    </span>
                    <button className="mt-4  bg-[#0E375F] text-white text-sm p-2 rounded-md hover:bg-blue-600 transition">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 p-4"
              >
                <img
                  src={post.img}
                  alt="post.title"
                  className=" object-cover  w-full h-[200px] rounded-xl"
                />
                <div className="p-4">
                  <h2 className="font-semibold text-lg text-[#0E375F]">{post.title}</h2>
                  <span className="flex justify-end items-center gap-1 mt-[-5px]">
                    <FaClock className="text-yellow-500" /> {post.time}
                  </span>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                    {post.desc}
                  </p>
                  <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-orange-500" /> {post.date}
                    </span>
                    <button className="mt-4  bg-[#0E375F] text-white text-sm p-2 rounded-md hover:bg-blue-600 transition">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="flex flex-col justify-center items-center ">
            <h1 className="text-2xl font-semibold text-center text-[#0E375F] underline-offset-5 underline">Blog news</h1>
            <div className="flex flex-wrap gap-3 my-10 px-6">
      {categories.map((cat, i) => (
        <span
          key={i}
          className="px-4 py-2 border border-[#0E375F] text-[#0E375F] rounded-lg text-sm font-medium cursor-pointer hover:bg-[#0E375F] hover:text-white transition"
        >
          {cat}
        </span>
      ))}
    </div>
      </section>
      
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 p-4"
              >
                <img
                  src={post.img}
                  alt="post.title"
                  className=" object-cover  w-full h-[200px] rounded-xl"
                />
                <div className="p-4">
                  <h2 className="font-semibold text-lg text-[#0E375F]">{post.title}</h2>
                  <span className="flex justify-end items-center gap-1 mt-[-5px]">
                    <FaClock className="text-yellow-500" /> {post.time}
                  </span>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                    {post.desc}
                  </p>
                  <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-orange-500" /> {post.date}
                    </span>
                    <button className="mt-4  bg-[#0E375F] text-white text-sm p-2 rounded-md hover:bg-blue-600 transition">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 p-4"
              >
                <img
                  src={post.img}
                  alt="post.title"
                  className=" object-cover  w-full h-[200px] rounded-xl"
                />
                <div className="p-4">
                  <h2 className="font-semibold text-lg text-[#0E375F]">{post.title}</h2>
                  <span className="flex justify-end items-center gap-1 mt-[-5px]">
                    <FaClock className="text-yellow-500" /> {post.time}
                  </span>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                    {post.desc}
                  </p>
                  <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-orange-500" /> {post.date}
                    </span>
                    <button className="mt-4  bg-[#0E375F] text-white text-sm p-2 rounded-md hover:bg-blue-600 transition">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      
    </main>
  );
}
