
import EducationCard from "@/components/custom/EducationCard";
import { Book, Laptop } from "lucide-react";

export default function Education() {
  return (
    <section className="py-22">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-cyan-400">Educational Journey</h2>
        <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-[18px]">
          My Educational Journey Has Been Transformative, Equipping Me With The Expertise
          To Excel In My Field.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mx-auto">
        <EducationCard
          icon={<Book className="w-6 h-6 text-cyan-400" />}
          title="Higher Secondary Certificate (HSC)"
          institute="Rajgang Degree College, Jessore"
          year="2020"
          description="Completed Higher Secondary Certificate (HSC) in Science, building a solid foundation in Physics, Chemistry, and Mathematics while honing analytical and problem-solving abilities."
          gpa="3.67 (Out Of 5)"
          subject="Science"
          skills={["Mathematics", "Physics", "Chemistry", "Biology"]}
        />

        <EducationCard
          icon={<Laptop className="w-6 h-6 text-purple-400" />}
          title="B.Sc. in Computer Science & Engineering"
          institute="University of Asia Pacific (UAP)"
          year="2020-2024"
          description="Acquired Foundational Knowledge In Computer Science, Programming Languages, And Software Development Principles."
          gpa="3.37 (Out Of 4)"
          subject="Computer Science"
          skills={["Algorithm","Operating System","Networking", "Web Development", "Data Structure", "Database Management Systems"]}
        />
      </div>
    </section>
  );
}
