import { useState, useEffect } from 'react'
import './Home.scss'
import Navbar from './Pages/Components/Navbar'
import { Grid, Row, Col } from 'antd'
import { Collapse } from 'antd';
import {RightCircleOutlined} from '@ant-design/icons'
import Gallery from './Pages/Components/Gallery';

function Home() {
  const { Panel } = Collapse;
  const [showContact, setShowContact] = useState(false);

  // Calculate duration
  const startDate = {
    NSQ: new Date('2023-03-27'),
    JP: new Date('2022-10-01')
  }

  const endDate = {
    NSQ: new Date(),
    JP: new Date(),
  }

  const getDuration = (start, end) => {
    const diffInMs = Math.abs(end - start);
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    const years = Math.floor(diffInDays / 365.25);
    const months = Math.floor((diffInDays % 365.25) / 30);
  
    return `${years} ${years > 1 ? 'years' : 'year'} ${months} ${months > 1 ? 'months' : 'month'}`;
  }

  const durations = {
    NSQ: getDuration(startDate.NSQ, endDate.NSQ),
    JP: getDuration(startDate.JP, endDate.JP),
  };

  const showCard = () => {
    setShowContact(!showContact);
  }

  return (
    <div className="App">
      <Navbar/>
      
      <div className="card-container">
        <div className="card-round card-1">
          {/* <h1>Profile pic</h1> */}
        </div>
        <div className="card-round card-2">
          <h1 className="fullname">Yathip Takahashi</h1>
          <h1 className="nickname">KEN</h1>
        </div>

        <div className="card-round card-3">
          <h1>Looking for</h1>
          <h3>Frontend Developer</h3>
        </div>

        <div className="card-round card-4">
          <h1>Experience</h1>
          <div className="experience">
            <h3 className="date-sliding">2023.3 - now</h3>
            <h3 className="job-sliding">Software Engineer (Frontend)</h3>
            <h3 className="duration-sliding">{durations.NSQ}</h3>
          </div>
        </div>

        <div className="card-round card-5 skill">
          <h1>Skills</h1>
          <ul>
            <li>HTML/CSS/SCSS</li>
            <li>JavaScript, React</li>
            <li>Tailwind CSS</li>
            <li>Python</li>
          </ul>
        </div>

        <div className="card-round card-6" onClick={showCard}>
          <div className="find-out-more">
            <h1>Find out more </h1>
            <div className="find-out-more arrow">
              <RightCircleOutlined style={{fontSize: "3em"}}/>
            </div>
          </div>
        </div>

        <div className={`card-round card-7 ${showContact ? 'show' : 'hide'}`}>
          <div className="contact-container">
            <a className="linkedin" href="https://www.linkedin.com/in/k-tkhashi/">
              <img src="/images/logo-linkedin.png"></img>
              <h3>LinkedIn</h3>
            </a>
            <a className="github" href="https://github.com/Ken-Takahashi-Q">
              <img src="/images/logo-github.png"></img>
              <h3>Github</h3>
            </a>

            <a className="resume" href="/resume.pdf">
              
              <h3>Resume</h3>
            </a>

          </div>
          <div className="find-out-more">
            <RightCircleOutlined rotate={270} style={{fontSize: "3em"}}
              onClick={showCard} className="arrow"
            />
          </div>
        </div>
        
      </div>

      <span className={`separator ${showContact ? "show" : ""}`}></span>

      <div className="gallery">
        <div className="gallery-container">
          <a href="https://elegant-dragon-097141.netlify.app/12-calculator%20app/" target={'_blank'}>
            <div className='gallery card'>
              <div className="cardname">
                <p>Calculator</p>
              </div>
            </div>
          </a>

          <a href="https://lustrous-tiramisu-ddab0e.netlify.app/" target={'_blank'}>
            <div className='gallery card'>
              <div className="cardname">
                <p>Todo list</p>
              </div>
            </div>
          </a>

          <a href="https://mancala-boardgame.netlify.app/" target={'_blank'}>
            <div className='gallery card'>
              <div className="cardname">
                <p>Board Game</p>
              </div>
            </div>
          </a>

          <a href="https://elegant-dragon-097141.netlify.app/09-expense%20chart/" target={'_blank'}>
            <div className='gallery card'>
              <div className="cardname">
                <p>Expense Chart</p>
              </div>
            </div>
          </a>

          <a href="https://elegant-dragon-097141.netlify.app/07-notification%20page/" target={'_blank'}>
            <div className='gallery card'>
              <div className="cardname">
                <p>Notification Page</p>
              </div>
            </div>
          </a>

          <a href="https://elegant-dragon-097141.netlify.app/14-weather%20api/" target={'_blank'}>
            <div className='gallery card'>
              <div className="cardname">
                <p>Weather API</p>
              </div>
            </div>
          </a>
        </div>

        <div className="gallery-text">
          <h2>Portfolio</h2>
          <p>Explore</p>
        </div>
          
      </div>

    </div>
  )
}

export default Home
