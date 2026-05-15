function About() {
  return (
    <div id="about" className="page-section">
      <div className="container">

        <h1 className="section-title text-center mb-5">
          About Me
        </h1>

        <div className="glass-card p-5">

          <div className="row align-items-center">

            {/* Left Side - Photo */}
            <div className="col-md-4 text-center mb-4 mb-md-0">

              <img
                src="./Shrinath Photo.jpeg"
                alt="Shrinath Kale"
                className="img-fluid rounded-circle shadow"
                style={{
                  width: "250px",
                  height: "250px",
                  objectFit: "cover",
                  border: "4px solid #fff"
                }}
              />

            </div>

            {/* Right Side - Content */}
            <div className="col-md-8">

              <p>
                I am an Information Technology Engineering student at Amrutvahini College of Engineering with a strong interest in Web Development, Machine Learning, and Artificial Intelligence.
              </p>

              <p>
                I enjoy building real-world projects using technologies like MERN Stack, HTML, CSS, JavaScript, Python, and Django.
              </p>

              <p>
                I have worked on AI-based healthcare and prediction systems, along with full-stack web applications. I am also a Cummins Scholar and have participated in national-level hackathons and technical competitions.
              </p>

              <p>
                I am passionate about learning new technologies, solving problems, and developing innovative software solutions.
              </p>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default About