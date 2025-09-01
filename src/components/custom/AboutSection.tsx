import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section className="relative py-20 px-6 lg:px-20 bg-[#0d0d25] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative w-80 h-96 rounded-xl overflow-hidden shadow-2xl border border-slate-700">
            <img
              src="/public/profileImage.JPG"
              alt="Mohi Uddin"
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
            Developer, Designer, <br /> Creator, Innovator
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Hello! I'm <span className="text-teal-400 font-semibold">Arif Rahman,</span>, 
            a passionate full-stack web developer specializing in building modern, efficient, and user-friendly web applications. With a strong foundation in <span className="text-purple-400"> MERN stack </span>and a keen interest in <span className="text-purple-400"> AI</span> and <span className="text-purple-400"> Machine Learning</span> , I focus on creating solutions that simplify processes and enhance user experiences. 
            I'm dedicated to simplifying development workflows.
          </p>

          <p className="text-gray-300 leading-relaxed">
            My mission is to make web development faster, more accessible, and impactful for both developers and users. I enjoy tackling challenging problems and constantly expanding my skills to grow as a versatile, full-stack engineer capable of crafting seamless, secure, and scalable applications.
          </p>

          {/* Quote */}
          <blockquote className="border-l-4 border-teal-400 pl-4 italic text-gray-400">
            I'm a lifelong learner and an active supporter of the developer community, committed to exploring and sharing the latest tools, technologies, and best practices. I use <span className="text-sky-400"><a href="https://app.daily.dev/">app.daily.dev</a></span> to stay updated on emerging trends, deepen my knowledge, and discover innovative ideas that can improve development workflows. By sharing what I learn and applying it in my projects, I aim to empower fellow developers to grow, innovate, and build better, more efficient applications—so we can all move forward together.
          </blockquote>

          <span className="text-sm text-gray-400">
            — Arifur Rahman{" "}
            <a href="https://app.daily.dev/arif84" target="_blank" className="text-blue-400 underline">
              app.daily.dev
            </a>
          </span>
        </motion.div>
      </div>
    </section>
  )
}
