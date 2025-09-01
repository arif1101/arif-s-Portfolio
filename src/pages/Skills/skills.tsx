import TechCard from "@/components/custom/TechCard";
import TechSphere from "@/components/custom/TechSphere";
import { techData } from "@/tech";

export default function skills() {
  return (
    <div>
      <TechSphere/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {techData.map((tech) => (
          <TechCard key={tech.id} tech={tech} />
        ))}
      </div>
    </div>
  )
}
