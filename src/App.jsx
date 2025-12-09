import { useState } from "react"; // 1. Importamos el estado

import Header from "./components/Header";
import Hero from "./components/Hero";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Habilidades from "./components/Habilidades";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
// Si tienes un componente de Contacto, impórtalo aquí.
// Si no, usaremos un texto temporal.

export default function App() {
  // 2. Creamos el estado para saber en qué página estamos
  // Por defecto, empezamos en 'inicio'
  const [paginaActual, setPaginaActual] = useState("inicio");

  // 3. Esta función decide qué mostrar según el estado
  const renderizarPagina = () => {
    if (paginaActual === "inicio") {
      return (
        <>
          <Hero />
          <SobreMi />
          <Habilidades />
        </>
      );
    } else if (paginaActual === "proyectos") {
      return <Proyectos />;
    } else if (paginaActual === "newsletter") {
      return <Newsletter />;
    } else if (paginaActual === "contacto") {
      // Como no vi un componente "Contacto" en tu lista,
      // puedes poner el Newsletter aquí o crear un componente nuevo.
      return (
        <section
          style={{ padding: "5rem 2rem", textAlign: "center", color: "white" }}
        >
          <h2>Página de Contacto</h2>
          <p>Aquí iría tu formulario de contacto.</p>
        </section>
      );
    }
  };

  return (
    <>
      {/* 4. Le pasamos la función para cambiar página al Header (como darle el mando a distancia) */}
      <Header cambiarPagina={setPaginaActual} />

      <main>
        {/* 5. Aquí pintamos el resultado de la función */}
        {renderizarPagina()}
      </main>

      <Footer />
    </>
  );
}
