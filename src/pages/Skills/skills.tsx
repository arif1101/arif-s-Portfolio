import TechCard from "@/components/custom/TechCard";
import TechSphere from "@/components/custom/TechSphere";
import { techData } from "@/tech";

export default function skills() {
  return (
    <div className="px-6 md:px-0">
      <div><TechSphere/></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-6">
        <h1 className="md:hidden mx-auto text-[32px] text-blue-400 font-semibold">Projects</h1>
        {techData.map((tech) => (
          <TechCard key={tech.id} tech={tech} />
        ))}
      </div>
    </div>
  )
}
