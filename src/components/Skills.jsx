import { useState } from 'react'
import {
  FaCode,
  FaServer,
  FaTools,
  FaUserTie
} from "react-icons/fa"

function Skills() {
  const [activeIndex, setActiveIndex] = useState(0)

  const skillSections = [
    {
      title: "Frontend",
      icon: <FaCode />,
      skills: [
        "HTML5",
        "CSS",
        "JavaScript",
        "React",
        "Bootstrap"
      ]
    },

    {
      title: "Backend",
      icon: <FaServer />,
      skills: [
        "NodeJS",
        "Django",
        "MongoDB",
        "MySQL"
      ]
    },

    {
      title: "Tools",
      icon: <FaTools />,
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Jupyter Notebook"
      ]
    },

    {
      title: "Soft Skills",
      icon: <FaUserTie />,
      skills: [
        "Teamwork",
        "Leadership",
        "Communication",
        "Problem Solving"
      ]
    }
  ]

  return (
    <div id="skills" className="page-section">

      <div className="container">

        <h1 className="section-title text-center mb-5">
          Skills
        </h1>

        {/* Top Skill Categories */}
        <div className="row justify-content-center g-4 mb-5">

          {skillSections.map((section, index) => (

            <div
              className="col-lg-2 col-md-3 col-6"
              key={index}
            >

              <div
                className="skill-category-card text-center"
                onClick={() => setActiveIndex(index)}
              >

                <div className="skill-icon mb-3">
                  {section.icon}
                </div>

                <h5>
                  {section.title}
                </h5>

              </div>

            </div>

          ))}

        </div>

        {/* Skills Content */}
        <div className="glass-card p-5 text-center">

          <div className="mb-5">

            <h2 className="skill-heading mb-4">
              {skillSections[activeIndex].title}
            </h2>

            <div className="row justify-content-center g-3">

              {skillSections[activeIndex].skills.map((skill, skillIndex) => (
                <div
                  className="col-md-3 col-sm-4 col-6"
                  key={skillIndex}
                >
                  <div className="skill-card">
                    {skill}
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Skills