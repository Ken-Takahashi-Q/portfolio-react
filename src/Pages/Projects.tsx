import React, { useState, useEffect } from 'react'
import './projects.scss'
import Navbar from './Components/Navbar'

const Projects: React.FC = () => {
  const projectCardList = [
    {
      goto: "https://elegant-dragon-097141.netlify.app/06-advice%20api/",
      header: "Advice API",
      detail: "Example of retrieving API. User can generate new advice by clicking the dice icon",
      img: "./images/janken.jpeg"
    },
    {
      goto: "https://elegant-dragon-097141.netlify.app/07-notification%20page/",
      header: "Notification Page",
      detail: "Notifications for social media site, toggle read and mark as all read",
      img: "./images/janken.jpeg"
    },
    {
      goto: "https://elegant-dragon-097141.netlify.app/08-credit%20card/",
      header: "Credit Card",
      detail: "Fill in the form, see details updated in real-time, and validate format",
      img: "./images/janken.jpeg"
    },
    {
      goto: "https://elegant-dragon-097141.netlify.app/09-expense%20chart/",
      header: "Expense Chart",
      detail: "View the bar chart and hover over the individual bars to see the correct amounts for each day",
      img: "./images/janken.jpeg"
    },
  ];

  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.project-card');
      const visibleCards = Array.from(cards).filter((card) => {
        const rect = card.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
      });
      setVisibleCards(visibleCards);
    };

    handleScroll(); // Initial check for visible cards

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="all-projects">
      <Navbar/>
      <div className="projects-section">
        <div className="projects-section-header">
          <h1>All Projects</h1>
        </div>

        <div className="projects-section-cards">
          {projectCardList.map((value, index) => {
            return (
              <div className="card-row">
                <a
                  className={`project-gallery ${visibleCards.includes(index) ? "isVisible" : ""}`}
                  href={value?.goto}
                  target={'_blank'}
                  key={index}
                >
                  <div className="project-card">
                    <div className="project-card-image" style={{backgroundImage: `url(${value?.img})`}}>
                    </div>
                    <div className="detail">
                      <h2>{value?.header}</h2>
                      <p>{value?.detail}</p>
                    </div>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects;
