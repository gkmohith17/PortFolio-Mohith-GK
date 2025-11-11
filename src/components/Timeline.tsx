import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  type: "experience" | "education";
  isVisible: boolean;
}

const Timeline = ({ items, type, isVisible }: TimelineProps) => {
  const Icon = type === "experience" ? Briefcase : GraduationCap;

  return (
    <div className="relative">
      {/* Timeline line */}
      <div
        className={`absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        }`}
        style={{ transformOrigin: "top" }}
      />

      {/* Timeline items */}
      <div className="space-y-12">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative pl-24 transition-all duration-1000 ${
              isVisible ? "animate-slide-in-right opacity-100" : "opacity-0"
            }`}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            {/* Timeline dot */}
            <div
              className={`absolute left-6 top-1 w-6 h-6 rounded-full bg-timeline-dot border-4 border-background transition-all duration-500 ${
                isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
              }`}
              style={{
                animationDelay: `${index * 0.3}s`,
                boxShadow: "0 0 20px hsl(var(--timeline-dot))",
              }}
            />

            {/* Icon */}
            <div
              className={`absolute left-2 top-0 w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm flex items-center justify-center border border-primary/30 transition-all duration-500 group hover:scale-110 hover:rotate-12 ${
                isVisible ? "scale-100 rotate-0" : "scale-0 rotate-90"
              }`}
              style={{ animationDelay: `${index * 0.3 + 0.2}s` }}
            >
              <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
            </div>

            {/* Content */}
            <div
              className="bg-card/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-border/50 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-500 group"
            >
              <div className="relative">
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
              <p className="text-primary font-medium mb-3 text-lg">{item.organization}</p>
              <p className="text-sm text-accent mb-4 uppercase tracking-wider">{item.period}</p>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
