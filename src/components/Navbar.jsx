import { useEffect, useRef, useState } from 'react'

function Navbar() {
  const [expanded, setExpanded] = useState(false)
  const collapseRef = useRef(null)

  useEffect(() => {
    const collapseEl = collapseRef.current
    if (!collapseEl) return

    const handleShown = () => setExpanded(true)
    const handleHidden = () => setExpanded(false)

    collapseEl.addEventListener('shown.bs.collapse', handleShown)
    collapseEl.addEventListener('hidden.bs.collapse', handleHidden)

    return () => {
      collapseEl.removeEventListener('shown.bs.collapse', handleShown)
      collapseEl.removeEventListener('hidden.bs.collapse', handleHidden)
    }
  }, [])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top">
      <div className="container">

        <a className="navbar-brand logo" href="#home">
          Shrinath Kale
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? (
            <i className="bi bi-x-lg text-white" aria-hidden="true"></i>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>

        <div className="collapse navbar-collapse" id="navbarNav" ref={collapseRef}>

          <ul className="navbar-nav ms-auto gap-lg-3 text-center">

            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#experience">Experience</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#certifications">Certifications</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#education">Education</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#achievements">Achievements</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar