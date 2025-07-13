import { RightCircleOutlined, UpCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import "./card-container.scss";

const CardContainer: React.FC = () => {
  const [showContact, setShowContact] = useState(false);

  const startDate = {
    KPC: new Date("2025-03-03"),
    BIGC: new Date("2023-07-02"),
    NSQ: new Date("2023-03-27"),
    JP: new Date("2022-10-01"),
  };

  const endDate = {
    KPC: new Date(),
    BIGC: new Date("2025-02-28"),
    NSQ: new Date("2023-06-31"),
    JP: new Date(),
  };

  const formatter = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    return `${year}.${month}`;
  };

  const getDuration = (start: Date, end: Date): string => {
    const diffInMs = Math.abs(end.getTime() - start.getTime());
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    const years = Math.floor(diffInDays / 365.25);
    const months = Math.round((diffInDays % 365.25) / 30);

    return `${years > 0 ? `${years} year${years > 1 ? "s" : ""}` : ""} ${
      months > 1 ? `${months} months` : ""
    }`;
  };

  const durations = {
    KPC: getDuration(startDate.KPC, endDate.KPC),
    BIGC: getDuration(startDate.BIGC, endDate.BIGC),
    NSQ: getDuration(startDate.NSQ, endDate.NSQ),
    JP: getDuration(startDate.JP, endDate.JP),
  };

  const showCard = () => {
    setShowContact(!showContact);
  };

  return (
    <div className="card-container">
      <div className="card-round card-1">{/* <h1>Profile pic</h1> */}</div>
      <div className="card-round card-2">
        <h1 className="fullname">
          Yathip<br></br>Takahashi
        </h1>
        <span className="nickname">
          <h1 className="nickname letter-1">K</h1>
          <h1 className="nickname letter-2">E</h1>
          <h1 className="nickname letter-3">N</h1>
        </span>
      </div>

      <div className="card-round card-3">
        <h1>Looking for</h1>
        <h3 className="looking-for-line-1">Fullstack Developer</h3>
      </div>

      <div className="card-round card-4">
        {/* <h1>Experience</h1> */}
        <div className="experience">
          <h3 className="date-sliding job-1">
            {formatter(startDate.KPC)} - now
          </h3>
          <h3 className="job-sliding job-1">Fullstack Developer</h3>
          <h3 className="duration-sliding job-1">{durations.KPC}</h3>
        </div>

        <div className="experience">
          <h3 className="date-sliding job-2">
            {formatter(startDate.BIGC)} - {formatter(endDate.BIGC)}
          </h3>
          <h3 className="job-sliding job-2">Fullstack Developer</h3>
          <h3 className="duration-sliding job-2">{durations.BIGC}</h3>
        </div>

        <div className="experience">
          <h3 className="date-sliding job-3">
            {formatter(startDate.NSQ)} - {formatter(endDate.NSQ)}
          </h3>
          <h3 className="job-sliding job-3">Software Engineer (Frontend)</h3>
          <h3 className="duration-sliding job-3">{durations.NSQ}</h3>
        </div>
      </div>

      <div className="card-round card-5 skill">
        <h1>Skills</h1>
        <ul>
          <li>
            JavaScript<br></br>React
          </li>
          <li>
            C++
            <br />
            Rust/Go
          </li>
          <li>
            Python
            <br />
            Node.js
          </li>
          <li>
            C#
            <br />
            SQL
          </li>
        </ul>
      </div>

      <div className="card-round card-6" onClick={showCard}>
        <div className="find-out-more">
          <h1>Find out more </h1>
          <div className="find-out-more arrow">
            <RightCircleOutlined style={{ fontSize: "3em" }} />
          </div>
        </div>
      </div>

      <div className={`card-round card-7 ${showContact ? "show" : "hide"}`}>
        <div className="contact-container">
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/k-tkhashi/"
            target="_blank"
          >
            <img src="/images/home/logo-linkedin.png" loading="lazy"></img>
            <h3>LinkedIn</h3>
          </a>
          <a
            className="github"
            href="https://github.com/Ken-Takahashi-Q"
            target="_blank"
          >
            <img src="/images/home/logo-github.png"></img>
            <h3>Github</h3>
          </a>

          <a
            className="resume"
            href="/Resume_Yathip Takahashi.pdf"
            target="_blank"
          >
            <h3>Resume</h3>
          </a>
        </div>
        <div className="find-out-more">
          <UpCircleOutlined
            style={{ fontSize: "3em" }}
            onClick={showCard}
            className="arrow"
          />
        </div>
      </div>

      <span className={`separator ${showContact ? "show" : ""}`}></span>
    </div>
  );
};

export default CardContainer;
