import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Connect from "@/components/Connect";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorEffect from "@/components/CursorEffect";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AnimatedBackground />
      <CursorEffect />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Education />
      <TechStack />
      <Projects />
      <Publications />
      <Connect />
      
      <footer className="bg-card/80 backdrop-blur-sm py-8 border-t border-border/50 relative z-10">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p className="text-lg">&copy; {new Date().getFullYear()} Mohith G K. All rights reserved.</p>
          <p className="text-sm mt-2 text-primary/70">Built with passion and cutting-edge technology</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
