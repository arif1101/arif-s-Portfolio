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
            Hello! I'm <span className="text-teal-400 font-semibold">Mohi Uddin</span>, 
            a passionate JavaScript developer specializing in creating innovative web solutions 
            and user-friendly interfaces. <span className="text-purple-400">Using React & Next.js Framework</span>, 
            I'm dedicated to simplifying development workflows.
          </p>

          <p className="text-gray-300 leading-relaxed">
            My focus is on making web development faster, easier, and accessible to all developers. 
            Currently, I'm expanding into backend development to grow as a full-stack developer 
            and create seamless, secure web applications.
          </p>

          {/* Quote */}
          <blockquote className="border-l-4 border-teal-400 pl-4 italic text-gray-400">
            I'm a lifelong learner and a dedicated supporter of the developer community, committed 
            to creating new and effective tools and ideas to empower developers. As the creator of 
            the Frontend Developer Squad at <span className="text-blue-400">app.daily.dev</span>, I am 
            championing new technologies to help developers build better and more efficient 
            applications. I share this knowledge and experience with my community, so that we can 
            all move forward together.
          </blockquote>

          <span className="text-sm text-gray-400">
            — Mohi Uddin, Creator of the Frontend Developer Squad at{" "}
            <a href="https://app.daily.dev" target="_blank" className="text-blue-400 underline">
              app.daily.dev
            </a>
          </span>
        </motion.div>
      </div>
    </section>
  )
}
