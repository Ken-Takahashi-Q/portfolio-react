import React from 'react';
import { useState, useEffect } from 'react'
import './Home.scss'
import Navbar from './Pages/Components/Navbar'
import { Grid, Row, Col } from 'antd'
import { Collapse } from 'antd';
import {RightCircleOutlined} from '@ant-design/icons'
import Gallery from './Pages/Components/Gallery'

const Home: React.FC = () => {
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

  const getDuration = (start: Date, end: Date): string => {
    const diffInMs = Math.abs(end.getTime() - start.getTime());
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    const years = Math.floor(diffInDays / 365.25);
    const months = Math.round((diffInDays % 365.25) / 30);
  
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
          <h1 className="fullname">Yathip<br></br>Takahashi</h1>
          <span className="nickname">
            <h1 className="nickname letter-1">K</h1>
            <h1 className="nickname letter-2">E</h1>
            <h1 className="nickname letter-3">N</h1>
          </span>
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
            <li>HTML/CSS/<br></br>SCSS</li>
            <li>JavaScript/<br></br>TypeScript</li>
            <li>React/Next/<br></br>Tailwind</li>
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
            <a className="linkedin" href="https://www.linkedin.com/in/k-tkhashi/" target="_blank">
              <img src="/images/logo-linkedin.png"></img>
              <h3>LinkedIn</h3>
            </a>
            <a className="github" href="https://github.com/Ken-Takahashi-Q" target="_blank">
              <img src="/images/logo-github.png"></img>
              <h3>Github</h3>
            </a>

            <a className="resume" href="/resume.pdf" target="_blank">
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

      <Gallery></Gallery>

      <div className="experience">
        <h1>Experiences</h1>
        <div className="work-section">
          <div className="work-section left-side">
            <ul>
              <li>
                <span><strong>Developed</strong> a <strong>marketplace</strong> management website for organizing and tracking merchandise</span>
              </li>
              <li id="exp-2">
                <span>
                  <strong>Delicately</strong> designed. Contributed in planning and testing phases under <span>agile</span> project management
                </span>
              </li>
            </ul>
          </div>

          <div className="work-section right-side">
            <div className="logo react">
              <img src="/images/react.png"></img>
              <h2>React</h2>
            </div>
            <div className="logo sass">
              <img src="/images/sass.png"></img>
              <h2>SASS</h2>
            </div>
            <div className="logo antd">
              <img src="/images/antd.png"></img>
              <h2>AntD</h2>
            </div>
            <div className="logo figma">
              <img src="/images/figma.svg"></img>
              <h2>Figma</h2>
            </div>
            <div className="logo redux">
              <img src="/images/redux.png"></img>
              <h2>Redux</h2>
            </div>
          </div>
        </div>

        <div className="school-section">
          <div className="card intern">
            <h2>Internship</h2>
            <ul>
              <li>
                IoT devices monitoring website using <strong>React</strong>
              </li>
              <li>
                NLP machine learning models for <strong>text-to-speech</strong> task using BERT and Transformer
              </li>
            </ul>
          </div>
          <div className="card ug-project">
            <h2>Undergraduate Project</h2>
            <h3>Image super-resolution</h3>
            <p>Used <strong>deep learning</strong> to improved the quality upscaled images from neural networks</p>
            <div className="ug-image">
              <img src="/images/ug-lr.png" id="lr"></img>
              <img src="/images/ug-hr.png" id="hr"></img>
            </div>
          </div>
          <div className="card language">
            <h2>Languages</h2>
            <span><strong>IELTS 7.0</strong> (CEFR C1) | <strong>JLPT N2</strong> (Pre-advanced)</span>
          </div>
        </div>
      </div>

      {/* <span className="warning">Under reconstruction</span> */}

    </div>
  )
}

export default Home;
