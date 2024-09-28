import data from '../../data/index.json'

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h1 className="section--heading">My Portfolio</h1>
        </div>
        <div>
          <button className="btn-github">
            <a href="https://github.com/sumitkainturaji">
              <img
                src="./images/github.svg"
                style={{
                  height: '30px',
                  width: '30px',
                  paddingRight: '10px',
                }}
                alt="GitHub Logo"
              />
              VISIT MY GITHUB
            </a>
          </button>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <div className="portfolio-section-card-link">
                <a href={item['link-path']}>
                  <p className="text-sm portfolio--link">
                    {item.link}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 20 19"
                      fill="none"
                    >
                      <path
                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                        stroke="currentColor"
                        stroke-width="2.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </p>
                </a>
                <a href={item['Github-link']}>
                  <p className="text-sm portfolio--link">
                    {item['github-visit']}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 20 19"
                      fill="none"
                    >
                      <path
                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                        stroke="currentColor"
                        stroke-width="2.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
