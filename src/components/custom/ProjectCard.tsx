import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";

type ProjectCardProps = {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    codeLink: string;
    liveLink: string;
  };
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className="h-screen flex items-center justify-center sticky top-0"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#0f172a] rounded-2xl overflow-hidden shadow-xl max-w-6xl w-full">
        {/* Left Image */}
        <div className="h-[400px] md:h-auto">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-4 md:mb-6">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <div className="w-[76px] h-[1px] bg-gray-400"></div>
            </div>
            <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                </h2>
                <p className="text-gray-400 mb-6">{project.description}</p>
            </div>
            {/* divider */}

            {/* Links */}
            <div className="flex flex-col mt-auto">
                <div className="border md:mb-6"></div>
                <div className="flex gap-6">
                <a
                href={project.codeLink}
                target="_blank"
                className="flex items-center gap-2 text-purple-400 hover:underline"
                >
                <Github className="w-5 h-5" /> Code
                </a>
                <a
                href={project.liveLink}
                target="_blank"
                className="flex items-center gap-2 text-purple-400 hover:underline"
                >
                <Globe className="w-5 h-5" /> Live
                </a>
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
}
