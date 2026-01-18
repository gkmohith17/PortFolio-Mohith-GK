import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "Weather AI Agent",
      description:
        "An AI-powered virtual assistant that provides real-time weather updates, forecasts, and personalized recommendations based on user preferences.",
      technologies: ["Python", "Flask", "Gemini API","Weaviate VectorDatabase",],
      githubUrl: "https://github.com/gkmohith17?page=1&tab=repositories",
    },
    {
      title: "Online Therapist",
      description:
        "A software trained with various therapy methods to provide support and guidance to users seeking mental health assistance.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/gkmohith17/Online-Therapist",
    },
    {
      title: "RAG Based Sentimental Analysis",
      description:
        "A tool that utilizes Retrieval-Augmented Generation (RAG) techniques to analyze and interpret sentiments from large datasets, providing insights for businesses and researchers.",
      technologies: ["Python", "Langchain", "Hugging Face API", "Pandas"],
      githubUrl: "https://github.com/gkmohith17/RAG-Sentimental-Analysis",
    },
    {
      title: "Complaint Managment Website",
      description:
        "A web application designed to streamline the process of lodging, tracking, and managing complaints for government, enhancing customer service and response times.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/gkmohith17/Complaint-Managment-Website",
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
                {/* <Button
                  variant="default"
                  size="sm"
                  asChild
                  className="group/btn flex-1 hover:scale-105 transition-transform"
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-45 transition-transform" />
                    Live Demo
                  </a>
                </Button> */}
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
