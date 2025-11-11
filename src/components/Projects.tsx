import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration, product management, and user authentication.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/mohithgk",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates and team features.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/mohithgk",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather dashboard with location-based forecasts and interactive visualizations.",
      technologies: ["React", "TypeScript", "OpenWeather API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/mohithgk",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing projects, skills, and professional experience.",
      technologies: ["React", "Tailwind CSS", "Vite"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/mohithgk",
    },
  ];

  return (
    <section id="projects" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <h2
          className={`text-5xl md:text-6xl font-bold mb-16 gradient-text text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-card/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-border/50 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-500 group ${
                isVisible ? "animate-fall-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 bg-secondary/50 backdrop-blur-sm text-secondary-foreground rounded-lg text-sm font-medium border border-border/30 hover:border-primary/50 hover:bg-secondary transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button
                  variant="default"
                  size="sm"
                  asChild
                  className="group/btn flex-1 hover:scale-105 transition-transform"
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-45 transition-transform" />
                    Live Demo
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="group/btn flex-1 hover:scale-105 transition-transform"
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
