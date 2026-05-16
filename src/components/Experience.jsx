function Experience() {

  const experiences = [

    {
      role: "Full Stack Developer Intern",
      company: "Edunet Foundation",
      duration: "2026",
      description:
        "Developed a centralized web application using Django for backend for improving user experience and performance through responsive design and efficient coding practices."
    },

    {
      role: "Data Science Intern",
      company: "Hackveda",
      duration: "2026",
      description:
        "Worked on Real-Time Fraud Detection System using ETL pipelines and Machine Learning techniques for fraud transaction analysis and prediction."
    },

    {
      role: "Web Development Intern",
      company: "EduSkills",
      duration: "2025",
      description:
        "Developed responsive web applications and improved frontend, backend and database development skills using modern web technologies like MERN Stack."
    },

    {
      role: "Machine Learning Intern",
      company: "Cognify Technologies",
      duration: "2025",
      description:
        "Worked on Machine Learning and Data Analysis projects involving predictive modeling and data visualization."
    }

  ]

  return (

    <div id="experience" className="page-section">

      <div className="container">

        <h1 className="section-title text-center mb-5">
          Experience
        </h1>

        <div className="row g-4">

          {experiences.map((exp, index) => (

            <div className="col-12" key={index}>

              <div className="experience-card h-100">

                <h3 className="experience-role">
                  {exp.role}
                </h3>

                <h5 className="experience-company mt-3">
                  {exp.company}
                </h5>

                <p className="experience-duration mt-2">
                  {exp.duration}
                </p>

                <p className="experience-description mt-3">
                  {exp.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Experience