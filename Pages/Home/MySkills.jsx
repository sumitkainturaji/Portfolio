import data from '../../data/index.json'

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="skills--section--heading">My Skills</p>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="skill" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title"> {item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
