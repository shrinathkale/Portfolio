function Certifications() {

  const certifications = [

    {
      title: "Application Security using Java",
      issuer: "Checkmarx",
      year: "2026",
      certificateUrl: "https://drive.google.com/file/d/1gjiH8ibMDjzYr78TAUz_7ov5XOcMd-c8/view?usp=drivesdk"
    },

    {
      title: "API Security using Java",
      issuer: "Checkmarx",
      year: "2026",
      certificateUrl: "https://drive.google.com/file/d/1gg5qpj7ehdv1IFZ7VpslOujimOrN2gnx/view?usp=drivesdk"
    },

    {
      title: "Frontend Security Basics",
      issuer: "Checkmarx",
      year: "2026",
      certificateUrl: "https://drive.google.com/file/d/1gwSbN78HhjkDeVghObJqyv3yjnEPrwv-/view?usp=drivesdk"
    },

    {
      title: "Backend Security Basics",
      issuer: "Checkmarx",
      year: "2026",
      certificateUrl: "https://drive.google.com/file/d/1ginT6wx0cJL6eGy9cb9K5XgmB9NteeBy/view?usp=drivesdk"
    },

    {
      title: "Deep Tech National Hackathon",
      issuer: "Deep Tech",
      year: "2026",
      certificateUrl: "https://drive.google.com/file/d/1gy0GDxTCcul-CUi9cxje-UU384Xzgo4U/view?usp=drivesdk"
    },

    {
      title: "AI Skills Passport Program",
      issuer: "EY Technology Solutions",
      year: "2026",
      certificateUrl: "https://drive.google.com/file/d/1h0W_iGTNz3jwezq6FxlXL9IWcgcnzbdr/view?usp=drivesdk"
    },

    {
      title: "Zomathon Hackathon",
      issuer: "Coding Ninjas",
      year: "2026",
      certificateUrl: "https://drive.google.com/file/d/1hJoCcmUxTkRAF9Rh-aGw88OT0qiEGwIs/view?usp=drivesdk"
    },

    {
      title: "Employability Skills",
      issuer: "EduSkills Foundation",
      year: "2025",
      certificateUrl: "https://drive.google.com/file/d/1h4B6d6w3eQ-p3NNbh83cO7t-dFk87c3Z/view?usp=drivesdk"
    },

    {
      title: "Web Development",
      issuer: "EduSkills Foundation",
      year: "2025",
      certificateUrl: "https://drive.google.com/file/d/1dfsLRWHrPomhzxvWeH3aR0408uU5QBoY/view?usp=drivesdk"
    },

    {
      title: "Explore Data with MATLAB",
      issuer: "MATLAB Coding",
      year: "2025",
      certificateUrl: "https://drive.google.com/file/d/1hHKt5H1h9heaCwOTXrM2wq7N4zSlfqh-/view?usp=drivesdk"
    },

    {
      title: "Machine Learning Using Python Programming",
      issuer: "SWAYAM MHRD",
      year: "2025",
      certificateUrl: "https://drive.google.com/file/d/1e2Jc5pb4d5SYHlwJT-ACRn108cfAlOUK/view?usp=drivesdk"
    },

    {
      title: "MATLAB Onramp",
      issuer: "MATLAB Coding",
      year: "2025",
      certificateUrl: "https://drive.google.com/file/d/1hCY8GhsITbpa5YvZ1epWWnfagSe7_joJ/view?usp=drivesdk"
    },

    {
      title: "Cummins India Scholarship",
      issuer: "Cummins India",
      year: "2025",
      certificateUrl: "https://drive.google.com/file/d/1e1r_BzHJ4-ZACiwov75rSaG772RbtJNb/view?usp=drivesdk"
    },

    {
      title: "AI Visionaries",
      issuer: "Amrutvahini College of Engineering",
      year: "2025",
      certificateUrl: "https://drive.google.com/file/d/1e5Rh59KZoH0IOqzfNCP9o4uzlgDRKe_k/view?usp=drivesdk"
    },

    {
      title: "SIH Internal Hackathon",
      issuer: "Amrutvahini College of Engineering",
      year: "2024",
      certificateUrl: "https://drive.google.com/file/d/1h56AEGiHv8GckgLGprioFSEyWp3gMEnJ/view?usp=drivesdk"
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

                <a
                  className="certification-link mt-3"
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Certificate
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  )
}

export default Certifications