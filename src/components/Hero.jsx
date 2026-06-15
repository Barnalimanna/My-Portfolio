const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 pt-20">
      <div>
        <p className="text-cyan-400 text-lg mb-4">Hello, I'm</p>

        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Barnali Manna
        </h1>

        <h2 className="mt-5 text-2xl md:text-3xl text-gray-300">
          Full Stack Developer & AI/ML Enthusiast
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-gray-400">
          B.Tech CSE (Data Science) student passionate about building
          real-world web applications, machine learning projects, and
          production-ready solutions.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-950"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;