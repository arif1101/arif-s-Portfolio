import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaGitAlt, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa"

export default function TechSphere() {
  const icons = [
    <FaReact size={40} className="text-sky-400" />,
    <FaNodeJs size={40} className="text-green-500" />,
    <FaGitAlt size={40} className="text-orange-500" />,
    <FaJs size={40} className="text-yellow-400" />,
    <FaHtml5 size={40} className="text-orange-600" />,
    <FaCss3Alt size={40} className="text-blue-500" />,
  ]

  return (
    <div className="flex justify-center items-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="relative w-72 h-72"
      >
        {icons.map((icon, i) => {
          const angle = (i / icons.length) * 2 * Math.PI
          const x = Math.cos(angle) * 120 + 120
          const y = Math.sin(angle) * 120 + 120
          return (
            <div
              key={i}
              className="absolute"
              style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
            >
              {icon}
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}
