const Achievements = () => {
  const achievements = [
    "Participated as a singer in college cultural events",
    "Performed in fresher’s, farewell, fest and teacher’s day programs",
    "Got position in painting compititions",
    "Completed multiple certifications in AI, ML, Power BI,Data Structures and More",
    "Built and deployed real-world full-stack and AI/ML projects",
  ];

  return (
    <section id="achievements" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition"
            >
              <p className="text-gray-300 leading-7">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;