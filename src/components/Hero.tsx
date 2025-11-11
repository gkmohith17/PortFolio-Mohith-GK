import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-1500 transform ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-95"
          }`}
        >
          <div className="mb-8 relative">
            <h1 className="text-7xl md:text-9xl font-bold mb-6 relative">
              <span className="gradient-text inline-block hover:scale-105 transition-transform duration-300">
                Mohith G K
              </span>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl -z-10 animate-pulse" />
            </h1>
          </div>
          
          <p
            className={`text-2xl md:text-3xl text-muted-foreground mb-16 transition-all duration-1500 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </p>

          <button
            onClick={() => scrollToSection("about")}
            className={`group transition-all duration-1500 delay-700 inline-flex flex-col items-center gap-2 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
            aria-label="Scroll to about section"
          >
            <span className="text-primary text-sm uppercase tracking-widest">Explore</span>
            <div className="relative">
              <ArrowDown className="w-8 h-8 text-primary animate-bounce group-hover:text-accent transition-colors" />
              <div className="absolute inset-0 bg-primary/30 blur-xl animate-pulse" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
