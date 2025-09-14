import ProjectCard from "@/components/custom/ProjectCard";
import { projects } from "@/data/projects";


// const projects = [
//   {
//     id: 1,
//     title: "FashionFusing built with React and Tailwind CSS",
//     description:
//       "FashionFusing is a fashion e-commerce website built with React and Tailwind CSS. It offers a seamless shopping experience with a wide range of clothing and accessories.",
//     image: "/images/project1.png",
//     codeLink: "https://github.com/yourrepo",
//     liveLink: "https://yourproject.com",
//   },
//   {
//     id: 2,
//     title: "Another Cool Project",
//     description: "This project shows how awesome animations can be done.",
//     image: "/images/project2.png",
//     codeLink: "https://github.com/yourrepo",
//     liveLink: "https://yourproject.com",
//   },
// ];

export default function Projects() {
  return (
    <div className="relative w-full px-4">
      <h1 className="text-center md:hidden text-[32px] text-cyan-400 font-bold ">Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
