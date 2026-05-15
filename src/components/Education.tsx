const Education = () => {
  const education = [
    {
      degree: "MSc Business Analytics — First Class Honours (1:1)",
      school: "University of Limerick, Ireland",
      period: "2024 – 2025",
      gpa: "First Class Honours",
      coursework: ["Led team to 1st place among 18 teams in business simulation competition", "Business Analytics", "Data Visualisation", "Statistical Analysis", "Decision Support Systems"],
      logo: "UL"
    },
    {
      degree: "Bachelor of Fashion Technology",
      school: "National Institute of Fashion Technology, India",
      period: "2019 – 2023",
      gpa: "",
      coursework: ["Fashion Technology", "Supply Chain Management", "Production Planning", "Merchandising"],
      logo: "NIFT"
    }
  ];

  const certifications = [
    { name: "PL-300: Power BI Data Analyst Associate", issuer: "Microsoft" },
    { name: "AZ-900: Azure Fundamentals", issuer: "Microsoft" },
    { name: "Google Data Analytics Professional Certificate", issuer: "Google / Coursera" }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Academic journey and commitment to continuous learning.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {edu.logo}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-blue-400 font-semibold text-lg">{edu.school}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-300 font-medium">{edu.period}</p>
                  {edu.gpa && <p className="text-green-400 font-semibold">{edu.gpa}</p>}
                </div>
              </div>
              <div className="border-t border-gray-700 pt-6">
                <h4 className="text-lg font-semibold text-gray-300 mb-3">
                  {index === 0 ? "Highlights & Coursework:" : "Relevant Coursework:"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, courseIndex) => (
                    <span key={courseIndex} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-600">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Certifications */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">Certifications & Professional Development</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-600">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <p className="text-white font-semibold">{cert.name}</p>
                    <p className="text-blue-400 text-sm">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
