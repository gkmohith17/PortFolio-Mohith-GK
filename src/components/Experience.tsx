import Timeline from "./Timeline";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      title: "Senior Software Engineer",
      organization: "Tech Corp",
      period: "2022 - Present",
      description:
        "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and driving technical decisions.",
    },
    {
      title: "Full Stack Developer",
      organization: "Innovation Labs",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client projects using modern web technologies. Collaborated with cross-functional teams to deliver high-quality solutions.",
    },
    {
      title: "Software Developer Intern",
      organization: "StartUp Inc",
      period: "2019 - 2020",
      description:
        "Assisted in building web applications and learning industry best practices. Contributed to various frontend and backend features.",
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
