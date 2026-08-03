function Projects() {

  const projects = [

    {
      title: "Online Shopping System",
      description:
        "A mini e-commerce web application with customer authentication, product management, shopping cart, selective checkout, order processing, and automatic stock management.",
      tech:
        "C#, ASP.NET Core MVC, ADO.NET, SQL Server, HTML, CSS, Bootstrap, JavaScript",
      github:
        "https://github.com/shrinathkale/Online_shopping_system"
    },

    {
      title: "Guest House Management System",
      description:
        "Full-stack web application for room-wise guest record management and administration.",
      tech:
        "HTML, CSS, JavaScript, MongoDB, NodeJS",
      github:
        "https://github.com/shrinathkale/Guest_house_management_system"
    },

    {
      title: "Rental Home Management",
      description:
        "Web-based rental home management platform for handling property listings and tenant details.",
      tech:
        "HTML, CSS, JavaScript, Django, MySQL",
      github:
        "https://github.com/shrinathkale/Rental_home_management"
    },

    {
      title: "Drug Response Prediction",
      description:
        "Machine Learning project that predicts whether the human body is sensitive or resistive to a particular drug.",
      tech:
        "Python, Machine Learning, Random Forest",
      github:
        "https://github.com/shrinathkale/Drug_response_prediction"
    },

    {
      title: "Medical Radiographic Image Analyzer",
      description:
        "AI-based system that predicts whether an organ in a radiographic image is defective using Deep Learning techniques.",
      tech:
        "Python, Flask, HTML, CSS, JavaScript, Deep Learning",
      github:
        "https://github.com/shrinathkale/Medical_radiographic_image_analyzer"
    },

    {
      title: "Restaurant Project",
      description:
        "Restaurant date analysis and build the predictive model to predict the restaurant rating based on the features in Cognify Technologies internship project.",
      tech:
        "Python, Machine Learning, Data Analysis, Clustering",
      github:
        "https://github.com/shrinathkale/Restaurant_project"
    },

    {
      title: "Dermatology Project",
      description:
        "Machine Learning skin disease prediction and analysis system based on the live image of the skin.",
      tech:
        "Python, Machine Learning, Data Analysis",
      github:
        "https://github.com/shrinathkale/Dermatology_project"
    },

    {
      title: "Fraud Transaction Detection",
      description:
        "AI-powered fraud transaction detection system using Machine Learning algorithms.",
      tech:
        "Python, Machine Learning, Kafka (Cloud Tool)",
      github:
        "https://github.com/shrinathkale/Fraud_Transaction_Detection"
    }

  ]

  return (
    <div id="projects" className="page-section">
      <div className="container">

        <h1 className="section-title text-center mb-5">
          Projects
        </h1>

        <div className="row g-4">

          {projects.map((project, index) => (
            <div className="col-12" key={index}>

              <div className="project-card h-100">

                <h3>{project.title}</h3>

                <p className="mt-3">
                  {project.description}
                </p>

                <p className="tech-stack mt-4">
                  <strong>Tech Used:</strong> {project.tech}
                </p>

                <div className="mt-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark"
                  >
                    <i className="bi bi-github me-2"></i>
                    View on GitHub
                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Projects