import { blogs } from "@/data/blogs";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function Blogs() {
  return (
    <section className="py-28 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back to Home Button */}
        <Link
          to="/"
          className="inline-block mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          &larr; Back to Home
        </Link>

        <h2 className="text-4xl font-bold text-blue-400 mb-10 text-center">My Blog</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: blog.id * 0.2 }}
              className="bg-[#1a2234] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-2">{blog.title}</h3>
                <p className="text-gray-300 mb-4">{blog.description}</p>
                <p className="text-gray-400 text-sm mb-4">{blog.date}</p>
                <Link
                  to={blog.link}
                  className="text-blue-400 hover:underline font-semibold"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
