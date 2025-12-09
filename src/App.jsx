import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Habilidades from "./components/Habilidades";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";

export default function App() {
  const [paginaActual, setPaginaActual] = useState("inicio");

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
      return <Contacto />;
    }
  };

  return (
    <>
      <Header cambiarPagina={setPaginaActual} />

      <main>{renderizarPagina()}</main>

      <Footer />
    </>
  );
}
