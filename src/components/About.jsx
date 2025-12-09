function About() {
  return (
    // Usamos 'className' en lugar de 'class'
    <section id="sobre-mi">
      <h2>Sobre Mí</h2>
      {/* Las imágenes deben cerrarse solas con '/>' */}
      {/* <img src="ruta/a/tu-foto.jpg" alt="Retrato de [Tu Nombre]" /> */}
      <p>
        Aquí va una breve biografía sobre tu pasión por la programación, tu
        experiencia, y lo que te motiva.
      </p>
      <p>
        Puedes añadir otro párrafo sobre tus intereses, tu metodología de
        trabajo o los tipos de proyectos en los que te gusta participar.
      </p>
    </section>
  );
}
export default About;
