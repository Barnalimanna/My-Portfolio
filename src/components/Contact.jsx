const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Contact Me
        </h2>

        <div className="space-y-4 text-gray-300">

  <p>
    Email:
    <a
      href="mailto:mannabarnali294@gmail.com"
      className="text-cyan-400 ml-2 hover:underline"
    >
      mannabarnali294@gmail.com
    </a>
  </p>

  <p>
    LinkedIn:
    <a
      href="https://www.linkedin.com/in/barnali-manna/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-cyan-400 ml-2 hover:underline"
    >
      Visit Profile
    </a>
  </p>

  <p>
    GitHub:
    <a
      href="https://github.com/Barnalimanna"
      target="_blank"
      rel="noopener noreferrer"
      className="text-cyan-400 ml-2 hover:underline"
    >
      Visit GitHub
    </a>
  </p>

</div>
      </div>
    </section>
  );
};

export default Contact;