function Achievements() {

  const achievements = [
    'Cummins Scholar of Cummins Technologies India (2024-25)',
    'Second Runner-Up in AI Visionaries Competition',
    'Scored 83 in NPTEL Machine Learning using Python',
    'Participated in various hackathons and technical competitions',
    'Checkmarx Codebashing Security Course Certified',
    'Student Co-ordinator of Godrej Infotech Centum Foundation’s Data Analysis Course'
  ]

  return (
    <div id="achievements" className="page-section">
      <div className="container">

        <h1 className="section-title text-center mb-5">
          Achievements
        </h1>

        <div className="row g-4">

          {achievements.map((item, index) => (
            <div className="col-md-6" key={index}>
              <div className="achievement-card">
                {item}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Achievements