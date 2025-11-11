import { Code2, Database, Globe, Server, Smartphone, Wrench } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TechStack = () => {
  const { ref, isVisible } = useScrollAnimation();

  const techCategories = [
    {
      icon: Code2,
      title: "Frontend",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      icon: Server,
      title: "Backend",
      technologies: ["Node.js", "Express", "Python", "Django"],
    },
    {
      icon: Database,
      title: "Database",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    },
    {
      icon: Globe,
      title: "Cloud & DevOps",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      icon: Smartphone,
      title: "Mobile",
      technologies: ["React Native", "Flutter", "iOS", "Android"],
    },
    {
      icon: Wrench,
      title: "Tools",
      technologies: ["Git", "VS Code", "Figma", "Postman"],
    },
  ];

  return (
    <section id="techstack" className="py-32 bg-card/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-primary/5" />
      
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <h2
          className={`text-5xl md:text-6xl font-bold mb-16 gradient-text text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`bg-background/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-border/50 hover:shadow-2xl hover:shadow-accent/20 hover:border-accent/50 transition-all duration-500 group ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <div className="absolute inset-0 bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-secondary/50 backdrop-blur-sm text-secondary-foreground rounded-lg text-sm font-medium border border-border/30 hover:border-accent/50 hover:bg-secondary hover:scale-105 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
