import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react";
import ResumeButtons from "./ResumeButtons";

const phrases = [
  "Passionate MERN Stack",
  "GitHub Version Control",
  "Clean Code Practices",
  "Problem Solving",
];


export default function Hero() {


  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500); // change every 2.5s
    return () => clearInterval(interval);
  }, []);
    
    
  return (
    <section className="relative flex items-center justify-between lg:gap-8 md:py-[64px] ">
      {/* Left Side */}
      <div className="flex flex-col gap-6 z-10">
        {/* Floating badges */}
        <motion.div
          className="absolute top-32 left-32 hidden md:block"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <span className="px-4 py-2 rounded-full bg-purple-700 text-white text-sm shadow-md">
            UI Magic
          </span>
        </motion.div>

        <motion.div
          className="absolute top-56 left-100 hidden md:block"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          <span className="px-4 py-2 rounded-full bg-blue-700 text-white text-sm shadow-md">
            Clean Code
          </span>
        </motion.div>

        <motion.div
          className="absolute top-110 left-100 hidden md:block"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        >
          <span className="px-4 py-2 rounded-full bg-yellow-600 text-black text-sm shadow-md">
            Innovation
          </span>
        </motion.div>

        {/* Hero Text */}
        <div className="md:mb-12">
            <div className="bg-gray-900 px-6 py-2.5 rounded-full backdrop-blur-md flex items-center gap-2 font-bold max-w-[225px] mb-6 md:mb-12">
                <div className="w-2 h-2 bg-blue-400 animate-pulse rounded-full">
                </div>
                <h1 className="text-white">Welcome to universe</h1>

            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 md:mb-12">
            Hello 👋 <br />
            I'm <span className="text-teal-400">Arifur Rahman</span>
            </h1>
            <div className="bg-gray-900  border border-blue-400 rounded-full max-w-80  py-2 text-center mb-6 md:mb-12">
                <AnimatePresence mode="wait">
                    <motion.span
                    key={phrases[index]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-purple-600 text-2xl font-bold"
                    >
                    {phrases[index]}
                    </motion.span>
                </AnimatePresence>
            </div>
            <p className="mt-4 text-gray-400 text-lg">
            A Passionate JavaScript Developer With A Love For Creating Dynamic And Interactive Visual Websites And Web Applications.
            </p>
        </div>

        {/* Buttons */}
        <ResumeButtons/>
      </div>

      {/* Right Side – Code Box */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="hidden lg:block bg-slate-900 rounded-xl p-6 text-sm font-mono text-gray-300 shadow-xl border border-slate-700"
      >
        <pre>
          <code>
            <span className="text-blue-400">const</span> profile = {"{"}{"\n"}
            &nbsp;&nbsp;<span className="text-green-400">name</span>: <span className="text-yellow-300">"Arifur Rahman"</span>,{"\n"}
            &nbsp;&nbsp;<span className="text-green-400">title</span>: <span className="text-yellow-300">"Full-Stack Developer | UI/UX Enthusiast | Problem Solver"</span>,{"\n"}
            &nbsp;&nbsp;<span className="text-green-400">skills</span>: [{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">"React"</span>, <span className="text-yellow-300">"Redux"</span>, <span className="text-yellow-300">"Tailwind CSS"</span>, <span className="text-yellow-300">"TypeScript"</span>,{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">"MongoDB"</span>, <span className="text-yellow-300">"NodeJS"</span>, <span className="text-yellow-300">"Express"</span>, <span className="text-yellow-300">"Firebase"</span>, <span className="text-yellow-300">"Framer Motion"</span>{"\n"}
            &nbsp;&nbsp;],{"\n"}
            &nbsp;&nbsp;<span className="text-green-400">hardWorker</span>: <span className="text-pink-400">true</span>,{"\n"}
            &nbsp;&nbsp;<span className="text-green-400">quickLearner</span>: <span className="text-pink-400">true</span>,{"\n"}
            &nbsp;&nbsp;<span className="text-green-400">problemSolver</span>: <span className="text-pink-400">true</span>,{"\n"}
            &nbsp;&nbsp;<span className="text-green-400">hireable</span>: <span className="text-blue-400">function</span>() {"{"}{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">return</span> ({"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.hardWorker &amp;&amp;{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.quickLearner &amp;&amp;{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.problemSolver &amp;&amp;{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.yearsOfExperience &gt;= <span className="text-pink-400">2</span>{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;);{"\n"}
            &nbsp;&nbsp;{"}"}{"\n"}
            {"};"}
          </code>
        </pre>
      </motion.div>


    </section>
  )
}
