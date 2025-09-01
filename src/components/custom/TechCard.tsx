import type { Tech } from "@/tech";


type Props = {
  tech: Tech;
};

export default function TechCard({ tech }: Props) {
  const Icon = tech.icon; // convert to JSX element here

  return (
    <div className="bg-[#0f172a] p-5 rounded-xl shadow-md hover:shadow-lg transition">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-6 h-6 text-purple-400" />
        <h3 className="text-lg font-semibold text-white">{tech.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {tech.tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-full text-sm text-gray-300 bg-gray-800 border border-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
