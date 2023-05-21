import React from 'react';
import { useState, useEffect } from 'react'
import './Home.scss'
import Navbar from './Pages/Components/Navbar'
import { Grid, Row, Col } from 'antd'
import { Collapse } from 'antd';
import {RightCircleOutlined} from '@ant-design/icons'
import Gallery from './Pages/Components/Gallery'
import CardContainer from './Pages/Components/CardContainer';
// import ReactCompareImage from 'react-compare-image';

const Home: React.FC = () => {
  const { Panel } = Collapse;

  return (
    <div className="App">
      <Navbar/>

      <CardContainer />
      <Gallery></Gallery>

      <div className="experience-section">
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
            <p>Used <strong>deep learning</strong> to improved quality of upscaled images up to 8x from neural networks</p>
            <span style={{height: "1em"}}></span>
            {/* <ReactCompareImage leftImage="/images/ug-lr.png" rightImage="/images/ug-hr.png" /> */}
          </div>
          <div className="card language">
            <h2>Languages</h2>
            <span><strong>IELTS 7.0</strong> (CEFR C1)</span>
            <span><strong>JLPT N2</strong> (Pre-advanced)</span>
          </div>
        </div>
      </div>

      {/* <span className="warning">Under reconstruction</span> */}

    </div>
  )
}

export default Home;
