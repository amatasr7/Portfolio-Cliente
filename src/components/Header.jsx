// Recibimos la prop "cambiarPagina" desde App.jsx
export default function Header({ cambiarPagina }) {
  // Función auxiliar para evitar que la web se recargue al pulsar enlaces
  const navegar = (e, pagina) => {
    e.preventDefault(); // Evita la recarga
    cambiarPagina(pagina); // Cambia el estado en App
  };

  return (
    <header className="main-header">
      <div className="logo">
        <a href="#" onClick={(e) => navegar(e, "inicio")}>
          DigitalEvolution S.A
        </a>
      </div>

      <nav className="main-nav">
        <ul>
          <li>
            <a href="#" onClick={(e) => navegar(e, "inicio")}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => navegar(e, "proyectos")}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => navegar(e, "newsletter")}>
              Newsletter
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => navegar(e, "contacto")}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
