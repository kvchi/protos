import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogById } from "../api/blog.service";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const data = await getBlogById(id);
        setBlog(data);
      } catch (err) {
        console.error("Failed to fetch blog:", err);
        setError("Failed to load blog post.");
      } finally {
        setLoading(false);
      }
    }
    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-lg">Loading blog post...</p>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg">{error || "Blog post not found."}</p>
      </div>
    );
  }

  return (
    <main className="px-6 md:px-20 lg:px-40 py-10 bg-gray-100 min-h-screen">
      <button
        onClick={() => navigate("/blog")}
        className="flex items-center gap-2 text-primary font-semibold mb-8 hover:underline"
      >
        <BsArrowLeft /> Back to blogs
      </button>

      <img
        src={blog.blog_picture}
        alt={blog.blog_name}
        className="w-full h-[300px] md:h-[450px] object-cover rounded-xl mb-8"
      />

      <div className="bg-white rounded-xl p-6 md:p-10 shadow-md">
        <h1 className="text-2xl md:text-4xl font-bold text-primary mb-4">
          {blog.blog_name}
        </h1>

        <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
          <span className="flex items-center gap-1">
            <FaCalendarAlt className="text-orange-500" />
            {new Date(blog.blog_date).toLocaleDateString()}
          </span>
          <span className="flex items-center gap-1">
            <FaClock className="text-accent" />
            5 mins read
          </span>
        </div>

        <div className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
          {blog.blog_content}
        </div>
      </div>
    </main>
  );
}