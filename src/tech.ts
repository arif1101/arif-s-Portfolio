import { Layout, Code, Database, Smartphone, Cloud, Settings, type LucideIcon } from "lucide-react";
import { SiFigma, SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiExpo, SiFlutter, SiSwift, SiAmazon, SiDocker, SiKubernetes } from "react-icons/si";

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
    icon: Layout,
    title: "UI/UX Design",
    tags: [
      { label: "Figma", icon: SiFigma },
      { label: "Responsive Design", icon: Layout }, // placeholder
      { label: "Wireframing", icon: Layout },
      { label: "Prototyping", icon: Layout },
    ],
  },
  {
    id: 2,
    icon: Code,
    title: "Frontend Development",
    tags: [
      { label: "React", icon: SiReact },
      { label: "Next.js", icon: SiNextdotjs },
      { label: "TailwindCSS", icon: SiTailwindcss },
      { label: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    id: 3,
    icon: Database,
    title: "Backend Development",
    tags: [
      { label: "Node.js", icon: SiNodedotjs },
      { label: "Express", icon: SiExpress },
      { label: "PostgreSQL", icon: SiPostgresql },
      { label: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    id: 4,
    icon: Smartphone,
    title: "Mobile Development",
    tags: [
      { label: "React Native", icon: SiReact },
      { label: "Expo", icon: SiExpo },
      { label: "Flutter", icon: SiFlutter },
      { label: "Swift", icon: SiSwift },
    ],
  },
  {
    id: 5,
    icon: Cloud,
    title: "Cloud & DevOps",
    tags: [
      { label: "AWS", icon: SiAmazon },
      { label: "Docker", icon: SiDocker },
      { label: "Kubernetes", icon: SiKubernetes },
      { label: "CI/CD", icon: Cloud }, // placeholder
    ],
  },
  {
    id: 6,
    icon: Settings,
    title: "Software Engineering",
    tags: [
      { label: "OOP", icon: Settings },
      { label: "Design Patterns", icon: Settings },
      { label: "Testing", icon: Settings },
      { label: "Agile", icon: Settings },
    ],
  },
];


