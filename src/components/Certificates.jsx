import nptel from "../assets/certificates/nptel.pdf";
import powerbipro from "../assets/certificates/powerbipro.pdf";
import industrial_training from "../assets/certificates/industrial_training.pdf";
import dsa from "../assets/certificates/dsa.pdf";
import intro_network from "../assets/certificates/intro_network.pdf";
import sql from "../assets/certificates/sql.pdf";
import powerbi from "../assets/certificates/powerbi.pdf";
import langchain from "../assets/certificates/langchain.pdf";
import rag from "../assets/certificates/rag.pdf";

const Certificates = () => {
  const certificates = [
    {
      title: "Introduction to Machine Learning – NPTEL",
      file: nptel,
    },
    {
      title: "Power BI Project – Great Learning",
      file: powerbipro,
    },
    {
      title: "Artificial Intelligence and Machine Learning Using Python - Euphoria GenX",
      file: industrial_training,
    },
    {
      title: "Fundamentals of Data Structures in C – Simplilearn",
      file: dsa,
    },
    {
      title: "Introduction to Networking – NVIDIA",
      file: intro_network,
    },
    {
      title: "SQL Fundamentals Event Certificate - WsCubeTech",
      file: sql,
    },
    {
      title: "30 Days Power BI Course - CoursePe",
      file: powerbi,
    },
    {
      title: "Build an AI-Powered Document Retrieval System with IBM Granite and Docling - IBM SkillsBuild",
      file: langchain,
    },
    {
      title: "Retrieval Augmented Generation with LangChain - IBM SkillsBuild",
      file: rag,
    },
  ];

  return (
    <section id="certificates" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition"
            >
              <h3 className="text-lg text-gray-300 font-semibold">
                {certificate.title}
              </h3>

              <a
                href={certificate.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold transition"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;