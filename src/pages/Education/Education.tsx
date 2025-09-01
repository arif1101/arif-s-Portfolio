
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
          title="Secondary School Certificate (SSC)"
          institute="Feni Alia Kamil - M.A Madrasah"
          year="2020"
          description="Acquired A Strong Foundation In Science And Mathematics, Fostering Analytical And Problem-Solving Skills."
          gpa="4.0 (Out Of 5)"
          subject="Science"
          skills={["Mathematics", "Physics", "Chemistry", "Biology"]}
        />

        <EducationCard
          icon={<Laptop className="w-6 h-6 text-purple-400" />}
          title="Diploma In Computer Science (CSE)"
          institute="Institute Of Computer Science And Technology (ICST)"
          year="2020-2024"
          description="Acquired Foundational Knowledge In Computer Science, Programming Languages, And Software Development Principles."
          gpa="3.47 (Out Of 4)"
          subject="Computer Science"
          skills={["Web Development", "Data Structure", "Database Management Systems"]}
        />
      </div>
    </section>
  );
}
