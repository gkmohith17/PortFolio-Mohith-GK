import Timeline from "./Timeline";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      title: "Software Engineer Intern",
      organization: "CISCO Systems",
      period: "Jan 2026 - Present",
      description:
        "Working on enhancing network security features and optimizing performance for enterprise solutions. Gained hands-on experience with cutting-edge technologies in a collaborative environment.",
    },
    {
      title: "AI Developer Intern",
      organization: "Supervaisor AI",
      period: "Apr 2025 - May 2025",
      description:
        "Developed AI models to improve data analysis and predictive capabilities. Collaborated with a team of engineers to integrate AI solutions into existing platforms.",
    },
    {
      title: "Artificial Intelligence Intern",
      organization: "Arkham Archives",
      period: "Oct 2024 - Mar 2025",
      description:
        "Assisted in the development of AI algorithms for data classification and retrieval. Gained experience in machine learning frameworks and contributed to research projects.",
    },
  ];

  return (
    <section id="experience" className="py-32 bg-card/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-accent/5 to-transparent" />
      
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <h2
          className={`text-5xl md:text-6xl font-bold mb-16 gradient-text text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 rotate-0" : "opacity-0 rotate-3"
          }`}
        >
          Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          <Timeline items={experiences} type="experience" isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
