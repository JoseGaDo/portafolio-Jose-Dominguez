import "./header.css";
import { motion, useScroll } from "motion/react";

export default function Header() {
  const { scrollYProgress } = useScroll();
  return (
    <nav>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#187537",
          zoom: "0.6",
        }}
      />
      <div className="container">
        <h1>José Domínguez</h1>
        <div className="sections">
          <a>INICIO</a>
          <a>SOBRE MI</a>
          <a>PROYECTOS</a>
          <a>DISEÑOS</a>
        </div>
        <div className="contacto">
          <button>Contacto</button>
        </div>
      </div>
    </nav>
  );
}
