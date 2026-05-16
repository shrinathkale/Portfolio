import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Experience from "./components/Experience"
import Certifications from "./components/Certifications"

import './App.css'

function App() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      '.page-section, .hero-section, .glass-card, .skill-category-card, .skill-card, .project-card, .education-card, .achievement-card, .experience-card, .certification-card, .contact-item, .social-icon, .btn.hero-btn'
    )

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    targets.forEach((target) => observer.observe(target))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />

      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Education />
      <Achievements />
      <Contact />
    </>
  )
}

export default App