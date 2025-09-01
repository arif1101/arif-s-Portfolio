import { useParams, Link } from "react-router";
import { blogs } from "@/data/blogs";

export default function BlogDetails() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <p className="text-white text-center py-20">Invalid blog!</p>;
  }

  const blog = blogs.find(b => b.link.endsWith(slug));

  console.log(blog?.image)

  if (!blog) return <p className="text-white text-center py-20">Blog not found!</p>;

  return (
    <section className="py-6 md:py-28 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto text-white px-4">
        {/* Back to Blogs Link */}
        <Link
          to="/blogs"
          className="inline-block mb-6 text-blue-400 hover:underline"
        >
          &larr; Back to Blogs
        </Link>

        {/* Blog Header */}
        <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4">{blog.title}</h1>
        <p className="text-gray-400 mb-6">{blog.date}</p>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-lg mb-8 shadow-lg"
        />

        {/* Blog Description */}
        <p className="text-gray-300 text-base md:text-lg mb-8">{blog.description}</p>

        {/* Full Content */}
        {blog.fullContent.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-blue-400">
              {section.heading}
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}

        {/* Footer / Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Enjoyed the article?</p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white hover:opacity-90 transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
