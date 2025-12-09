import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [estado, setEstado] = useState("inicial");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEstado("enviando");

    setTimeout(() => {
      setEstado("exito");
      setFormData({ nombre: "", email: "", mensaje: "" });
    }, 2000);
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Hablemos</h2>
          <p>
            ¿Tienes alguna propuesta de proyecto, una oferta de prácticas o
            simplemente quieres charlar sobre tecnología? ¡Me encantaría
            escucharte!
          </p>

          <div className="info-item">
            <strong>Email:</strong>
            <a href="mailto:amr02@iesemilidarder.com">
              amr02@iesemilidarder.com
            </a>
          </div>

          <div className="info-item">
            <strong>LinkedIn:</strong>
            <a
              href="https://linkedin.com/in/tu-perfil"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/alexmatas
            </a>
          </div>

          <div className="info-item">
            <strong>GitHub:</strong>
            <a
              href="https://github.com/amatasr7"
              target="_blank"
              rel="noreferrer"
            >
              github.com/amatasr7
            </a>
          </div>
        </div>

        <div className="contact-form-wrapper">
          {estado === "exito" ? (
            <div className="success-box">
              <h3>¡Mensaje enviado!</h3>
              <p>
                Gracias por contactarme, {formData.nombre}. Te responderé lo
                antes posible.
              </p>
              <button
                onClick={() => setEstado("inicial")}
                className="text-link"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  disabled={estado === "enviando"}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  disabled={estado === "enviando"}
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="¿En qué puedo ayudarte?"
                  disabled={estado === "enviando"}
                ></textarea>
              </div>

              <button
                type="submit"
                className="cta-button full-width"
                disabled={estado === "enviando"}
              >
                {estado === "enviando" ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
