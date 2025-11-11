import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; delay: number }>>([]);

  useEffect(() => {
    // Generate shooting stars
    const generateStars = () => {
      const newStars = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 50}%`,
        delay: Math.random() * 5,
      }));
      setStars(newStars);
    };

    generateStars();
    const interval = setInterval(generateStars, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient orbs */}
      <div
        className="gradient-orb"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, hsl(var(--gradient-cyan)) 0%, transparent 70%)",
          top: "10%",
          left: "10%",
        }}
      />
      <div
        className="gradient-orb"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, hsl(var(--gradient-purple)) 0%, transparent 70%)",
          bottom: "10%",
          right: "10%",
          animationDelay: "2s",
        }}
      />
      <div
        className="gradient-orb"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          animationDelay: "4s",
        }}
      />

      {/* Shooting stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            left: star.left,
            top: star.top,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
