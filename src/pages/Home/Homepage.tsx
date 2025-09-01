import AboutSection from "@/components/custom/AboutSection";
import Hero from "@/components/custom/Hero";

export default function Homepage() {
  return (
    <div className="px-4 md:px-0">
      <Hero/>
      <AboutSection/>
    </div>
  )
}
