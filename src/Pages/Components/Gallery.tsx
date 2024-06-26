import { ArrowRightOutlined } from '@ant-design/icons';
import React from 'react';
import './gallery.scss';

const Gallery: React.FC = () => {
  return (
    <div className="gallery">
      <a href="https://mytutority.vercel.app" target={'_blank'}>
        <div className="gallery card gallery-1">
          <div className="cardname">
            <p>Private Tutor</p>
          </div>
        </div>
      </a>

      <a href="https://lustrous-tiramisu-ddab0e.netlify.app/" target={'_blank'}>
        <div className="gallery card gallery-2">
          <div className="cardname">
            <p>Todo list</p>
          </div>
        </div>
      </a>

      <a href="https://mancala-boardgame.netlify.app/" target={'_blank'}>
        <div className="gallery card gallery-3">
          <div className="cardname">
            <p>Board Game</p>
          </div>
        </div>
      </a>

      <a href="/multi-step-form" target={'_blank'}>
        <div className="gallery card gallery-4">
          <div className="cardname">
            <p>Multi-step Form</p>
          </div>
        </div>
      </a>

      <a href="https://elegant-dragon-097141.netlify.app/07-notification%20page/" target={'_blank'}>
        <div className="gallery card gallery-5">
          <div className="cardname">
            <p>Notification Page</p>
          </div>
        </div>
      </a>

      <a href="/janken" target={'_blank'}>
        <div className="gallery card gallery-6">
          <div className="cardname">
            <p>Rock Paper Scissors</p>
          </div>
        </div>
      </a>

      <a href="https://elegant-dragon-097141.netlify.app/14-weather%20api/" target={'_blank'}>
        <div className="gallery card gallery-7">
          <div className="cardname">
            <p>Weather API</p>
          </div>
        </div>
      </a>

      <a href="https://elegant-dragon-097141.netlify.app/11-parallax%20page/" target={'_blank'}>
        <div className="gallery card gallery-8">
          <div className="cardname">
            <p>Parallax Effect</p>
          </div>
        </div>
      </a>

      <a href="https://elegant-dragon-097141.netlify.app/09-expense%20chart/" target={'_blank'}>
        <div className="gallery card gallery-9">
          <div className="cardname">
            <p>Expense Chart</p>
          </div>
        </div>
      </a>

    <div className="gallery-text">
      <div>
        <a className="gallery-text go-to" href="https://elegant-dragon-097141.netlify.app/">
          <h1>Portfolio</h1>
          <div className="icon-bg-scale"><ArrowRightOutlined /></div>
        </a>
        <h3>Develop various categories of projects based on both self-created and provided web design as hobby</h3>
      </div>
      <a className="link-button" href="https://www.frontendmentor.io/profile/Ken-Takahashi-Q" target="_blank">
        Designs from <strong>frontendmentor.io</strong>
      </a>
    </div>
  </div>
  );
};

export default Gallery;
