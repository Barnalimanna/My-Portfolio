const Skills = () => {
const skillGroups = [

{
title: "Full Stack Development",
skills: [
"MERN Stack",
"REST APIs",
"Authentication & Authorization",
"CRUD Operations",
"Responsive UI"
]
},

{
title: "Machine Learning & AI",
skills: [
"Machine Learning",
"NLP",
"FastAPI",
"Model Deployment"
]
},

{
title: "Database Management",
skills: [
"MongoDB Ecosystem",
"MySQL",
"Database Design"
]
},

{
title: "Cloud & Deployment",
skills: [
"Vercel",
"Render",
"MongoDB Atlas",
"Cloudinary",
"Production Deployment",
"Deployment Debugging"
]
},

{
title: "SEO & Web Optimization",
skills: [
"SEO",
"Google Search Console",
"Performance Optimization"
]
},

{
title: "Version Control & Development Tools",
skills: [
"Git & GitHub",
"Postman",
"Jupyter",
"Power BI"
]
},

{
title: "Problem Solving",
skills: [
"Debugging",
"Logical Thinking",
"Adaptability",
"Communication",
"Self Learning"
]
}

];
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-1 gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition"
            >
              <h3 className="text-xl font-semibold text-white mb-4 text-left">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-slate-800 text-gray-300 px-4 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;