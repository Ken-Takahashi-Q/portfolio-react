import { ToolOutlined } from '@ant-design/icons';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import { Collapse } from 'antd';
import React, { useEffect, useState } from 'react';
import './Home.scss';
import CardContainer from './Pages/Components/CardContainer';
import Gallery from './Pages/Components/Gallery';
import Navbar from './Pages/Components/Navbar';

const Home: React.FC = () => {
  const { Panel } = Collapse;
  const languageChars = ["ก", "A", "あ"];
  const [langChar, setLangChar] = useState<number>(0);

  const handleRandomLang = () => {
    setLangChar(Math.floor(Math.random()*3));
  }

  const LetterLoop = () => {
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentCharIndex((prevIndex) =>
            prevIndex === languageChars.length - 1 ? 0 : prevIndex + 1
          );
          setIsVisible(true);
        }, 500);
      }, 3000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <span className={isVisible ? "fade-in" : "fade-out"}>
        {languageChars[currentCharIndex]}
      </span>
    )
  };

  return (
    <div className="homepage">
      <Navbar/>

      <CardContainer />
      <Gallery/>

      <div className="experience-section">
        <h1 style={{borderBottom: "4px solid white"}}>Experiences</h1>
        <div className="work-section">
          <div className="work-section left-side">
            <span className="work-position"><h2>Fullstack Developer</h2> Big C Supercenter (Head Office)</span>
            <ul>
              <li>
                <span>
                  <strong>Developed backend services</strong> responsible for calculating prices, managing store data,
                  tracking products stock, and handling user cart information as part of an e-commerce platform using
                  Rust programming and MySQL
                </span>
              </li>
              <li id="exp-2">
                <span>
                  <strong>Involved</strong> in designing the project structure during initialization phase, ensured
                  code performance in the migration process from C++ to Rust
                </span>
              </li>
            </ul>
          </div>

          <div className="work-section right-side 5">
            <div className="logo rust">
              <img src="/images/home/rust.png"></img>
              <h2>Rust</h2>
            </div>
            <div className="logo cpp">
              <img src="/images/home/cpp.png"></img>
              <h2>C++</h2>
            </div>
            <div className="logo sql">
              <img src="/images/home/sql.png"></img>
              <h2>SQL</h2>
            </div>
            <div className="logo react">
              <img src="/images/home/react.png"></img>
              <h2>React</h2>
            </div>
          </div>
        </div>

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

          <div className="work-section right-side 5">
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
          <div className="card language">
            <div className="lang-test">
              <h2>Languages</h2>
              <span className="lang-test-line-1"><strong>IELTS 7.0</strong> (CEFR C1)</span>
              <span className="lang-test-line-2"><strong>JLPT N2</strong> (Pre-advanced)</span>
            </div>
            <div className="lang-letter">
              <LetterLoop/>
              {/* <span className="lang-letter-1">ก</span>
              <span className="lang-letter-2">A</span>
              <span className="lang-letter-3">あ</span> */}
            </div>
          </div>
          <div className="card certificate">
            <span><h2>More info</h2><a href="https://elegant-dragon-097141.netlify.app">visit old version HTML</a></span>
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
