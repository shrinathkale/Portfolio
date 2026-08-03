function Experience() {

  const experiences = [

    {
      role: "Full Stack Developer Intern",
      company: "Edunet Foundation",
      duration: "Jan 2026 - Feb 2026",
      description:
        "Developed a centralized web application (Rental Home Management System) using Django for backend for improving user experience and performance through responsive design and efficient coding practices.",
      certificateUrl: "https://drive.google.com/file/d/1dd_7tL4u2Za8U4AP7S3oK9vimntAbfzV/view?usp=drivesdk"
    },

    {
      role: "Web Development Intern",
      company: "EduSkills",
      duration: "Mar 2025 - May 2025",
      description:
        "Developed responsive web applications within the course and improved frontend, backend and database development skills using modern web technologies like MERN Stack.",
      certificateUrl: "https://drive.google.com/file/d/1dfsLRWHrPomhzxvWeH3aR0408uU5QBoY/view?usp=drivesdk"
    },

    {
      role: "Machine Learning Intern",
      company: "Cognify Technologies",
      duration: "Nov 2024 - Dec 2024",
      description:
        "Worked on Machine Learning and Data Analysis projects (Restaurant Project) involving restaurant predictive modeling and data visualization.",
      certificateUrl: "https://drive.google.com/file/d/1dbbydM6sk0L-kbnny0PtWElLjDH1V-1h/view?usp=drivesdk"
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

                <a
                  className="experience-certificate-link mt-4"
                  href={exp.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Certificate
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Experience