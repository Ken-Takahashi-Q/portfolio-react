import React from 'react';
import { useState, useEffect } from 'react'
import './Home.scss'
import Navbar from './Pages/Components/Navbar'
import { Grid, Row, Col, Collapse } from 'antd'
import { ToolOutlined } from '@ant-design/icons'
import CardContainer from './Pages/Components/CardContainer';
import Gallery from './Pages/Components/Gallery'
import { ImgComparisonSlider } from '@img-comparison-slider/react';

const Home: React.FC = () => {
  const { Panel } = Collapse;
  const languageChars = ["ก", "A", "あ"];
  const [langChar, setLangChar] = useState<number>(0);

  const handleRandomLang = () => {
    setLangChar(Math.floor(Math.random()*3));
  }

  return (
    <div className="homepage">
      <Navbar/>

      <CardContainer />
      <Gallery></Gallery>

      <div className="experience-section">
        <h1 style={{borderBottom: "4px solid white"}}>Experiences</h1>
        <div className="work-section">
          <div className="work-section left-side">
            <span className="work-position"><h2>Software Engineer (Frontend)</h2> N-squared eCommerce</span>
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
              <img src="/images/home/react.png"></img>
              <h2>React</h2>
            </div>
            <div className="logo sass">
              <img src="/images/home/sass.png"></img>
              <h2>SASS</h2>
            </div>
            <div className="logo antd">
              <img src="/images/home/antd.png"></img>
              <h2>AntD</h2>
            </div>
            <div className="logo figma">
              <img src="/images/home/figma.svg"></img>
              <h2>Figma</h2>
            </div>
            <div className="logo redux">
              <img src="/images/home/redux.png"></img>
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
            <p>Used <strong>deep learning</strong> to improved quality of upscaled images up to 8x from neural networks</p>
            <span style={{height: "1em"}}></span>
            {/* <ReactCompareImage leftImage="/images/home/ug-lr.png" rightImage="/images/home/ug-hr.png" /> */}
            <ImgComparisonSlider style={{width: "15em"}}>
              <img slot="first" src="/images/home/ug-lr.png" style={{height: "15em"}}/>
              <img slot="second" src="/images/home/ug-hr.png"style={{height: "15em"}}/>
            </ImgComparisonSlider>
          </div>
          <div className="card language" onMouseEnter={handleRandomLang}>
            <div className="lang-test">
              <h2>Languages</h2>
              <span className="lang-test-line-1"><strong>IELTS 7.0</strong> (CEFR C1)</span>
              <span className="lang-test-line-2"><strong>JLPT N2</strong> (Pre-advanced)</span>
            </div>
            <div className="lang-letter">
              <span>{languageChars[langChar]}</span>
              {/* <span className="lang-letter-1">ก</span>
              <span className="lang-letter-2">A</span>
              <span className="lang-letter-3">あ</span> */}
            </div>
          </div>
          <div className="card certificate">
            <span><span className="warning">Under reconstruction :(</span><a href="https://elegant-dragon-097141.netlify.app">visit old version HTML</a></span>
            <div className="certificate arrow">
            <ToolOutlined style={{fontSize: "3em"}}/>
            </div>
          </div>
        </div>
      </div>

      {/* <span className="warning">Under reconstruction</span> */}

    </div>
  )
}

export default Home;
