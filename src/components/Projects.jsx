const Projects = () => {
  const projects = [
    {
      title: "PostNest Blog App",
      category: "Full Stack Development",
      description:
        "A full-stack MERN blog platform with authentication, posts, Like, comments, image upload, SEO optimization, AI-based cyberbullying comment moderation using a machine learning API and cloud deployment.",
      tech: ["MERN", "MongoDB Atlas", "Authentication", "Cloudinary", "Vercel", "Render","SEO","Fast ML API"],
      live: "https://blog-app-gules-zeta.vercel.app/",
      github: "https://github.com/Barnalimanna/Blog_App",
    },

{
  title: "Disease Prediction and Medical Recommendation System",
  category: "Machine Learning",
  description:
    "Built an AI-based disease prediction application capable of predicting possible diseases from symptoms using machine learning models.",
  tech: [
    "Python",
    "Machine Learning",
    "Flask",
    "Scikit-learn",
    "HTML",
    "CSS",
    "JavaScript"
  ],
  live: "https://dev3.codespare.in/",
  github: "https://github.com/Barnalimanna/Diseases_prediction_and_Medical_Recommendation_System",
},

  {
    title: "Library AI Agent",
    category: "Artificial Intelligence",
    description:
    "AI-powered academic assistant that recommends relevant learning materials using NLP and IBM Granite models based on students’ queries.",
    tech: [
    "IBM Granite",
    "NLP",
    "IBM Cloud",
    "Python"
    ],
    live: "#",
    github: "https://github.com/Barnalimanna/LibraryAgent",
},

{
    title: "House Price Prediction Model",
    category: "Machine Learning",
    description:
    "Machine learning model that predicts house prices based on customer requirements and property features.",
    tech: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Matplotlib"
    ],
    live: "#",
    github: "YOUR_GITHUB_URL",
},


{
    title: "BMI Calculator",
    category: "Frontend Development",
    description:
    "Interactive BMI Calculator website with dynamic UI and responsive design using JavaScript and jQuery.",
    tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery"
    ],
    live: "https://bmi-calculator-bybarnali.netlify.app",
    github: "https://github.com/Barnalimanna/BMI-Calculator",
},

// {
//     title: "Superstore Sales & Profit Dashboard",
//     category: "Data Analytics",
//     description:
//     "Interactive Power BI dashboard for analyzing sales trends, profit distribution, and business insights for decision-making.",
//     tech: [
//     "Power BI",
//     "Data Visualization",
//     "Excel"
//     ],
//     live: "#",
//     github: "#",
// },

// {
//     title: "Mobile Sales Dashboard",
//     category: "Data Analytics",
//     description:
//     "Developed an interactive dashboard to monitor sales performance, revenue growth, and business trends using Power BI.",
//     tech: [
//     "Power BI",
//     "Data Analytics",
//     "Visualization"
//     ],
//     live: "#",
//     github: "#",
// },
];
    return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition duration-300 shadow-lg"
            >
             <span className="inline-block bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm mb-4">
                {project.category}  
            </span> 
              <h3 className="text-2xl font-bold text-white">
                {project.title}
              </h3>
            <p className="text-gray-500 text-sm mt-2">
                Featured Project
            </p>

              <p className="text-gray-400 mt-4 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="bg-slate-800 text-cyan-300 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-6">
                <a
                  href={project.live}
                  target="_blank"
                  className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg font-semibold transition"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-950 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;