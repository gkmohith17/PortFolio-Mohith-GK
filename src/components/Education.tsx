import Timeline from "./Timeline";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();

  const education = [
    {
      title: "Master of Science in Computer Science",
      organization: "University Name",
      period: "2018 - 2020",
      description:
        "Specialized in Software Engineering and Artificial Intelligence. Completed thesis on machine learning applications in web development.",
    },
    {
      title: "Bachelor of Technology in Computer Science",
      organization: "College Name",
      period: "2014 - 2018",
      description:
        "Graduated with honors. Strong foundation in algorithms, data structures, and software development principles.",
    },
  ];

  return (
    <section id="education" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <h2
          className={`text-5xl md:text-6xl font-bold mb-16 gradient-text text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 rotate-0" : "opacity-0 -rotate-3"
          }`}
        >
          Education
        </h2>
        <div className="max-w-4xl mx-auto">
          <Timeline items={education} type="education" isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default Education;
