import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import type { Engine } from "@tsparticles/engine";

const BackgroundParticles = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null; 

  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: "#FFF" },
        particles: {
          number: { value: 60 },
          color: { value: "#187537" },
          shape: { type: "circle" },
          opacity: { value: 0.3 },
          size: { value: 10 },
          move: { enable: true, speed: 0.6 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "attract" } 
          },
        },
      }}
    />
  );
};

export default BackgroundParticles;
