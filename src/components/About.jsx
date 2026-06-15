const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">
          About Me
        </h2>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <p className="text-gray-300 leading-8 text-lg">
            I am Barnali Manna, a B.Tech Computer Science Engineering
            student specializing in Data Science. I am passionate about
            full stack development, machine learning, and building real-world
            applications that solve practical problems.
          </p>

          <p className="text-gray-400 leading-8 mt-4">
            I have hands-on experience in MERN stack development, REST API
            integration, MongoDB Atlas, cloud deployment, SEO optimization,
            and AI/ML based project development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;