import { Calendar, School, Award } from "lucide-react";

type Props = {
  icon: React.ReactNode;
  title: string;
  institute: string;
  year: string;
  description: string;
  gpa: string;
  subject: string;
  skills: string[];
};

export default function EducationCard({
  icon,
  title,
  institute,
  year,
  description,
  gpa,
  subject,
  skills,
}: Props) {
  return (
    <div className="bg-[#0f172a] p-6 rounded-xl shadow-md border border-gray-800 hover:shadow-lg transition">
      {/* Top Part */}
      <div className="mb-4 space-y-6">
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-[18px] mb-1">
          <School className="w-4 h-4" />
          <span>{institute}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-[16px]">
          <Calendar className="w-4 h-4" />
          <span>{year}</span>
        </div>
        <p className="text-gray-300 italic mt-3 text-[14px]">{description}</p>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 mb-4" />

      {/* Bottom Part */}
      <div className="flex flex-col text-[14px] md:justify-between gap-4">
        {/* Top */}
        <div className="">
          <h4 className="flex items-center gap-2 text-yellow-400 font-semibold mb-4">
            <Award className="w-4 h-4" /> Key Achievements
          </h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-gray-800 text-teal-400 border border-gray-700">
              GPA: {gpa}
            </span>
            <span className="px-3 py-1 rounded-full bg-gray-800 text-green-400 border border-gray-700">
              Subject: {subject}
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
