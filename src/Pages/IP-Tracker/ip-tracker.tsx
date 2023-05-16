import React from 'react';
import './ip-tracker.scss';
import { useState, useEffect } from 'react';

function IPTracker() {
  const [ipAddress, setIPAddress] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [timeZone, setTimeZone] = useState<string>("");
  const [provider, setProvider] = useState<string>("");

  interface InfoDetailItem {
    name: string;
    ip_address?: string;
    location?: string;
    timezone?: string;
    isp?: string;
  }

  const infoDetail: InfoDetailItem[] = [
    {name: "IP ADDRESS", ip_address: ipAddress},
    {name: "LOCATION", location: location},
    {name: "TIMEZONE", timezone: timeZone},
    {name: "ISP", isp: provider}
  ];

  return (
    <div className="ip-tracker">
      <div className="top-bg"></div>
      <div className="map">

      </div>
      <div className="ip-info">
        <h1>IP Address Tracker</h1>
        <div className="search-bar">
          <input placeholder="Search for any IP address or domain"></input>
          <div className="go-search">
            <img src="/images/ip-tracker/icon-arrow.svg"></img>
          </div>
        </div>

        <div className="details">
          {infoDetail.map((value) => (
            <div className="details-item" key={value.name}>
              <h5>{value.name}</h5>
              <h2>{value.ip_address || value.location || value.timezone || value.isp}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default IPTracker;