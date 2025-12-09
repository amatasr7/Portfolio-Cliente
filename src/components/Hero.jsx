import fotoPerfil from "../assets/ProfilePicture.png";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      {/* 2. AÑADE LA IMAGEN AQUÍ */}
      <div className="img-container">
        <img src={fotoPerfil} alt="Alex Matas" className="hero-img" />
      </div>

      <h1>Alex Matas</h1>
      <p className="subtitle">Desarrollador Full Stack</p>
      <p>Transformo ideas en código y soluciones web funcionales.</p>
    </section>
  );
}
