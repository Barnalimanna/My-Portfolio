const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">Barnali.</h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#skills" className="hover:text-cyan-400">Skills</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#achievements" className="hover:text-cyan-400">Achievements</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
          <a href="#certificates" className="hover:text-cyan-400">Certificates</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;