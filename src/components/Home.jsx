function Home() {
  return (

    <section
      id="home"
      className="hero-section d-flex align-items-center"
    >

      <div className="container text-center">

        <h1 className="display-3 fw-bold hero-title">

          Hi, I'm

          <span className="highlight">
            {" "}Shrinath Kale
          </span>

        </h1>

        <p className="lead hero-subtitle mt-4">

          Information Technology Engineering Student |
          Full Stack Developer |
          AI/ML Enthusiast

        </p>


        {/* Social Media Icons */}

        <div className="social-icons mt-5 d-flex justify-content-center gap-4">

          <a
            href="https://www.linkedin.com/in/shrinath-kale-082950318"
            target="_blank"
            className="social-icon linkedin"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            href="https://github.com/shrinathkale"
            target="_blank"
            className="social-icon github"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            href="https://www.instagram.com/shrinath_kale_16"
            target="_blank"
            className="social-icon instagram"
          >
            <i className="bi bi-instagram"></i>
          </a>

          <a
            href="https://wa.me/919284651290"
            target="_blank"
            className="social-icon whatsapp"
          >
            <i className="bi bi-whatsapp"></i>
          </a>

        </div>


        {/* Buttons */}

        <div className="mt-5 d-flex justify-content-center gap-4 flex-wrap">

          <a
            href="#contact"
            className="btn hero-btn contact-btn"
          >
            Contact Me
          </a>

          <a
            href="/Shrinath Resume.pdf"
            download
            className="btn hero-btn resume-btn"
          >
            My CV
          </a>

        </div>

      </div>

    </section>

  )
}

export default Home