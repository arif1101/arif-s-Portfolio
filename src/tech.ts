import { Code, Database, Settings, type LucideIcon, Cpu, Zap, Box, ListChecks, GitBranch } from "lucide-react";
import { SiHtml5, SiReact, SiCss3, SiTailwindcss, SiTypescript, SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiDaisyui, SiShadcnui, SiSqlalchemy } from "react-icons/si";

export type Tag = {
  label: string;
  icon: LucideIcon | React.ComponentType<{ className?: string }>; 
};

export type Tech = {
  id: number;
  icon: LucideIcon;
  title: string;
  tags: Tag[];   // <-- now tags are objects, not strings
};

export const techData: Tech[] = [
  {
    id: 1,
    icon: Code,
    title: "Frontend Development",
    tags: [
      { label: "Html", icon: SiHtml5 },
      { label: "CSS", icon: SiCss3 },
      { label: "DaisyUI", icon: SiDaisyui },
      { label: "ShadCN", icon: SiShadcnui },
      { label: "React", icon: SiReact },
      { label: "TailwindCSS", icon: SiTailwindcss },
      { label: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    id: 2,
    icon: Database,
    title: "Backend Development",
    tags: [
      { label: "Node.js", icon: SiNodedotjs },
      { label: "Express", icon: SiExpress },
      { label: "PostgreSQL", icon: SiPostgresql },
      { label: "SQL", icon: SiSqlalchemy },
      { label: "NoSQL", icon: SiSqlalchemy},
      { label: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    id: 3,
    icon: Settings,
    title: "Software Engineering",
    tags: [
      { label: "OOP", icon: Settings },
      { label: "Design Patterns", icon: Settings },
      { label: "Testing", icon: Settings },
      { label: "Agile", icon: Settings },
    ],
  },
{
  id: 4,
  icon: Cpu, // overall icon for Problem Solving
  title: "Problem Solving",
  tags: [
    { label: "Algorithms", icon: Zap },          // lightning = fast thinking / algorithms
    { label: "Data Structures", icon: Box },     // box = container / structure
    { label: "Logical Thinking", icon: Cpu },    // CPU = brain / logic
    { label: "Optimization", icon: ListChecks }, // checklist = improving efficiency
    { label: "Version Control", icon: GitBranch }, // optional tag
  ],
}
];


