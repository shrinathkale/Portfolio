function Certifications() {

  const certifications = [

    {
      title: "Application Security using Java",
      issuer: "Checkmarx",
      year: "2026"
    },

    {
      title: "API Security using Java",
      issuer: "Checkmarx",
      year: "2026"
    },

    {
      title: "Deep Tech National Hackathon",
      issuer: "Deep Tech",
      year: "2026"
    },

    {
      title: "AI Skills Passport Program",
      issuer: "EY Technology Solutions",
      year: "2026"
    },

    {
      title: "Employability Skills",
      issuer: "EduSkills Foundation",
      year: "2025"
    },

    {
      title: "Web Development",
      issuer: "EduSkills Foundation",
      year: "2025"
    },

    {
      title: "Explore Data with MATLAB",
      issuer: "MATLAB Coding",
      year: "2025"
    },

    {
      title: "Machine Learning Using Python Programming",
      issuer: "SWAYAM MHRD",
      year: "2025"
    },

    {
      title: "MATLAB Onramp",
      issuer: "MATLAB Coding",
      year: "2025"
    },

    {
      title: "Cummins India Scholarship",
      issuer: "Cummins India",
      year: "2025"
    },

    {
      title: "AI Visionaries",
      issuer: "Amrutvahini College of Engineering",
      year: "2025"
    },

    {
      title: "SIH Internal Hackathon",
      issuer: "Amrutvahini College of Engineering",
      year: "2024"
    }

  ]

  return (

    <div id="certifications" className="page-section">

      <div className="container">

        <h1 className="section-title text-center mb-5">
          Certifications
        </h1>

        <div className="row g-4">

          {certifications.map((cert, index) => (

            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>

              <div className="certification-card h-100">

                <h3 className="certification-title">
                  {cert.title}
                </h3>

                <h5 className="certification-issuer mt-3">
                  {cert.issuer}
                </h5>

                <p className="certification-year mt-2">
                  Issued: {cert.year}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  )
}

export default Certifications