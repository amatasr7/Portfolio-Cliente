import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [estado, setEstado] = useState("inicial");

  const manejarEnvio = (e) => {
    e.preventDefault();

    setEstado("cargando");

    setTimeout(() => {
      setEstado("exito");
      setEmail("");
    }, 2000);
  };

  return (
    <section id="newsletter" className="newsletter-section">
      <div className="newsletter-content">
        <h2>Mantente al día</h2>
        <p className="description">
          ¿Te interesa el desarrollo Full-Stack? Suscríbete para recibir
          actualizaciones sobre mis nuevos proyectos, artículos sobre{" "}
          <strong>React & Laravel</strong> y recursos que voy descubriendo en mi
          formación.
        </p>

        {estado === "exito" ? (
          <div className="success-message">
            <h3>¡Gracias por suscribirte!</h3>
            <p>He recibido tu correo. Pronto tendrás noticias mías.</p>
            <button onClick={() => setEstado("inicial")} className="text-link">
              Volver al formulario
            </button>
          </div>
        ) : (
          <form onSubmit={manejarEnvio} className="newsletter-form">
            <div className="input-group">
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={estado === "cargando"}
              />
              <button
                type="submit"
                className="cta-button"
                disabled={estado === "cargando"}
              >
                {estado === "cargando" ? "Enviando..." : "Suscribirme"}
              </button>
            </div>

            <div className="legal-check">
              <input type="checkbox" id="privacy" required />
              <label htmlFor="privacy">
                He leído y acepto la <a href="#">política de privacidad</a>.
                Prometo no enviarte Spam.
              </label>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
