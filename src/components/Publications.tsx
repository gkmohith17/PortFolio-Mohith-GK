import { BookOpen, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Publications = () => {
  const { ref, isVisible } = useScrollAnimation();

  const publications = [
    {
      title: "Comparative Analysis of Object Detection Models for Peacock Detection: Evaluating Their Performance and Key Points",
      journal: "Research Journal",
      year: "2025",
      description:
        "This paper presents a comparative analysis of various object detection models applied to peacock detection, highlighting their performance metrics and key features.",
      url: "https://rspsciencehub.com/index.php/journal/article/view/973",
    },
    {
      title: "Visualization of DDoS Attack using Python Libraries",
      journal: "IEEE Xplore",
      year: "2024",
      description:
        "This study explores the visualization techniques for Distributed Denial of Service (DDoS) attacks using Python libraries, providing insights into attack patterns and mitigation strategies.",
      url: "https://ieeexplore.ieee.org/document/10545204",
    },
    {
      title: "Real-time Visualization and Classification of DDoS Attack using Supervised Learning Algorithms",
      journal: "European Union Digital Library",
      year: "2023",
      description:
        "Best practices and patterns for using TypeScript in enterprise-level applications.",
      url: "https://eudl.eu/doi/10.4108/eai.23-11-2023.2343234",
    },
  ];

  return (
    <section id="publications" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-transparent to-accent/5" />
      
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <h2
          className={`text-5xl md:text-6xl font-bold mb-16 gradient-text text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 rotate-0" : "opacity-0 rotate-6"
          }`}
        >
          Publications
        </h2>
        <div className="max-w-5xl mx-auto space-y-8">
          {publications.map((publication, index) => (
            <div
              key={index}
              className={`bg-card/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-border/50 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-500 group ${
                isVisible ? "animate-rotate-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <BookOpen className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div className="absolute inset-0 bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {publication.title}
                    </h3>
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  </div>
                  <p className="text-primary font-medium mb-3 text-lg">
                    {publication.journal} • {publication.year}
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{publication.description}</p>
                  <Button variant="outline" size="sm" asChild className="group/btn hover:scale-105 transition-transform">
                    <a href={publication.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-45 transition-transform" />
                      Read Publication
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
