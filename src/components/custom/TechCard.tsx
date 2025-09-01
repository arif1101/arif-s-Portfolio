import type { Tech } from "@/tech";


type Props = {
  tech: Tech;
};

export default function TechCard({ tech }: Props) {
  const Icon = tech.icon; // convert to JSX element here

  return (
    <div className="bg-[#0f172a] p-6 h-[246px] rounded-xl transition-all duration-300 hover:scale-105 shadow-md border hover:shadow-xl hover:shadow-blue-500/20 overflow-hidden">
      {/* Main section */}
      <div className="flex items-center gap-4 mb-3 text-2xl">
        <div className="border p-3 rounded-xl">
          <Icon className="w-8 h-8 text-purple-400" />
        </div>
        <h3 className="font-semibold text-white">{tech.title}</h3>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tech.tags.map((tag, i) => {
          const TagIcon = tag.icon;
          return (
            <span
              key={i}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d1324] border border-white/10 cursor-pointer hover:scale-110 duration-200"
            >
              <TagIcon className="w-4 h-4 text-cyan-400 cursor-pointer" />
              <span className="text-white font-semibold text-[12px]">{tag.label}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
