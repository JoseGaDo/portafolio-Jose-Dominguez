import Header from "./components/header/header";
import "./App.css";
import BackgroundParticles from "./components/particles/particles";

export default function App() {
  const email = "j.gandarillas.d@gmail.com";
  const asunto = "Contacto desde protafolio";

  const handleContactClick = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(asunto)}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <>
      <Header />
      <section id="home" className="home">
        <BackgroundParticles />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1>¡HOLA!</h1>
          <h3>
            Soy un{" "}
            <span className="text-stylish">
              diseñador y desarrollador de software
            </span>
            , fiel creyente del código limpio y las tecnologías amigables
          </h3>
          <p>DESLIZA HACIA ABAJO</p>
        </div>
      </section>
      <section id="about" className="about">
        <div className="presentation">
          <img src="./public/foto_jose.jpeg" alt="foto presentación" />
        </div>
        <div className="text-presentation">
          <h2>Sobre Mi</h2>
          <p>
            Como diseñador y desarrollador web, me centro en ofrecer soluciones
            escalables y mantenibles. Creando interfaces amigables y fáciles de
            digerir, que generen confianza desde el primer <span>click</span>
          </p>
        </div>
      </section>
      <section id="projects" className="projects">
        <h1>Proyectos</h1>
        <div className="cards-projects">
          <div className="card">
            <p>Desarrollo Backend</p>
            <h2>APP GESMujer</h2>
            <span>
              Aplicación móvil didáctica de aprendizaje para el Grupo de
              Estudios Sobre la Mujer "Rosario castellanos".
            </span>
            <a href="https://github.com/JoseDominguez99/AppGESMujer">Explorar proyecto</a>
          </div>
          <div className="card">
            <p>Desarrollo Fulstack</p>
            <h2>TensoMetric</h2>
            <span>
              Aplicación de escritorio para control y análisis de un tensiómetro
              de peso gota para en Centro Interdisciplinario de Investigación
              para el Desarrollo Regional, Unidad Oaxaca.
            </span>
            <a href="">Explorar proyecto</a>
          </div>
        </div>
      </section>
      <section id="design" className="design">
        <h1>DISEÑOS</h1>
        <div className="designs">
          <div className="card-design">
            <h3>CAVICHE</h3>
            <p>Wireframe de sistema de administración financiera</p>
            <a href="https://www.figma.com/proto/sDI6FcFFmoGRsQ5lJfXmOt/Caviche?node-id=1-1225&p=f&t=3cak91R9lkpki6QS-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A1225">Ver diseño</a>
          </div>
          <div className="card-design">
            <h3>COZOBI</h3>
            <p>Wireframe de sistema de colaboración agricola</p>
            <a href="https://www.figma.com/proto/A28AqjReq5LCYrYqiCFRPs/COZOBI?node-id=1-1782&p=f&t=TJFtVY16fwfXAlJo-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">Ver diseño</a>
          </div>
          <div className="card-design">
            <h3>PAQUETERÍA</h3>
            <p>Wireframe de sistema de envíos internacionales</p>
            <a href="https://www.figma.com/proto/zTLx16cKvcL2pZHz0jQPgD/Paqueteria?node-id=1-439&p=f&t=mIDxQXHVl3mZQdCN-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A439">Ver diseño</a>
          </div>
          <div className="card-design">
            <h3>TENSOMETRIC</h3>
            <p>Wireframe de sistema de control y análisis de tensiómetro superficial</p>
            <a href="https://www.figma.com/proto/bg8YNxb4rgMTUteyN2QTVj/TensioMaster-Ciidir?node-id=1-5&t=2nIMZDyo3vTgs3DN-1">Ver diseño</a>
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        <h1>¿HABLAMOS?</h1>
        <p>Disponible para nuevos proyectos y colaboraciones creativas</p>
        <button onClick={handleContactClick}>
          Envía un correo
        </button>
      </section>
    </>
  );
}