import { Layout, Code, Database, Smartphone, Cloud, Settings, type LucideIcon } from "lucide-react";

export type Tech = {
  id: number;
  icon: LucideIcon; // store icon component type, not JSX
  title: string;
  tags: string[];
};

export const techData: Tech[] = [
  {
    id: 1,
    icon: Layout,
    title: "UI/UX Design",
    tags: ["Figma", "Responsive Design", "Wireframing", "Prototyping"],
  },
  {
    id: 2,
    icon: Code,
    title: "Frontend Development",
    tags: ["React", "Next.js", "TailwindCSS", "TypeScript"],
  },
  {
    id: 3,
    icon: Database,
    title: "Backend Development",
    tags: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
  },
  {
    id: 4,
    icon: Smartphone,
    title: "Mobile Development",
    tags: ["React Native", "Expo", "Flutter", "Swift"],
  },
  {
    id: 5,
    icon: Cloud,
    title: "Cloud & DevOps",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    id: 6,
    icon: Settings,
    title: "Software Engineering",
    tags: ["OOP", "Design Patterns", "Testing", "Agile"],
  },
];
