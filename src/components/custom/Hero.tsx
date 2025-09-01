import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";

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
    <section className="relative flex items-center justify-between lg:gap-8 py-[64px] ">
      {/* Left Side */}
      <div className="flex flex-col gap-6 z-10">
        {/* Floating badges */}
        {/* <motion.div
          className="absolute top-10 left-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <span className="px-4 py-2 rounded-full bg-slate-900 text-white text-sm shadow-lg">
            Welcome to my universe
          </span>
        </motion.div> */}

        <motion.div
          className="absolute top-32 left-32"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <span className="px-4 py-2 rounded-full bg-purple-700 text-white text-sm shadow-md">
            UI Magic
          </span>
        </motion.div>

        <motion.div
          className="absolute top-56 left-100"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          <span className="px-4 py-2 rounded-full bg-blue-700 text-white text-sm shadow-md">
            Clean Code
          </span>
        </motion.div>

        <motion.div
          className="absolute top-110 left-100"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        >
          <span className="px-4 py-2 rounded-full bg-yellow-600 text-black text-sm shadow-md">
            Innovation
          </span>
        </motion.div>

        {/* Hero Text */}
        <div className="mb-12">
            <div className="bg-gray-900 px-6 py-2.5 rounded-full backdrop-blur-md flex items-center gap-2 font-bold max-w-[225px] mb-12">
                <div className="w-2 h-2 bg-blue-400 animate-pulse rounded-full">
                </div>
                <h1 className="">Welcome to universe</h1>

            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-12">
            Hello 👋 <br />
            I'm <span className="text-teal-400">Mohi Uddin</span>
            </h1>
            <div className="bg-gray-900  border border-blue-400 rounded-full max-w-80  py-2 text-center mb-12">
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
        <div className="flex gap-4">
          <Button className="bg-teal-500 text-white hover:bg-teal-600">Learn More</Button>
          <Button variant="outline" className="text-white border-gray-600">Free Consultation</Button>
        </div>
      </div>

      {/* Right Side – Code Box */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="hidden lg:block bg-slate-900 rounded-xl p-6 text-sm font-mono text-gray-300 shadow-xl border border-slate-700"
      >
        <pre>
{`const profile = {
  name: "Mohi Uddin",
  title: "Full-Stack Developer | UI/UX Enthusiast | Problem Solver",
  skills: [
    "React", "NextJS", "Redux", "Tailwind CSS", "TypeScript",
    "MongoDB", "NodeJS", "Express", "Firebase", "Framer Motion"
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  yearsOfExperience: 2,
  hireable: function() {
    return (
      this.hardWorker &&
      this.quickLearner &&
      this.problemSolver &&
      this.yearsOfExperience >= 2
    );
  }
};`}
        </pre>
      </motion.div>
    </section>
  )
}
