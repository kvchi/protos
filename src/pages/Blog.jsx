import React,{ useState,useEffect} from "react";
import {  woman1 } from "../assets/images";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { getBlogs } from "../api/blog.service";

export default function Blog() {
    const categories = [
    "Restaurant",
    "Grills",
    "Sushi",
    "Japanese",
    "Breakfast & brunch",
    "Vegetable Salad",
  ];

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const data = await getBlogs();
        
        // 1. Log the data to see what the server is actually sending
        console.log("API Response:", data);

        // 2. Use optional chaining (?.) and provide a fallback empty array
        // This prevents the "cannot read results of undefined" error
        const blogPosts = data?.results || data || [];
        
        setPosts(blogPosts);
      } catch (err) {
        setError("Failed to fetch blogs. Please try again later.");
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <main className="px-6 md:px-10 lg:px-30 bg-gray-100">
      <h1 className="text-2xl md:text-6xl font-semibold text-accent text-center py-12">
        Protos<span className="text-primary">Business Blog</span>
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
          <button className="bg-primary p-2 rounded-lg text-white text-xl">
            Read more
          </button>
        </div>
        <div>
          <img src={woman1} alt="" className="w-full object-cover" />
        </div>
      </div>
      <div className="mb-8">
         <h2 className="text-3xl font-semibold text-primary">Recent blogs</h2>
         {loading && (
          <p className="text-center text-gray-500 py-10"> Loading blogs...</p>
         )}
          {error && (
          <p className="text-center text-red-500 py-10">{error}</p>
         )}
         {!loading && !error && (
          <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, i) => (
                  <BlogCard key={post.id ?? i} post={post} />
                ))}
              </div>
          </div>
         )}
      </div>
      <section className="flex flex-col justify-center items-center ">
            <h1 className="text-2xl font-semibold text-center text-primary underline-offset-5 underline">Blog news</h1>
            <div className="flex flex-wrap gap-3 my-10 px-6">
      {categories.map((cat, i) => (
        <span
          key={i}
          className="px-4 py-2 border border-primary text-primary rounded-lg text-sm font-medium cursor-pointer hover:bg-primary hover:text-white transition"
        >
          {cat}
        </span>
      ))}
    </div>
      </section>
    </main>
  );
}

function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 p-4">
      <img
        src={post.blog_picture}
        alt={post.blog_name}
        className="object-cover w-full h-[200px] rounded-xl"
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg text-primary">{post.blog_name}</h2>
        <span className="flex justify-end items-center gap-1 mt-[-5px]">
          <FaClock className="text-accent" /> 5 mins
        </span>
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">{post.blog_content}</p>
        <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <FaCalendarAlt className="text-orange-500" />
            {new Date(post.blog_date).toLocaleDateString()}
          </span>
          <button className="mt-4 bg-primary text-white text-sm p-2 rounded-md hover:bg-blue-600 transition">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}
