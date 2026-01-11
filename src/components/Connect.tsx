import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Connect = () => {
  const { ref, isVisible } = useScrollAnimation();

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/gkmohith17",
      color: "hover:text-foreground hover:border-foreground",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/mohith-g-k-47216a256",
      color: "hover:text-blue-500 hover:border-blue-500",
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://www.instagram.com/_gkmohith/",
      color: "hover:text-pink-400 hover:border-pink-400",
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:gkmohith17@gmail.com",
      color: "hover:text-red-400 hover:border-red-400",
    },
  ];

  return (
    <section id="connect" className="py-32 bg-card/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent" />
      
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-5xl md:text-6xl font-bold mb-8 gradient-text transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            Let's Connect
          </h2>
          <p
            className={`text-xl md:text-2xl text-muted-foreground mb-16 leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  asChild
                  className={`group ${link.color} transition-all duration-300 hover:scale-110 border-2 ${
                    isVisible ? "animate-scale-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <Icon className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    {link.label}
                  </a>
                </Button>
              );
            })}
          </div>

          <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <p className="text-muted-foreground mb-6 text-lg">Or send me a direct message:</p>
            <Button size="lg" asChild className="group hover:scale-110 transition-all duration-300 text-lg px-8 py-6">
              <a href="mailto:gkmohith17@gmail.com">
                <Mail className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                gkmohith17@gmail.com
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
