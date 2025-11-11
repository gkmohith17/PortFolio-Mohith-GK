import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-32 bg-card/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-5xl md:text-6xl font-bold mb-12 gradient-text text-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            About Me
          </h2>
          <div className="space-y-6 text-lg md:text-xl">
            <p
              className={`text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
              }`}
            >
              Hello! I'm Mohith G K, a passionate developer with a keen interest in building
              innovative solutions and learning new technologies. My journey in tech has been
              driven by an insatiable curiosity and a commitment to pushing boundaries.
            </p>
            <p
              className={`text-muted-foreground leading-relaxed transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
              }`}
            >
              I specialize in full-stack development, with expertise in modern web technologies
              and a strong foundation in problem-solving. Every project is an opportunity to
              create something extraordinary and make a meaningful impact.
            </p>
            <p
              className={`text-muted-foreground leading-relaxed transition-all duration-1000 delay-600 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
              }`}
            >
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community. I believe
              in continuous learning and the power of collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
