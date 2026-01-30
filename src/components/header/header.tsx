import './header.css'

export default function Header() {
  return (
    <nav>
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
    </nav>
  );
}
